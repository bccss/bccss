export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Please provide a valid email address' });
    }

    // Get MailChimp credentials from environment variables
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us18'

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_SERVER_PREFIX) {
      console.error('Missing MailChimp environment variables');
      return res.status(500).json({ message: 'Server configuration error. Please try again later.' });
    }

    // MailChimp API endpoint
    const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    // Prepare the subscription data
    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        SOURCE: 'BCCSS Website',
        SIGNUP_URL: req.headers.referer || 'bccss.co'
      }
    };

    // Make request to MailChimp
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      return res.status(200).json({
        message: 'Successfully subscribed! Welcome to the BCCSS community! 🚀',
        success: true
      });
    } else if (response.status === 400 && result.title === 'Member Exists') {
      return res.status(200).json({
        message: 'You\'re already subscribed! Thanks for being part of our community.',
        success: true
      });
    } else {
      console.error('MailChimp API Error:', result);
      return res.status(400).json({ message: 'Failed to subscribe. Please try again.' });
    }

  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
}
