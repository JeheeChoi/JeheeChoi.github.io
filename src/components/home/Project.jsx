import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,
  gitHubQuerry,
  projectsLength,
} from "../../editable-stuff/configurations.json";

const Project = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  const handleRequest = useCallback((e) => {
    axios
      .get(gitHubLink + gitHubUsername + gitHubQuerry)
      .then((response) => {
        // handle success
        // console.log(response.data.slice(0, 4));
        return setProjectsArray(response.data.slice(0, projectsLength));
      })
      .catch((error) => {
        // handle error
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  }, []);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div id="projects" className="jumbotron jumbotron-fluid bg-transparent m-0">
      {projectsArray.length && (
        <div className="container container-fluid p-5">
          <h1 className="display-4 pb-5">Skills</h1>
          <div>
          <img src="https://i.imgur.com/JjwWU6e.png" alt="" id="github" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/9ABJSUs.png" alt="" id="xd" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/QVtkkjS.png" alt="" id="javascript" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/lWUnGI9.png" alt="" id="node-js" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/ZDGQI5U.png" alt="" id="css" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/mfCgViB.png" alt="" id="html" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/P9yRpXs.png" alt="" id="json" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/MKtE7zt.png" alt="" id="jquery" style={{padding: "5px"}}/>

          <img src="https://i.imgur.com/z5O8LWj.png" alt="" id="aws" style={{padding: "5px"}}/>
          <br/>
          <br/>
          <img src="https://i.imgur.com/W0dx0Ux.png" alt="" id="heroku" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/zDytwk5.png" alt="" id="mongo" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/V8illt6.png" alt="" id="react" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/sHD6wyA.png" alt="" id="sql" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/D4hZ4NA.png" alt="" id="postresql" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/B8HaPxo.png" alt="" id="python" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/3t3ZvnO.png" alt="" id="django" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/PgAFixr.png" alt="" id="jira" style={{padding: "5px"}}/>
          <img src="https://i.imgur.com/3xFIoob.png" alt="" id="api" style={{padding: "5px"}}/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          </div>
          <h1 className="display-4 pb-5">{projectHeading}</h1>
          <div className="row">
            {projectsArray.map((project) => (
              <ProjectCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
