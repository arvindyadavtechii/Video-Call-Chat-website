import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cuboid, Video, Code, Users, MessageSquare, Info, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: '/', icon: <Cuboid className="h-5 w-5" />, text: 'Home' },
    { to: '/video-chat', icon: <Video className="h-5 w-5" />, text: 'Video Chat' },
    { href: '#about', icon: <Info className="h-5 w-5" />, text: 'About' },
    { href: '#partners', icon: <Users className="h-5 w-5" />, text: 'Partners' },
    { href: '#contact', icon: <MessageSquare className="h-5 w-5" />, text: 'Contact' },
  ];

  return (
    <nav className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <Code className="h-8 w-8 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              AviiCoders
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              link.to ? (
                <Link
                  key={link.text}
                  to={link.to}
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  {link.icon}
                  {link.text}
                </Link>
              ) : (
                <a
                  key={link.text}
                  href={link.href}
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  {link.icon}
                  {link.text}
                </a>
              )
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-[400px] opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 pb-6">
            {navLinks.map((link) => (
              link.to ? (
                <Link
                  key={link.text}
                  to={link.to}
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.text}
                </Link>
              ) : (
                <a
                  key={link.text}
                  href={link.href}
                  className="flex items-center gap-2 hover:text-purple-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.text}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
