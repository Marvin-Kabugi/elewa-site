// ProjectList.tsx
// Responsible for rendering a list of projects using data from ProjectListData.
// Each project is displayed using the Project component.

import { useEffect, useState } from 'react'
import './ProjectList.css'
import { ProjectListData, ProjectListInterface } from '../../data'
import Project from './Project'

/**
 * ProjectList component
 * Utilizes useState to manage the list of projects and useEffect to initialize the project list state with data from ProjectListData.
 * It renders a list of Project components based on the projectList state.
 * 
 * @returns {JSX.Element} A container with a rendered list of Project components.
 */
export default function ProjectList(){
    // State to hold the array of projects, typed with ProjectListInterface
    const [projectList, setProjectList] = useState<ProjectListInterface[]>([])

    // useEffect hook to populate the projectList state after the initial render
    useEffect(()=>{
        // Sets the project list state with data imported from ProjectListData
        setProjectList([...ProjectListData])
    },[]) // Empty dependency array means this effect will only run once on mount

    // Map over projectList state to generate Project components for each project
    const toRender = projectList.map((element) => {
        // Each Project component is keyed with its image URL for efficient re-rendering
        return <Project key={element.imageUrl} imageUrl={element.imageUrl} />
    })

    // Returns a div container with all the Project components rendered within it
    return (
        <div className='project-list-container'>
            {toRender}
        </div>
    )
}
