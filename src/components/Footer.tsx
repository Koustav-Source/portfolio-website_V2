export function Footer() {
  return (
    <footer className="py-12 bg-[#0c0d0e] border-t border-[#222326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#9a9b9f]">
        <div>
          <p>© {new Date().getFullYear()} Koustav Dey. All rights reserved.</p>
          <p className="text-[10px] text-[#9a9b9f]/70 mt-1">
            Building intelligent, resilient and real-world software systems.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#work" className="hover:text-[#ededed] transition-colors">Work</a>
          <a href="#engineering" className="hover:text-[#ededed] transition-colors">Engineering</a>
          <a href="#experience" className="hover:text-[#ededed] transition-colors">Experience</a>
          <a href="#about" className="hover:text-[#ededed] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#ededed] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
