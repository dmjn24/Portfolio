import Link from "next/link";
import { Github, Linkedin, Twitter, Codepen } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-6 md:pl-32 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="flex items-center gap-6">
        <Link
          href="https://github.com"
          target="_blank"
          className="text-gray-400 hover:text-accent transition-all hover:-translate-y-1 duration-300"
        >
          <Github size={20} />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="text-gray-400 hover:text-accent transition-all hover:-translate-y-1 duration-300"
        >
          <Linkedin size={20} />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          className="text-gray-400 hover:text-accent transition-all hover:-translate-y-1 duration-300"
        >
          <Twitter size={20} />
        </Link>
        <Link
          href="https://codepen.io"
          target="_blank"
          className="text-gray-400 hover:text-accent transition-all hover:-translate-y-1 duration-300"
        >
          <Codepen size={20} />
        </Link>
      </div>

      <div>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 text-sm font-medium text-accent border border-accent rounded hover:bg-accent/10 transition-colors"
        >
          My resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
