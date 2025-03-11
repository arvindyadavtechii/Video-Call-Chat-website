import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Reviews: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reviews = sectionRef.current?.querySelectorAll('.review-card');
    
    reviews?.forEach((review, index) => {
      gsap.from(review, {
        scrollTrigger: {
          trigger: review,
          start: "top bottom-=1",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.0,
        delay: index * 0.0
      });
    });
  }, []);

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      review: "Amazing service and exceptional technical expertise. The team went above and beyond our expectations.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateCo",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      review: "The most reliable development partner we've worked with. Their attention to detail is remarkable.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      review: "Transformed our vision into reality. The team's communication and delivery were perfect.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-black/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
          Client Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="review-card bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <p className="text-gray-400">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;