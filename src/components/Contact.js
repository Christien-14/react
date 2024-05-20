/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 20/05/2024 - 10:59:28
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/05/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React from 'react';

const Contact = () => {
  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold text-center mb-4">M'écrire</h3>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Nom" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded" rows="4"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
