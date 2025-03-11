import React from 'react';
import { Link } from 'react-router-dom';
import { Cuboid, Video, Code, Users, MessageSquare, Info } from 'lucide-react';

const Navbar: React.FC = () => {
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
          <div className="hidden md:flex gap-6">
            <Link to="/" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Cuboid className="h-5 w-5" />
              Home
            </Link>
            <Link to="/video-chat" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Video className="h-5 w-5" />
              Video Chat
            </Link>
            <a href="#about" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Info className="h-5 w-5" />
              About
            </a>
            <a href="#partners" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <Users className="h-5 w-5" />
              Partners
            </a>
            <a href="#contact" className="flex items-center gap-2 hover:text-purple-400 transition-colors">
              <MessageSquare className="h-5 w-5" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;