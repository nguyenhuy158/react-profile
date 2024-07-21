import React from "react";
import PropTypes from "prop-types";

Card.propTypes = {
  url: PropTypes.string,
  srcImg: PropTypes.string,
  name: PropTypes.string,
};

Card.defaultProps = {
  url: "",
  srcImg: "",
  name: "",
};

function Card(props) {
  const { url, name, srcImg } = { ...props };
  return (
    <a href={url} className="project">
      <img src={"." + srcImg} alt="picture from huyit08" />
      <p className="name">{name}</p>
    </a>
  );
}

export default Card;
