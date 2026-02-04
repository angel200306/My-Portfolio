import React from "react"

const ProjectCard = ({ title, description, link, image }) => {
    return (
        <div className="project-card">
            <img
                src={image}
                alt={`${title} screenshot`}
                className="project-image"
            />
            <h3>{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">
                View
            </a>
        </div>
    );
};

export default ProjectCard;