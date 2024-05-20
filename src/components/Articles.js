/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 20/05/2024 - 22:04:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/05/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React from 'react';

const articles = [
  { title: 'Guerre en RDC', date: '2024-01-01', image: '/images/img1.jpg' },
  { title: 'Les FARDC et leur commandemet', date: '2024-02-01', image: '/images/img2.jpg' },
  { title: 'Les replis Strategiques des FARDC', date: '2024-03-01', image: '/images/img3.jpg' },
];

const Articles = () => {
  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold text-center mb-4">Mes derniers articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border p-4">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4" />
            <h4 className="text-xl font-bold">{article.title}</h4>
            <p className="text-gray-600">{article.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
