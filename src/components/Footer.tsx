export const Footer = () => {
    return (
      <footer className="relative mt-16 border-t border-surface-border bg-surface-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left side - Logo */}
            <div className="flex items-center gap-3">
              <span className="text-lg font-header font-bold text-gradient-primary">
                BCCSS
              </span>
            </div>
            
            {/* Center - Made with love */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-gray/50 border border-surface-border hover:bg-surface-gray transition-all duration-300 group">
              <span className="text-sm text-text-gray">Made with</span>
              <span className="text-red-500 group-hover:scale-125 transition-transform duration-300">♥</span>
              <span className="text-sm text-text-gray">@ Boston College</span>
            </div>
            
            {/* Right side - Year */}
            <div className="text-sm text-text-dim">
              © 2025 BCCSS
            </div>
          </div>
          
          {/* Bottom gradient line */}
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-primary-green/50 to-transparent"></div>
        </div>
      </footer>
    )
  }
  