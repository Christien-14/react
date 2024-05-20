/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 20/05/2024 - 13:20:59
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/05/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React from 'react';
import { FaDatabase, FaBitcoin, FaLinux, FaWindows } from 'react-icons/fa'; // Utiliser FaBitcoin au lieu de FaBlockchain

const skills = [
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Blockchain', icon: <FaBitcoin /> }, // Remplacer FaBlockchain par FaBitcoin
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'Windows', icon: <FaWindows /> },
];

const Skills = () => {
  return (
    <section className="p-8">
      <h3 className="text-2xl font-bold text-center mb-4">Mes compétences</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="text-2xl">{skill.icon}</div>
            <span className="text-xl">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
