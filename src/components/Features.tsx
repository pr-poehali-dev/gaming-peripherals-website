
import React from 'react';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Отправка заказа в день оформления. Доставка по всей России.',
    color: 'gaming-purple'
  },
  {
    icon: 'ShieldCheck',
    title: 'Гарантия качества',
    description: 'Все товары сертифицированы и имеют официальную гарантию.',
    color: 'gaming-blue'
  },
  {
    icon: 'Wallet',
    title: 'Удобная оплата',
    description: 'Оплата при получении, банковской картой или через электронные кошельки.',
    color: 'gaming-orange'
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Поддержка 24/7',
    description: 'Наши специалисты всегда готовы помочь с выбором и ответить на вопросы.',
    color: 'gaming-purple'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gaming-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gaming-dark-accent p-6 rounded-lg border border-gray-800 hover:border-gaming-purple/50 transition-all"
            >
              <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-${feature.color}/10`}>
                <Icon name={feature.icon} className={`text-${feature.color}`} size={24} fallback="CheckCircle" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
