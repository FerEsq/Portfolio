import React from 'react'
import '../styles/languages.scss'
import csharp from '../media/c-sharp.png'
import java from '../media/java.png'
import js from '../media/js.png'
import php from '../media/php.png'
import python from '../media/python.png'
import sass from '../media/sass.png'

function Languages() {
  return (
    <div className='pLanguages'>
         <div className='text-title'> 
            <h1> Lenguajes </h1>
            <p> 
                Estos son los lenguajes de programación en los que tengo experiencia.
            </p>
        </div>

        <div className='languages'> 
          <div className='language'> 
            <a href='https://dotnet.microsoft.com/en-us/languages/csharp'> 
                <img src={csharp} alt='c#'/> 
            </a>
          </div>

          <div className='language'> 
            <a href='https://www.java.com/es/'> 
                <img src={java} alt='java'/> 
            </a>
          </div>

          <div className='language'> 
            <a href='https://www.javascript.com'> 
                <img src={js} alt='js'/> 
            </a>
          </div>

          <div className='language'> 
            <a href='https://www.php.net'> 
                <img src={php} alt='php'/> 
            </a>
          </div>

          <div className='language'> 
            <a href='https://www.python.org'> 
                <img src={python} alt='python'/> 
            </a>
          </div>

          <div className='language'> 
            <a href='https://sass-lang.com'> 
                <img src={sass} alt='sass'/> 
            </a>
          </div>
          
        </div>

    </div>
  )
}

export default Languages