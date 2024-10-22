/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 23/05/2024 - 15:19:38
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/05/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://back001.onrender.com/api/contact', { name, email, message });

      alert('Message envoyé avec succès');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold text-center mb-4">nous ecrire</h3>
      <form className="max-w-lg mx-auto space-y-4" onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom" className="w-full p-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
