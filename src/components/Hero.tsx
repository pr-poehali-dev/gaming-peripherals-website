
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Геймерские устройства" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gaming-dark/90 to-gaming-dark-accent/80"></div>
      </div>
      
      {/* Радиальные градиенты для эффекта */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.2),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(51,195,240,0.2),transparent_40%)] pointer-events-none z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
            <span className="text-white">Твое</span>
            <span className="text-gaming-purple neon-text"> игровое</span>
            <br />
            <span className="text-white">преимущество</span>
          </h1>
          
          <p className="text-gray-100 text-lg mb-8 max-w-lg mx-auto lg:mx-0 drop-shadow">
            Профессиональная игровая периферия от ведущих брендов с доставкой по всей России. Выбирай лучшее для своих побед!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gaming-purple hover:bg-gaming-purple/90"
            >
              Перейти в каталог
              <Icon name="ArrowRight" className="ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gaming-purple text-white hover:bg-gaming-purple/10"
            >
              Новинки
              <Icon name="Sparkles" className="ml-2" />
            </Button>
          </div>
          
          <div className="flex items-center mt-10 space-x-8 justify-center lg:justify-start">
            <div className="flex items-center bg-gaming-dark-accent/70 p-2 px-3 rounded-lg">
              <Icon name="Truck" className="text-gaming-blue mr-2" />
              <span className="text-gray-300">Быстрая доставка</span>
            </div>
            <div className="flex items-center bg-gaming-dark-accent/70 p-2 px-3 rounded-lg">
              <Icon name="ShieldCheck" className="text-gaming-orange mr-2" fallback="Shield" />
              <span className="text-gray-300">Гарантия качества</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for decoration */}
      <div className="absolute right-10 top-1/3 bg-gaming-dark-accent p-3 rounded-full shadow-lg animate-bounce duration-1000 z-10">
        <Icon name="Zap" className="text-gaming-orange" size={24} />
      </div>
      
      <div className="absolute left-10 bottom-1/4 bg-gaming-dark-accent p-3 rounded-full shadow-lg animate-pulse z-10">
        <Icon name="Headphones" className="text-gaming-purple" size={24} />
      </div>
      
      {/* Promo badge */}
      <div className="absolute top-10 right-10 bg-gaming-blue/80 text-white py-2 px-4 rounded-lg font-bold shadow-xl z-10 hidden md:block">
        <span className="text-sm block opacity-80">Скидка</span>
        <span className="text-2xl">-20%</span>
      </div>
    </section>
  );
};

export default Hero;
