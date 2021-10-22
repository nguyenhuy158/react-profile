import React from "react";

function Projects() {
  const cards = [
    {
      name: "quiz",
      src: "./imgs/quiz.png",
    },
  ];

  return (
    <section className="projects link-to-nav" id="project">
      <h2 className="title">There are some of my projects</h2>
      <div className="grid">
        <a href="https://hyquaq.github.io/WebQuestion/" className="project">
          <img src={"./imgs/quiz.png"} alt="quiz app" />
          <p className="name">
            {/* <!-- <span><</span> --> */}
            quiz
            {/* <!-- <span>/></span> --> */}
          </p>
        </a>

        <a href="https://hyquaq.github.io/25m/" className="project">
          <img src={"./imgs/countdown.png"} alt="error" />
          <p className="name">count down</p>
        </a>

        <a href="https://hyquaq.github.io/count-day/" className="project">
          <img src="./imgs/countday.png" alt="error" />
          <p className="name">count day</p>
        </a>

        <a href="https://hyquaq.github.io/desdev-ex1/" className="project">
          <img src="./imgs/desdev1.png" alt="error" />
          <p className="name">Wallpaper Collection</p>
        </a>

        <a href="https://hyquaq.github.io/desdev-ex2/" className="project">
          <img src="./imgs/desdev2.png" alt="error" />
          <p className="name">Card</p>
        </a>

        <a href="https://hyquaq.github.io/desdev-ex3/" className="project">
          <img src="./imgs/desdev3.png" alt="error" />
          <p className="name">Pop up</p>
        </a>

        <a href="https://hyquaq.github.io/desdev-ex4/" className="project">
          <img src="./imgs/desdev4.png" alt="error" />
          <p className="name">Card</p>
        </a>

        <a href="https://hyquaq.github.io/desdev-ex5/" className="project">
          <img src="./imgs/desdev5.png" alt="error" />
          <p className="name">clone IMDb</p>
        </a>

        <a href="https://hyquaq.github.io/desdev-ex7/" className="project">
          <img src="./imgs/desdev7.png" alt="error" />
          <p className="name">portfolio</p>
        </a>

        <a href="https://hyquaq.github.io/desdev-ex9/" className="project">
          <img src="./imgs/desdev9.png" alt="error" />
          <p className="name">Login Logout</p>
        </a>
      </div>

      <a href="#" className="show-all">
        <span>Show All</span>
        <i className="bx bx-chevron-right"></i>
      </a>
    </section>
  );
}

export default Projects;
