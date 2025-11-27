import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-24 hidden md:flex flex-col items-center py-8 bg-background border-r border-white/10 z-50">
      <div className="mb-auto">
        <Link
          href="/"
          className="text-4xl font-bold text-accent tracking-tighter hover:text-white transition-colors"
        >
          D.
        </Link>
      </div>

      {/* Vertical Navigation */}
      <nav className="flex flex-row items-center gap-12 [writing-mode:vertical-lr] rotate-180">
        <Link
          href="#contact"
          className="text-sm font-medium text-gray-400 hover:text-accent transition-all hover:-translate-y-1 duration-300"
        >
          Contact
        </Link>
        <Link
          href="#experience"
          className="text-sm font-medium text-gray-400 hover:text-accent transition-all hover:-translate-y-1 duration-300"
        >
          Exp.
        </Link>
        <Link
          href="#projects"
          className="text-sm font-medium text-gray-400 hover:text-accent transition-all hover:-translate-y-1 duration-300"
        >
          Projects
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium text-gray-400 hover:text-accent transition-all hover:-translate-y-1 duration-300"
        >
          About
        </Link>
      </nav>

      <div className="mt-auto h-10 w-px bg-white/10"></div>
    </aside>
  );
};

export default Sidebar;
