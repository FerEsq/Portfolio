import React from 'react'
import '../styles/home.scss'
import me from '../media/headset.png'
import note from '../media/note.png'

function Home() {
  return (
    <div className='home'>
        <div className='title'> 
            <h1> Estudiante, Desarrolladora de Frontend y Backend </h1>
            <h2> Estudio código porque quiero hacer algo genial </h2>
        </div>
        <div className='animation'>
            <div className='notes'> 
                <img className='animated-note' src={note} alt='note' />
                <img className='animated-note' src={note} alt='note' />
            </div>
            <img className='animated-me' src={me} alt='me' />
        </div>
    </div>
  )
}

export default Home