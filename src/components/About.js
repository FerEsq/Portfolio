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
          Soy una desarrolladora enfocada tanto en el ámbito del backend como del frontend, 
          con una amplia experiencia en la creación de aplicaciones y páginas web de alto rendimiento e
          interfaces de usuario atractivas.
          </p>
        </div>

        <div className='features'> 
          <div className='feature'> 
            <div className='circle'> <img src={grad} alt='grad' /> </div>
            <h1> Estudiante </h1>
            <p> 
                Soy de Ingeniería en Ciencias de la Computación
                en la Universidad del Valle de Guatemala.
            </p>
          </div>
          <div className='feature'> 
            <div className='circle'> <img src={atom} alt='front'/> </div>
            <h1> Frontend </h1>
            <p> 
                Creo interfaces agradables para los usuarios
                con elementos que las hacen estéticas.
            </p>
            <br/>
          </div>
          <div className='feature'> 
            <div className='circle'> <img src={mug} alt='back'/> </div>
            <h1> Backend </h1>
            <p> 
                Creo la lógica detras del funcionamiento de una 
                aplicación o página web.
            </p>
            <br/> <br/>
          </div>
        </div>
    </div>
  )
}

export default About