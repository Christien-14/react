/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 24/05/2024 - 12:54:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/05/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React, { useState } from 'react';
import axios from 'axios';

const ArticleForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://2c0f:e01:607:5b00:a53c:4129:e321:7ca2:5000/api/articles', { title, date, image, body });
      alert('Article créé avec succès');
      setTitle('');
      setDate('');
      setImage('');
      setBody('');
    } catch (err) {
      console.error('Error creating article:', err);
    }
  };

  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold text-center mb-4">Publier un Article</h3>
      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          className="w-full p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date"
          className="w-full p-2 border rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          placeholder="Body"
          className="w-full p-2 border rounded"
          rows="4"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Publier
        </button>
      </form>
    </section>
  );
};

export default ArticleForm;
