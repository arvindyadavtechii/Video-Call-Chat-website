import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Cpu, Globe, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    
    cards?.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=1",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.0,
        delay: index * 0.0
      });
    });
  }, []);

  const features = [
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: "Custom Development",
      description: "Tailored solutions for your unique needs"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "Global Reach",
      description: "Serving clients worldwide with excellence"
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: "Advanced Technology",
      description: "Using cutting-edge tools and frameworks"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Expert Team",
      description: "Skilled professionals at your service"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          About AviiCoders
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-300">
            We are a passionate team of developers dedicated to creating innovative solutions
            that help businesses thrive in the digital age. With years of experience and
            cutting-edge technology, we transform ideas into reality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;