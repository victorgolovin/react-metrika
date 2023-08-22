import React from 'react'
import ProjectCart from '../ProjectCart/ProjectCart'
import Button from '../Button/Button'
import Heading from '../Heading/Heading'
import project1Img from '../../assets/project1img.jpg'
import project2Img from '../../assets/project2img.jpg'
import project3Img from '../../assets/project3img.jpg'

const ProjectsSection = () => {
    return (
      <div>
        <Heading 
         level='h2'
         text='ПРОЕКТЫ'/>
        <ProjectCart

        title='ЖК ПРАВОБЕРЕЖНЫЙ'
        square={112}
        year='2023'
        link='project1'
        image={project1Img}
        isNew={true}/>
        <ProjectCart

        title='ЖК НОРВЕЖСКИЙ ПАРК'
        square={112}
        year='2023'
        link='project1'
        image={project2Img}
        isNew={true} />
        <ProjectCart

        title='ЖК ПРАВОБЕРЕЖНЫЙ'
        square={112}
        year='2023'
        link='project1'
        image={project3Img}
        isNew={true} />
        <Button 
        text='Смотреть все проекты'/>
      </div>
    )
  } 

export default ProjectsSection