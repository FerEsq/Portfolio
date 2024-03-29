import React from 'react'
import '../styles/contact.scss'

export default function Contact() {
  return (
    <div className='dcontact'>
      <div className='texto'> 
            <h1> Contacto </h1>
        </div>

        <div className='contacts'> 
          <a href="mailto:feresq.gt@gmail.com">
            <button> 
              <svg fill="#FFFFFF" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8.32h-15.12c-1.56 0-2.84 1.28-2.84 2.84v9.64c0 1.56 1.28 2.84 2.84 2.84h15.12c1.56 0 2.84-1.28 2.84-2.84v-9.64c0-1.56-1.24-2.84-2.84-2.84zM2.88 10h15.12c0.64 0 1.16 0.52 1.16 1.16v0.4l-8.040 5.6c-0.36 0.24-1.040 0.24-1.4 0l-8.040-5.6v-0.4c0.040-0.64 0.56-1.16 1.2-1.16zM18 22h-15.12c-0.64 0-1.16-0.52-1.16-1.16v-7.24l7.080 4.92c0.48 0.32 1.080 0.48 1.68 0.48s1.2-0.16 1.68-0.48l7.040-4.92v7.2c0 0.68-0.56 1.2-1.2 1.2z"></path>
              </svg>
            </button>
          </a>

          <a href='https://github.com/FerEsq'>
            <button> 
              <svg fill="#FFFFFF" viewBox="-6 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.36 9.28c0.48-1.72-0.24-3.6-0.28-3.72-0.12-0.28-0.4-0.52-0.72-0.52-0.080 0-1.92-0.16-3.76 1.24-1.44-0.28-3.080-0.36-3.16-0.36-0.040 0-0.040 0-0.080 0-0.080 0-1.72 0.080-3.16 0.36-1.84-1.4-3.68-1.24-3.76-1.24-0.32 0.040-0.6 0.24-0.72 0.52-0.040 0.080-0.8 2-0.28 3.72-0.92 1.28-1.64 2.96-1 5.96 0.6 2.72 2.84 4.24 5.16 4.76-0.2 0.56-0.28 1.24-0.36 1.96-0.96 0.040-1.56-0.52-2.4-1.4-0.72-0.76-1.52-1.64-2.84-1.92-0.44-0.12-0.88 0.16-1 0.64-0.080 0.48 0.2 0.92 0.68 1 0.76 0.16 1.28 0.72 1.92 1.4 0.84 0.88 1.8 1.96 3.52 1.96 0 0 0.040 0 0.040 0 0 0.92 0.080 1.8 0.12 2.52 0.040 0.48 0.44 0.8 0.92 0.76s0.8-0.44 0.76-0.92c-0.24-2.72-0.040-5.6 0.4-6 0.32-0.2 0.52-0.56 0.4-0.96-0.080-0.36-0.4-0.64-0.8-0.64-0.36 0-4.12-0.2-4.84-3.52-0.6-2.72 0.16-3.92 0.96-4.88 0.2-0.24 0.24-0.6 0.12-0.92-0.32-0.68-0.2-1.64-0.040-2.28 0.56 0.080 1.4 0.32 2.28 1.080 0.2 0.2 0.48 0.24 0.76 0.2 1.24-0.32 2.92-0.4 3.2-0.4 0.24 0 1.96 0.080 3.2 0.4 0.28 0.080 0.56 0 0.76-0.2 0.88-0.76 1.76-1 2.28-1.080 0.16 0.6 0.28 1.56-0.040 2.28-0.12 0.28-0.080 0.64 0.12 0.92 0.8 0.96 1.52 2.16 0.96 4.88-0.72 3.32-4.48 3.52-4.92 3.56-0.4 0-0.72 0.28-0.8 0.64s0.080 0.76 0.4 0.96c0.48 0.4 0.68 3.24 0.44 6-0.040 0.48 0.32 0.88 0.76 0.92 0.040 0 0.040 0 0.080 0 0.44 0 0.8-0.32 0.84-0.76 0.16-1.76 0.28-4.48-0.28-6.2 2.32-0.48 4.56-2.040 5.16-4.76 0.64-3-0.040-4.68-1-5.96z"></path>
              </svg>
            </button>
          </a>

          <a href='https://www.linkedin.com/in/feresq/'>
            <button> 
              <svg fill="#FFFFFF" viewBox="-7.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
                <path d="M0.92 11.32c-0.48 0-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-11.76c0-0.48-0.36-0.84-0.84-0.84zM1.84 8.16c0 0.508-0.412 0.92-0.92 0.92s-0.92-0.412-0.92-0.92c0-0.508 0.412-0.92 0.92-0.92s0.92 0.412 0.92 0.92zM15.28 11.68c-1.8-0.96-4.44-0.28-8.040 2v-1.52c0-0.48-0.36-0.84-0.84-0.84s-0.84 0.36-0.84 0.84v11.76c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.24c4.52-3.12 6.48-2.92 7.24-2.52 1.040 0.56 1.040 2.080 1.040 2.080v8.68c0 0.48 0.36 0.84 0.84 0.84s0.84-0.36 0.84-0.84v-8.64c0-0.12 0-2.56-1.92-3.6z"></path>
              </svg>
            </button>
            
          </a>

        </div>
    </div>
  )
}
