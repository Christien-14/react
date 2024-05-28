/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 24/05/2024 - 12:52:16
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/05/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://back001.onrender.com/api/articles');

        setArticles(response.data);
      } catch (err) {
        console.error('Error fetching articles:', err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold text-center mb-4">Mes derniers articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border p-4">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover mb-4" />
            <h4 className="text-xl font-bold">{article.title}</h4>
            <p className="text-gray-600">{article.date}</p>
            <p className="text-gray-800">{article.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
