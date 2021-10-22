import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

Projects.propTypes = {
  projects: PropTypes.array,
};

Projects.defaultProps = {
  projects: [],
};

function Projects(props) {
  const { projects } = { ...props };
  return (
    <section className="projects link-to-nav" id="project">
      <h2 className="title">There are some of my projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <Card url={project.url} name={project.name} srcImg={project.srcImg} />
        ))}
      </div>

      <a href="#" className="show-all">
        <span>Show All</span>
        <i className="bx bx-chevron-right"></i>
      </a>
    </section>
  );
}

Projects.propTypes = {};

export default Projects;
