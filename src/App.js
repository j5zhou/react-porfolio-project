import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import { useState } from 'react';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/Contact';


function App() {
  const [currentPage, setCurrentPage] = useState("home");
  let displayContent = <Home />;

  switch (currentPage) {
    case "Home":
      displayContent = <Home />
      break;
    case "Portfolio":
      displayContent = <Portfolio />
      break;
    case "Contact":
      displayContent = <Contact />
      break;
  }

  const setPage = (page) => {
    setCurrentPage(page);
  }

  return (
    <>
      <Header setPage={setPage} />
      {displayContent}
      <Footer />
    </>
  );
}

export default App;
