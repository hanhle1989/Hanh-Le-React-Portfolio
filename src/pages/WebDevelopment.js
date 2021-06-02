import React from "react";
import Projects from "../components/Projects";
import projects from "../utils/projects"

function WebDevelopment(){
    return (
        <div>
            <Projects projects={projects}/>
        </div >
    )
}

export default WebDevelopment
