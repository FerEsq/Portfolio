import React from 'react'
import '../styles/projects.scss'
import p1 from '../media/p1.png'
import p2 from '../media/p2.png'
import p3 from '../media/p3.png'
import p4 from '../media/p4.png'
import p5 from '../media/p5.png'
import p6 from '../media/p6.png'

export default function Projects() {

    const handleNavigation =(divID)=>{
        const div = document.getElementById(divID)
        div.scrollIntoView({ behavior: 'smooth'})
    }
    
  return (
    <div className='projects'>
        <div className='text-title'> 
            <h1> Proyectos </h1>
            <p> 
                Aquí hay algunos de los proyectos en los que he trabajado.
            </p>
        </div>

        <div className='cards'> 
          <div className='card'> 
            <img src={p1} alt='p1'/> 
            <p> Imagen de Kirby hecha en su totalidad con CSS. </p>
            <a href='http://3.214.247.139:3190/index.html'> <button> Visitar </button> </a>
          </div>

          <div className='card'> 
            <img src={p2} alt='p2'/> 
            <p> Juego de memoria con tématica de Kirby hecho con React. </p>
            <a href='https://stw-23.web.app/'> <button> Visitar </button> </a>
          </div>

          <div className='card'> 
            <img src={p3} alt='p3'/> 
            <p> Página de Bliss para la venta de zapatos por catálogo hecha con Vite. </p>
            <a href='https://bliss-three.vercel.app/'> <button> Visitar </button> </a>
          </div>

          <div className='card'> 
            <img src={p4} alt='p4'/> 
            <p> Recreación de la página web de MARINA hecha con React. </p>
            <a href='https://p1-stw.web.app/'> <button> Visitar </button> </a>
          </div>

          <div className='card'> 
            <img src={p5} alt='p5'/> 
            <p> Calculadora básica hecha con React. </p>
            <a href='https://lab9-stw.web.app'> <button> Visitar </button> </a>
          </div>

          <div className='card'> 
            <img src={p6} alt='p6'/> 
            <p> Mi portafolio hecho con React. </p>
            <a> <button onClick={()=>handleNavigation('div-home')}> Visitar </button> </a>
          </div>
          
        </div>
    </div>
  )
}
