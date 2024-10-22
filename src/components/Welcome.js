/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 22/10/2024 - 13:00:40
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 22/10/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React from 'react';
import { FaRegSmile } from 'react-icons/fa';

const Welcome = () => {
  return (
    <section className="text-center p-8">
      <FaRegSmile className="text-6xl mx-auto mb-4" />
      <h2 className="text-4xl font-bold">BIENVENUE</h2>
    </section>
  );
};

export default Welcome;
