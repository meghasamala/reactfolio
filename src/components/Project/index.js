import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Project({currentProject}) {
    const {name, repo, deployed, img} = currentProject;

    return (
        <section className='project'>
            <h3 className='project-name'>{capitalizeFirstLetter(name)}</h3>
            <div className='container'>
                <img className='img' src={require(`../../assets/images/projects/${img}`).default}/>
            </div>
            <ul className='links'>
                <li className='link'>
                    <a href={repo}>Github Repository</a>
                </li>
                <li className='link'>
                    <a href={deployed}>Deployed Application</a>
                </li>
            </ul>
        </section>
    )
}

export default Project;