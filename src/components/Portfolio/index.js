import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [currectProject, setCurrentProject] = useState();
    const [projects] = useState([
        {
            name: 'Password Generator',
            repo: 'https://github.com/meghasamala/password-generator',
            deployed: 'https://meghasamala.github.io/password-generator/',
            img: 'pwgen.png'
        },
        {
            name: 'Code Quiz',
            repo: 'https://github.com/meghasamala/code-quiz',
            deployed: 'https://meghasamala.github.io/code-quiz/',
            img: 'codequiz.png'
        },
        {
            name: 'Run Buddy',
            repo: 'https://github.com/meghasamala/run-buddy',
            deployed: 'https://meghasamala.github.io/run-buddy/',
            img: 'runbuddy.png'
        },
        {
            name: 'Soundtracker',
            repo: 'https://github.com/itsmeadriana/Soundtracker',
            deployed: 'https://itsmeadriana.github.io/Soundtracker/',
            img: 'soundtracker.png'
        },
        {
            name: 'Taskinator',
            repo: 'https://github.com/meghasamala/taskinator',
            deployed: 'https://meghasamala.github.io/taskinator/',
            img: 'tasky.png'
        },
        {
            name: 'Zookeepr',
            repo: 'https://github.com/meghasamala/zookeepr',
            deployed: 'https://quiet-escarpment-75390.herokuapp.com/',
            img: 'zookeepr.png'
        }
    ]);

    return (
        <div className='flex-row projects-div'>
            {projects.map((project, i) => (
                <Project currentProject={project}/>
            ))}
        </div>
    )
}

export default Portfolio;