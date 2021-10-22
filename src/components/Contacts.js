import React from "react";
import PropTypes from "prop-types";
import AnchorIcon from "./AnchorIcon";

Contacts.propTypes = {
  listSocials: PropTypes.array,
};

Contacts.defaultProps = {
  listSocials: [],
};

function Contacts(props) {
  const { listSocials } = { ...props };
  return (
    <section id="contact" className="link-to-nav">
      {console.log('cout << "Give the world a reason to remember your name."')}

      {/* <!-- social --> */}
      <ul className="contact-list">
        {listSocials.map((e, index) => (
          <li className="contact-item" key={index}>
            {/* <AnchorIcon e /> */}
            <AnchorIcon
              url={e.url}
              urlImg={e.urlImg}
              urlImgHover={e.urlImgHover}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contacts;
