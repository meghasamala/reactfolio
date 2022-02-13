import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'about me',
      link: '/'
    },
    {
      name: 'portfolio',
      link: '/portfolio'
    },
    {
      name: 'contact me',
      link: '/contact'
    },
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0])

  return (
    <div>
      <Header />
      <Nav className='nav'
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}>
      </Nav>
      <main>
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/contact' element={<ContactForm />}/>
        </Routes>
      </main>
      <Footer />  
    </div>
  );
}

export default App;
