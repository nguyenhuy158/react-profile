import React from "react";

function Contacts() {
  return (
    <section id="contact" className="link-to-nav">
      <div className="description">
        <h2>Let's work together...</h2>
        <p className="quote">
          {'cout << "Give the world a reason to remember your name."'}{" "}
        </p>
      </div>

      {/* <!-- social --> */}
      <ul className="contact-list">
        <li className="contact-item">
          <a href="https://www.facebook.com/quaqhy/">
            {/* <!-- <span>facebook</span> --> */}
            <img src="./imgs/icon/facebook.png" alt="error" />
          </a>
        </li>
        <li className="contact-item">
          <a href="https://www.youtube.com/channel/UCjjhWyzMfhhkXxc7qcHEdCA">
            {/* <!-- <span>youtube</span> --> */}
            <img src="./imgs/icon/youtube.png" alt="error" />
          </a>
        </li>
        <li className="contact-item">
          <a href="https://github.com/hyquaq">
            {/* <!-- <span>github</span> --> */}
            <img src="./imgs/icon/github.png" alt="error" />
          </a>
        </li>
        {/* <!-- <li className="contact-item">
          <a href="https://www.linkedin.com/in/hyquaq/">
            <span>linkedin</span>
            <img src="./imgs/icon/linkedin.png" alt="error" / >
          </a>
        </li> --> */}

        {/* <!-- <li className="contact-item">
          <a href="mailto:hyquaq@gmail.com" type="e">
            <span>send a email</span>
            <i className="bx bx-at"></i>
          </a>
        </li> --> */}
      </ul>
    </section>
  );
}

export default Contacts;
