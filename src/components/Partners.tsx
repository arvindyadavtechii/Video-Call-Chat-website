import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Partners: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const partners = sectionRef.current?.querySelectorAll('.partner-card');
    
    partners?.forEach((partner, index) => {
      gsap.from(partner, {
        scrollTrigger: {
          trigger: partner,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.0,
        delay: index * 0.
      });
    });
  }, []);

  const partners = [
    {
      name: "TechCorp",
      logo: "https://img.freepik.com/premium-vector/vector-leaf-six-with-natural-ecology-abstract-design-concept-logo-logotype-element-template_755682-636.jpg",
      description: "Leading technology solutions provider"
    },
    {
      name: "InnovateLabs",
      logo: "https://th.bing.com/th/id/OIP.EpSEipUp_Sw8x-Q7Y5eWfgHaH5?w=1500&h=1600&rs=1&pid=ImgDetMain",
      description: "Innovation and research partner"
    },
    {
      name: "DataFlow",
      logo: "https://th.bing.com/th/id/OIP.1xbgvZbGzXEkrsXFYE0UlwHaE0?w=1043&h=678&rs=1&pid=ImgDetMain",
      description: "Data analytics specialist"
    },
    {
      name: "CloudNine",
      logo: "https://img.freepik.com/premium-vector/cloud-tech-logo-design-template_92495-111.jpg",
      description: "Cloud infrastructure partner"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-black/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Our Partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="partner-card bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-400">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;