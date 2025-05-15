
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gaming-dark-accent sticky top-0 z-50 border-b border-gaming-purple/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="font-montserrat font-bold text-2xl tracking-wider neon-text text-gaming-purple">
                WP <span className="text-white">Store</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-gaming-purple transition-colors">Главная</a>
            <a href="#" className="text-white hover:text-gaming-purple transition-colors">Каталог</a>
            <a href="#" className="text-white hover:text-gaming-purple transition-colors">Новинки</a>
            <a href="#" className="text-white hover:text-gaming-purple transition-colors">Акции</a>
            <a href="#" className="text-white hover:text-gaming-purple transition-colors">Контакты</a>
          </nav>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                placeholder="Поиск..."
                className="w-48 pr-8 bg-gaming-dark-accent border-gaming-purple/30 text-white"
              />
              <Icon 
                name="Search" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={18} 
              />
            </div>

            <Button variant="ghost" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-gaming-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </Button>

            <Button variant="ghost">
              <Icon name="User" size={20} />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button variant="ghost" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-gaming-orange text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button 
              variant="ghost" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-white hover:bg-gaming-purple/20 rounded-md">Главная</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gaming-purple/20 rounded-md">Каталог</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gaming-purple/20 rounded-md">Новинки</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gaming-purple/20 rounded-md">Акции</a>
              <a href="#" className="block px-3 py-2 text-white hover:bg-gaming-purple/20 rounded-md">Контакты</a>
            </div>
            <div className="relative mt-3 px-2">
              <Input
                placeholder="Поиск..."
                className="w-full bg-gaming-dark-accent border-gaming-purple/30 text-white"
              />
              <Icon 
                name="Search" 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={18} 
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
