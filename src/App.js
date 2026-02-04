import React from "react"
import Projects from "./components/Projects"
import Image from "./components/Image"
import logo from "./img/Noviva.jpg"

 class App extends React.Component {
     string = "My Portfolio"
     paragraf = "I’m Noviva and I am a young programmer who strives to learn new frameworks and improve my skills. The purpose of this website is to show you my skills in my pet projects."
     string1 = "About Me"
     string2 = "My skils"
     paragraf1 = "HTML, CSS, JS, React."
    render() {
        return (
            <div className="name">
                <div className="container">
                    <h1>{this.string}</h1>
                    <Image image={logo}/>
                </div>
                <div className="container1">
                    <h2>{this.string1}</h2>
                    <p>{this.paragraf}</p>
                </div>
                <div className="container2">
                    <h3>{this.string2}</h3>
                    <p>{this.paragraf1}</p>
                </div>
                <Projects />
            </div>
        )
    }
 }
 export default App