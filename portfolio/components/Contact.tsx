import Link from "next/link";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-background/50 min-h-[60vh] flex items-center scroll-mt-32"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-mango font-medium tracking-wider mb-4">
          04. What's Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-300 dark:text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          I’m a junior web developer focused on building clean and reliable web
          applications. If you have a project where I can help or just want to
          connect, feel free to reach out — I’ll get back to you as soon as I
          can.
        </p>

        <Link
          href="mailto:damjantrajkovski0024@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold bg-mango rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-mango/50 hover:brightness-110 active:scale-95"
        >
          {" "}
          <Mail size={20} /> damjantrajkovski0024@gmail.com{" "}
        </Link>
      </div>
    </section>
  );
};

export default Contact;
