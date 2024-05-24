/**
    * @description      : 
    * @author           : Christien Moses
    * @group            : 
    * @created          : 24/05/2024 - 12:54:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 24/05/2024
    * - Author          : Christien Moses
    * - Modification    : 
**/
import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Articles from './components/Articles';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArticleForm from './components/ArticleForm';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <hr className="my-4" />
      <ArticleForm />
      <hr className="my-4" />
      <Articles />
      <hr className="my-4" />
      <Skills />
      <hr className="my-4" />
      <Contact />
      <hr className="my-4" />
      <Footer />
    </div>
  );
}

export default App;
