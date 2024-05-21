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
import React, { useEffect, useState } from 'react';
import un_programmeur_mobile from "../images/mobile.jpg";
import blockchain from "../images/blockchain.jpg";
import une_camera from "../images/eo.jpg"
import { getArticles } from '../net/api';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const _get_articles = async () => {
    const articles = await getArticles();
    setArticles(articles);
    console.log(articles);
  }

  useEffect(() => {
    _get_articles();
  }, []);

  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold text-center mb-4">Mes derniers articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border p-4">
            <img src={article.photo} alt={article.title} className="w-full h-48 object-cover mb-4" />
            <h4 className="text-xl font-bold">{article.title}</h4>
            <p>{article.body}</p>
            <p className="text-gray-600">{article.created}</p>

            <p className='text-xs'>{article._id}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
