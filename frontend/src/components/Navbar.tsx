import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StarIcon } from './Icons';
import { Button } from './ui/Button';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resume', href: '/Sikandar_Rajput_Python_Django_Resume.pdf', external: true },
];

const Navbar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
            <Link to="/" className="flex items-center gap-2 group">
                <div className="text-orange-500 transition-transform group-hover:rotate-12">
                    <StarIcon className="w-5 h-5" />
                </div>
                <span className="text-lg font-bold text-zinc-100 tracking-tight">Sikandar Rajput</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => {
                    const isExternal = link.href.startsWith('http');
                    const isHash = link.href.startsWith('#');
                    const isInternalHash = link.href.startsWith('/#');

                    if (isExternal || link.external) {
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        );
                    }

                    if (isHash || isInternalHash) {
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        );
                    }

                    return (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-sm font-medium transition-colors ${location.pathname === link.href
                                ? 'text-orange-500'
                                : 'text-zinc-400 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>

            <div className="flex items-center gap-4">
                <Button variant="primary" size="sm" onClick={() => navigate(`/contact`)}>
                    Get in Touch
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
