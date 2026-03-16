import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-12 mb-16">
                    <div className="space-y-4">
                        <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">Contact</span>
                        <h1 className="text-4xl md:text-7xl font-black">Get in Touch</h1>
                    </div>
                    <p className="text-zinc-500 max-w-2xl text-xl leading-relaxed">
                        Have a project in mind or just want to chat about backend architecture? I'm always open to new opportunities and interesting conversations.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: <Mail />, label: 'Email', value: 'ahmarrana13@gmail.com', href: 'mailto:ahmarrana13@gmail.com' },
                                { icon: <Phone />, label: 'Phone', value: '+923062673313', href: 'tel:+923062673313' },
                                { icon: <MapPin />, label: 'Location', value: 'Faisalabad, Pakistan' },
                            ].map((item, i) => (
                                item.href ? (
                                    <a
                                        key={i}
                                        href={item.href}
                                        className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-orange-500/30 transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">{item.label}</h4>
                                        <p className="font-bold text-lg text-zinc-200">{item.value}</p>
                                    </a>
                                ) : (
                                    <div
                                        key={i}
                                        className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl group"
                                    >
                                        <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
                                            {item.icon}
                                        </div>
                                        <h4 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">{item.label}</h4>
                                        <p className="font-bold text-lg text-zinc-200">{item.value}</p>
                                    </div>
                                )
                            ))}
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold">Follow Me</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github />, href: 'https://github.com/SikandarRajput' },
                                    { icon: <Linkedin />, href: 'https://www.linkedin.com/in/sikandar-rajput-9439701ba/' },
                                ].map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:border-orange-500/30 transition-all"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-8 md:p-12 bg-zinc-900 border border-zinc-800 rounded-[3rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px]" />

                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-zinc-200 focus:outline-none focus:border-orange-500/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-zinc-200 focus:outline-none focus:border-orange-500/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-zinc-200 focus:outline-none focus:border-orange-500/50 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 text-zinc-200 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-orange-500/20 active:scale-[0.98] flex items-center justify-center gap-3"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
