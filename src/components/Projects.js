import React, { forwardRef } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PropTypes from "prop-types";
import MediaCard from "./MediaCard";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];

// Define the Projects component with forwardRef
const Projects = forwardRef((props, ref) => {
    const { projects } = props; // Simplified destructuring
    return (
        <Grid ref={ref} id="project"
            direction="row"
            justifyContent="center"
            alignItems="center"
            container mt={2} mx={5} spacing={2}>

            <Typography variant="h1" component="h2">
                pet project
            </Typography>
            <Grid container margin="dense" spacing={2}>
                {projects.map((project, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <MediaCard
                            url={project.url}
                            name={project.name}
                            srcImg={project.srcImg}
                            key={project.id || index}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
});

// Define propTypes and defaultProps directly on Projects
Projects.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            srcImg: PropTypes.string.isRequired,
        })
    ),
};

Projects.defaultProps = {
    projects: [],
};

export default Projects;