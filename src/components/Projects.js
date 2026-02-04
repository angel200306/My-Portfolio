import React from "react"
import ProjectCard from "./ProjectCard";
import Gallery from "../img/gallery.jpg"
import BrainyCards from "../img/Brainy Cards.jpg"
import AboutGallery from "../img/About Gallery App.jpg"
import StudyEnglishBot from "../img/Study English.jpg"

const projects = [
    {
        title: "Gallery",
        link: "https://angel200306.github.io/Gallery/",
        image: Gallery
    },
    {
        title: "Brainy Cards",
        link: "https://angel200306.github.io/Brainy-Cards/",
        image: BrainyCards
    },
    {
        title: "About Gallery",
        link: "https://angel200306.github.io/About-Gallery-App/",
        image: AboutGallery
    },
    {
        title: "Study English Bot",
        link: "https://angel200306.github.io/AboutMyEnglishBot/",
        image: StudyEnglishBot
    }
]

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>
        </section>
    );
};

export default Projects