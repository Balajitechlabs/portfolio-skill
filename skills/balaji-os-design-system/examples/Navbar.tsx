import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  items: NavItem[];
  logoText?: string;
  onItemHover?: () => void;
  onItemClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  items,
  logoText = "BALAJI OS",
  onItemHover,
  onItemClick,
}) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#060b19]/70 backdrop-blur-xl border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between transition-all duration-300">
      {/* Brand logo in technical accent style */}
      <div className="flex items-center space-x-2">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#8fa0c2]">
          {logoText}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      </div>

      {/* Nav Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onMouseEnter={onItemHover}
            onClick={onItemClick}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1b0cb] hover:text-white transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Action CTA Button */}
      <div>
        <button
          onMouseEnter={onItemHover}
          onClick={onItemClick}
          className="px-4 py-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
        >
          Terminal
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
