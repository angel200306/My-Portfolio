import React from "react"
import ProjectCard from "./ProjectCard";
import Gallery from "../img/gallery.jpg"
import TaskBliss from "../img/Task-Bliss.png"
import StudyEnglishBot from "../img/Study English.jpg"

const projects = [
    {
        title: "Gallery",
        link: "https://angel200306.github.io/Gallery/",
        image: Gallery
    },
    {
        title: "Task-Bliss",
        link: "https://angel200306.github.io/Task-Bliss/",
        image: TaskBliss
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
            <h2>My pet projects</h2>
            <div className="projects-container">
                {projects.map((proj, index) => (
                    <ProjectCard key={index} {...proj} />
                ))}
            </div>
        </section>
    );
};

export default Projects