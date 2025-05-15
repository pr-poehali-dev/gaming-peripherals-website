
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gaming-dark pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <a href="/" className="flex items-center">
                <span className="font-montserrat font-bold text-2xl tracking-wider neon-text text-gaming-purple">
                  WP <span className="text-white">Store</span>
                </span>
              </a>
            </div>
            <p className="text-gray-400 mb-4">
              Лучший магазин игровой периферии. Мы предлагаем только качественные и проверенные товары от ведущих производителей.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Клавиатуры</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Мыши</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Наушники</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Микрофоны</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Коврики</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Аксессуары</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Возврат и обмен</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Гарантия</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Блог</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gaming-purple transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="MapPin" className="text-gaming-purple mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">Москва, ул. Игровая, д. 42</span>
              </li>
              <li className="flex items-center">
                <Icon name="Phone" className="text-gaming-purple mr-2 flex-shrink-0" size={18} />
                <a href="tel:+78001234567" className="text-gray-400 hover:text-gaming-purple transition-colors">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" className="text-gaming-purple mr-2 flex-shrink-0" size={18} />
                <a href="mailto:info@wp-store.ru" className="text-gray-400 hover:text-gaming-purple transition-colors">info@wp-store.ru</a>
              </li>
              <li className="flex items-center">
                <Icon name="Clock" className="text-gaming-purple mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-400">Пн-Вс: 10:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 WP Store. Все права защищены.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gaming-purple text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 hover:text-gaming-purple text-sm transition-colors">
              Публичная оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
