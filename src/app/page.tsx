import styles from './page.module.css'
"use client";
import {useState} from 'react'


export default function Home() {


  const [panel,setpanel]=useState('')


  const button=(e:React.MouseEvent<HTMLButtonElement>)=>{
    if (e.target){
      let valorButton=(e.target as HTMLButtonElement).value
      const regexOpr=/[0-9]/
      const regex=/^(.*[-x+%\/]){2,}.*$/
      
      if(regexOpr.test(valorButton)){
        console.log();
        
        
      }else
        




      if(valorButton=='C') setpanel("")

      if(valorButton=='=') operacion(valorButton)


    
        
      

      
    }

    function operacion(valorButton:any){
      console.log('operacion');
      setpanel("")

    }
  }

  return (
    <main>
      <div className='calculadora-contenedor'>
        <div className='panel'>
          {panel}
        </div>

        <div className='btn-contenedor'>
          <div className='num-botones'>

            <button value="9" onClick={button} className='btn-num'>9</button>
            <button value="8" onClick={button} className='btn-num'>8</button>
            <button value="7" onClick={button} className='btn-num'>7</button>
            <button value="6" onClick={button} className='btn-num'>6</button>
            <button value="5" onClick={button} className='btn-num'>5</button>
            <button value="4" onClick={button} className='btn-num'>4</button>
            <button value="3" onClick={button} className='btn-num'>3</button>
            <button value="2" onClick={button} className='btn-num'>2</button>
            <button value="1" onClick={button} className='btn-num'>1</button>
            <button value="0" onClick={button} className='btn-num cero'>0</button>
            
          </div>
          <div className='opera-botones'>
            <button value="C" onClick={button} className='btn-opr'>C</button>
            <button value="%" onClick={button} className='btn-opr'>%</button>
            <button value="+" onClick={button} className='btn-opr'>+</button>
            <button value="-" onClick={button} className='btn-opr'>-</button>
            <button value="/" onClick={button} className='btn-opr'>/</button>
            <button value="x" onClick={button} className='btn-opr'>x</button>
            <button value="=" onClick={button} className='btn-opr'>=</button>
          </div>
        </div>


      </div>
    
    </main>
  )
}
