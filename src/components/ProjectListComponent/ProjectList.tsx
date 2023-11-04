import { useEffect, useState } from 'react'
import './ProjectList.css'
import { ProjectListData, ProjectListInterface } from '../../data'
import Project from './Project'

export default function ProjectList(){
    const [projectList, setProjectList] = useState<ProjectListInterface[]>([])

    useEffect(()=>{
        setProjectList([...ProjectListData])
    },[])

    const toRender = projectList.map((element) => {
        return <Project key={element.imageUrl} imageUrl={element.imageUrl} />
    })
    return (
        <div className='project-list-container'>
            {toRender}
        </div>
    )
}