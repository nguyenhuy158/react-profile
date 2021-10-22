import logo from './logo.svg';
import './app.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="app">
      <h1>
        Welcome to
      </h1>

      <img src={"./imgs/icon/facebook.png"} />

      <Header />
      <main>
        <Hero />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
