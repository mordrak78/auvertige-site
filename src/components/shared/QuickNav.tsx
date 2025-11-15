import * as React from 'react';
import { Flower } from 'lucide-react';

const QuickNav = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-16 z-40 md:hidden rounded-b-3xl border-b border-sage-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-6 text-base">
          <a 
            href="#creations" 
            className="text-sage-700 hover:text-sage-500 transition-all duration-300 font-medium px-4 py-3 flex flex-col items-center group"
          >
            <div className="bg-sage-50 group-hover:bg-sage-100 rounded-full p-3 mb-2 transition-colors duration-300">
              <Flower className="text-poppy-500" size={18} />
            </div>
            <span>Créations</span>
          </a>
          <a 
            href="#commander" 
            className="text-sage-700 hover:text-sage-500 transition-all duration-300 font-medium px-4 py-3 flex flex-col items-center group"
          >
            <div className="bg-sage-50 group-hover:bg-sage-100 rounded-full p-3 mb-2 transition-colors duration-300">
              <Flower className="text-poppy-500" size={18} />
            </div>
            <span>Commander</span>
          </a>
          <a 
            href="#boutique" 
            className="text-sage-700 hover:text-sage-500 transition-all duration-300 font-medium px-4 py-3 flex flex-col items-center group"
          >
            <div className="bg-sage-50 group-hover:bg-sage-100 rounded-full p-3 mb-2 transition-colors duration-300">
              <Flower className="text-poppy-500" size={18} />
            </div>
            <span>Boutique</span>
          </a>
          <a 
            href="#avis" 
            className="text-sage-700 hover:text-sage-500 transition-all duration-300 font-medium px-4 py-3 flex flex-col items-center group"
          >
            <div className="bg-sage-50 group-hover:bg-sage-100 rounded-full p-3 mb-2 transition-colors duration-300">
              <Flower className="text-poppy-500" size={18} />
            </div>
            <span>Avis</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default QuickNav;
