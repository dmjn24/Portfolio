import Link from 'next/link';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-background/50 min-h-[60vh] flex items-center">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-accent font-medium tracking-wider mb-4">04. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Get In Touch
                </h2>
                <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                    Although I'm not currently looking for any new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <Link
                    href="mailto:hello@example.com"
                    className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-background bg-accent rounded hover:bg-accent/90 transition-colors"
                >
                    <Mail size={20} />
                    Say Hello
                </Link>
            </div>
        </section>
    );
};

export default Contact;
