import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

import { ContextProvider } from '../context/context';
import { contactsData, aboutData, projectsData } from '../context/config';

function App() {
  // useState returns a pair: the current state value and a function that lets you update it
  const [theme, setTheme] = useState('light');
  const [contacts, setContacts] = useState([]);
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);

  // reload the data after every render
  useEffect(() => {
    setContacts([...contactsData]);
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
  }, []);

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ContextProvider value={{ theme, toggleTheme, contacts, about, projects }}>
      <Header />
      <Welcome />
      <About />
      <Projects />
      <Footer />
    </ContextProvider>
  );
}

export default App;
