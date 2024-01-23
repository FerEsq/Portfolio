import React from 'react'
import '../styles/about.scss'
import grad from '../media/school.png'
import atom from '../media/front.png'
import mug from '../media/back.png'

function About() {
  return (
    <div className='about'>
        <div className='text'> 
          <h1> Hola! Soy Fernanda Esquivel. </h1>
          <p> 
          Soy una desarrolladora enfocada en la programación frontend y backend y en el desarrollo y dirrección de proyectos.
          Cuento con una amplia experiencia en la creación de aplicaciones, páginas web de alto rendimiento e
          interfaces de usuario atractivas además de dirrección de proyectos y equipos de trabajo.
          </p>
        </div>

        <div className='features'> 
          <div className='feature'> 
            <div className='separator'> </div>
            <div className='circle'> <img src={grad} alt='grad' /> </div>
            <h1> Estudiante </h1>
            <p> 
                Soy estudiante de 7mo semestre de Ingeniería en Ciencias de la Computación
                en la Universidad del Valle de Guatemala. 
            </p>
            <br/> <br/> <br/>
          </div>

          <div className='feature'> 
            <div className='separator'> </div>
            <div className='circle'> <img src={mug} alt='back'/> </div>
            <h1> Programación frontend y backend </h1>
            <p> 
                Creo interfaces agradables para los usuarios
                con elementos que las hacen estéticas y 
                creo la lógica detras del funcionamiento de una 
                aplicación o página web.
            </p>
            <br/>
          </div>

          <div className='feature'> 
            <div className='separator'> </div>
            <div className='circle'> <img src={atom} alt='front'/> </div>
            <h1> Desarrollo y dirección de proyectos </h1>
            <p> 
                  He liderado equipos en el desarrollo de software, 
                  aportando a la planificación y ejecución de proyectos con
                  un enfoque centrado en la resolución de desafíos en el campo informático.
            </p>
          </div>
        </div>
    </div>
  )
}

export default About