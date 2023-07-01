import React from "react";
import { useEffect } from 'react';
import { useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works =()=>{
    const [item, setItem] = React.useState({ name: 'all' });
    const [projects, setProjects] = useState([]);

    useEffect(() =>{ 
        if(item.name === "all") {
            setProjects(projectsData);
        }

        else {
            const newProjects = projectsData.filter((project) => {
            return project.category === item.name;
            })
            setProjects(newProjects)
        }
    },[item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
    };

    return(
       <div>
            <div className='work__filters'>
                {projectsNav.map((item, index) => {
                    return (
                        <span onClick={(e)=>{
                            handleClick(e, index);
                        }} className={'work__item'} 
                            key={index}>
                            {item.name}
                        </span>
                    );
          })}
        </div>
        <div className='work__container container grid'>
            {projects.map((item) =>{
                    return <WorkItems item={item} key={item.id}/>
            })}
        </div>
        </div>
    )
}
export default Works;