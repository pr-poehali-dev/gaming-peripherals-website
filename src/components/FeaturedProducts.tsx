
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'HyperX Alloy FPS Pro',
    description: 'Механическая игровая клавиатура с RGB-подсветкой',
    price: 7990,
    oldPrice: 9490,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtaW5nJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    badge: 'Хит',
    badgeColor: 'bg-gaming-purple'
  },
  {
    id: 2,
    name: 'Logitech G502 HERO',
    description: 'Игровая мышь с настраиваемыми весами и 11 кнопками',
    price: 4990,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1618499890638-0dc2dfa57e80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWluZyUyMG1vdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    badge: 'Новинка',
    badgeColor: 'bg-gaming-blue'
  },
  {
    id: 3,
    name: 'SteelSeries Arctis 7',
    description: 'Беспроводные игровые наушники с микрофоном',
    price: 12990,
    oldPrice: 14990,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    badge: 'Скидка',
    badgeColor: 'bg-gaming-orange'
  },
  {
    id: 4,
    name: 'Razer Goliathus Extended',
    description: 'Большой игровой коврик для мыши с RGB-подсветкой',
    price: 3490,
    oldPrice: null,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91c2UlMjBwYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    badge: 'ТОП продаж',
    badgeColor: 'bg-gaming-purple'
  }
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gaming-dark-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Популярные товары</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Самые востребованные модели игровой периферии, выбранные профессиональными геймерами и киберспортсменами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card bg-gaming-dark rounded-lg overflow-hidden border border-gray-800 hover:border-gaming-purple/50 transition-all"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform transition-transform hover:scale-105"
                />
                {product.badge && (
                  <div className={`absolute top-2 right-2 ${product.badgeColor} text-white text-xs font-semibold px-2 py-1 rounded`}>
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-3 h-10 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-white font-bold text-lg">{product.price.toLocaleString()} ₽</span>
                    {product.oldPrice && (
                      <span className="text-gray-500 line-through text-sm ml-2">{product.oldPrice.toLocaleString()} ₽</span>
                    )}
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="bg-gaming-dark-accent hover:bg-gaming-purple text-white rounded-full p-2"
                  >
                    <Icon name="ShoppingCart" size={18} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button 
            className="bg-transparent hover:bg-gaming-purple/10 text-white border-2 border-gaming-purple"
          >
            Смотреть все товары
            <Icon name="ChevronRight" className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
