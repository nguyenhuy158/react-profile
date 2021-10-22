import logo from "./logo.svg";
import "./app.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";

const cards = [
  {
    name: "quiz",
    srcImg: "./imgs/quiz.png",
    url: "https://hyquaq.github.io/WebQuestion/",
  },
  {
    name: "count down",
    srcImg: "./imgs/countdown.png",
    url: "https://hyquaq.github.io/25m/",
  },
  {
    name: "count day",
    srcImg: "./imgs/countday.png",
    url: "https://hyquaq.github.io/count-day/",
  },
  {
    name: "Wallpaper Collection",
    srcImg: "./imgs/desdev1.png",
    url: "https://hyquaq.github.io/desdev-ex1/",
  },
  {
    name: "Wallpaper Collection",
    srcImg: "./imgs/desdev1.png",
    url: "https://hyquaq.github.io/desdev-ex2/",
  },
  {
    name: "Wallpaper Collection",
    srcImg: "./imgs/desdev1.png",
    url: "https://hyquaq.github.io/desdev-ex3/",
  },
  {
    name: "Wallpaper Collection",
    srcImg: "./imgs/desdev1.png",
    url: "https://hyquaq.github.io/desdev-ex4/",
  },
  {
    name: "Wallpaper Collection",
    srcImg: "./imgs/desdev1.png",
    url: "https://hyquaq.github.io/desdev-ex5/",
  },
  {
    name: "Wallpaper Collection",
    srcImg: "./imgs/desdev1.png",
    url: "https://hyquaq.github.io/desdev-ex7/",
  },
  {
    name: "Wallpaper Collection",
    srcImg: "./imgs/desdev1.png",
    url: "https://hyquaq.github.io/desdev-ex9/",
  },
];

function App() {
  console.log(cards);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects projects={cards} />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
