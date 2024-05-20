import React from 'react';
import { FaRegSmile } from 'react-icons/fa';

const Welcome = () => {
  return (
    <section className="text-center p-8">
      <FaRegSmile className="text-6xl mx-auto mb-4" />
      <h2 className="text-4xl font-bold">HEY, BIENVENUE SUR MA PAGE.</h2>
    </section>
  );
};

export default Welcome;
