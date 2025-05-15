
import React from 'react';

const categoryItems = [
  {
    title: 'Клавиатуры',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    color: 'gaming-purple'
  },
  {
    title: 'Мыши',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    color: 'gaming-blue'
  },
  {
    title: 'Наушники',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    color: 'gaming-orange'
  },
  {
    title: 'Коврики',
    image: 'https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
    color: 'gaming-purple'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-gaming-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">Категории товаров</h2>
            <p className="text-gray-400 max-w-2xl">Выбирай из широкого ассортимента игровой периферии для полного комплекта твоего игрового места</p>
          </div>
          <a href="#" className="inline-flex items-center mt-4 md:mt-0 text-gaming-purple hover:text-gaming-purple/80 transition-colors">
            Все категории
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryItems.map((category, index) => (
            <div 
              key={index} 
              className="category-card relative rounded-lg overflow-hidden h-64 group"
            >
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className={`text-xl font-bold mb-1 text-white neon-text`}>
                  {category.title}
                </h3>
                <a href="#" className="inline-flex items-center text-white hover:text-gaming-purple transition-colors text-sm">
                  Перейти
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <div className={`absolute top-4 right-4 bg-${category.color} text-white text-xs font-bold px-2 py-1 rounded`}>
                ТОП
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
