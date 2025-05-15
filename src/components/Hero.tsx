import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gaming-dark to-gaming-dark-accent py-16 lg:py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(51,195,240,0.1),transparent_40%)] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-white">Твое</span>
              <span className="text-gaming-purple neon-text"> игровое</span>
              <br />
              <span className="text-white">преимущество</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Профессиональная игровая периферия от ведущих брендов с доставкой
              по всей России. Выбирай лучшее для своих побед!
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gaming-purple hover:bg-gaming-purple/90 animate-glow"
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

            <div className="flex items-center mt-10 space-x-6">
              <div className="flex items-center">
                <Icon name="Truck" className="text-gaming-blue mr-2" />
                <span className="text-gray-300">Быстрая доставка</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="ShieldCheck"
                  className="text-gaming-orange mr-2"
                  fallback="Shield"
                />
                <span className="text-gray-300">Гарантия качества</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Геймерские устройства"
                className="rounded-lg shadow-2xl neon-border relative z-10 object-cover w-full h-64 md:h-80"
              />
              <div className="absolute -bottom-4 -right-4 bg-gaming-blue/80 text-white py-2 px-4 rounded-lg font-bold shadow-xl">
                <span className="text-sm block opacity-80">Скидка</span>
                <span className="text-2xl">-20%</span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-10 right-20 bg-gaming-dark-accent p-3 rounded-full shadow-lg animate-bounce duration-1000">
              <Icon name="Zap" className="text-gaming-orange" size={24} />
            </div>

            <div className="absolute bottom-20 -left-5 bg-gaming-dark-accent p-3 rounded-full shadow-lg animate-pulse">
              <Icon
                name="Headphones"
                className="text-gaming-purple"
                size={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
