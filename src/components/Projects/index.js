import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Explore a collection of interactive web apps demonstrating my expertise in front-end development.
        </Desc>

        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S (React-Based)</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S (React-Based)</ToggleButton>
          }
          <Divider />
          {toggle === 'JavaScript Dynamic Applications' ?
            <ToggleButton active value="JavaScript Dynamic Applications" onClick={() => setToggle('JavaScript Dynamic Applications')}>JAVASCRIPT DYNAMIC APP'S</ToggleButton>
            :
            <ToggleButton value="JavaScript Dynamic Applications" onClick={() => setToggle('JavaScript Dynamic Applications')}>JAVASCRIPT DYNAMIC APP'S</ToggleButton>
          }
        </ToggleButtonGroup>

        {/* <p style={{
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '18px',  // Slightly bigger font
    fontWeight: '500',
    color: '#CBB3FF',  // Soft pastel purple
    paddingBottom: '8px',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)', // More noticeable but soft underline
    display: 'inline-block',
    letterSpacing: '0.5px',  // Makes text feel a little more spacious
}}>
  Click on a project to explore its  
  <span style={{
    fontWeight: '700',
    color: '#FFD700', // Elegant gold
    background: 'rgba(255, 215, 0, 0.2)', // Slight highlight effect
    padding: '3px 5px',
    borderRadius: '5px',
  }}> GitHub Repository </span> 
  and 
  <span style={{
    fontWeight: '700',
    color: '#00D4FF', // Soft cyan blue
    background: 'rgba(0, 212, 255, 0.2)',
    padding: '3px 5px',
    borderRadius: '5px',
  }}> Live Demo </span>
</p>
 */}


        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '16px',
          fontWeight: '500',
          color: '#CBB3FF', 
          paddingBottom: '8px',
          display: 'inline-block'
        }}>
          Click on a project to explore its
          <span style={{
            fontWeight: '600',
            color: '#FFD700', 
            padding: '0 4px',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
            onMouseEnter={(e) => e.target.style.color = '#FFAA00'} // Hover effect
            onMouseLeave={(e) => e.target.style.color = '#FFD700'}
          > GitHub Repository </span>
          and
          <span style={{
            fontWeight: '600',
            color: '#00D4FF',
            padding: '0 4px',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
            onMouseEnter={(e) => e.target.style.color = '#00A3CC'} // Hover effect
            onMouseLeave={(e) => e.target.style.color = '#00D4FF'}
          > Live Demo</span>.
        </div>

        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard 
               key={project.id} 
               project={project} 
               openModal={openModal} 
               setOpenModal={setOpenModal} 
              />
            ))}

          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal} 
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects