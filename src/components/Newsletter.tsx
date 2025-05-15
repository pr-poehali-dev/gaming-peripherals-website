
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Newsletter: React.FC = () => {
  return (
    <section className="py-16 bg-gaming-dark-accent relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,rgba(139,92,246,0.1),transparent_30%),radial-gradient(circle_at_90%_50%,rgba(51,195,240,0.1),transparent_30%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Подпишись на рассылку</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Получай уведомления о новинках, специальных предложениях и эксклюзивных скидках для подписчиков
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className="bg-gaming-dark border-gaming-purple/30 text-white flex-grow"
            />
            <Button className="bg-gaming-purple hover:bg-gaming-purple/90 whitespace-nowrap">
              Подписаться
              <Icon name="Send" className="ml-2" size={16} />
            </Button>
          </div>
          
          <p className="text-gray-500 text-sm mt-4">
            Нажимая на кнопку, вы соглашаетесь с <a href="#" className="text-gaming-purple hover:underline">политикой конфиденциальности</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
