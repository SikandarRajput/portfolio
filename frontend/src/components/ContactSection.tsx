import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden group">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/5 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] translate-x-1/2 translate-y-1/2" />

                    <div className="inline-flex p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 mb-4 group-hover:scale-110 transition-transform duration-500">
                        <MessageSquare className="w-8 h-8 text-orange-500" />
                    </div>

                    <div className="space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black">Let's work together</h2>
                        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                            Ready to build something amazing? Whether you have a clear vision or just an initial spark, I'm here to help you bring it to life.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link
                            to="/contact"
                            className="px-10 py-5 bg-zinc-100 text-zinc-950 font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-3 shadow-xl shadow-zinc-950/20 active:scale-[0.98]"
                        >
                            Start a Conversation
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 bg-zinc-900 border border-zinc-800 font-bold rounded-2xl hover:border-orange-500/50 transition-all flex items-center gap-3 active:scale-[0.98]"
                        >
                            Resume
                        </a>
                        <a
                            href="mailto:ahmarrana13@gmail.com"
                            className="px-10 py-5 bg-zinc-900 border border-zinc-800 font-bold rounded-2xl hover:border-orange-500/50 transition-all flex items-center gap-3 active:scale-[0.98]"
                        >
                            <Mail className="w-5 h-5 text-zinc-500" />
                            ahmarrana13@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
