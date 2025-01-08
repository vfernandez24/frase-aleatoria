import { useState } from 'react'
import coloresJson from './data/colors.json'
import frasesJson from './data/frases.json'

function App () {
  // Obtener arrays de colores y frases desde los JSON
  const colores = coloresJson.colores
  const frases = frasesJson.frases

  const obtenerValorAleatorio = <T extends unknown>(array: T[]): T => {
    if (array.length === 0) {
      throw new Error(
        'El array está vacío. No se puede obtener un valor aleatorio.'
      )
    }
    const indiceAleatorio = Math.floor(Math.random() * array.length)
    return array[indiceAleatorio]
  }

  function generate () {
    setFrase(obtenerValorAleatorio(frases))
    setBg(obtenerValorAleatorio(colores))
  }

  const [frase, setFrase] = useState(obtenerValorAleatorio(frases))
  const [bg, setBg] = useState(obtenerValorAleatorio(colores))

  return (
    <>
      <div
        className={
          'container max-w-none h-full w-full flex items-center justify-center font-Lora text-2xl'
        }
        style={{ backgroundColor: bg }}
      >
        {frase}
      </div>
      <button
        onClick={generate}
        className='absolute bottom-16 left-[50%] -translate-x-2/4 font-sans font-semibold flex justify-center items-center transition-all duration-[0.5s] ease-[ease] bg-white m-0 px-5 py-2.5 p-0 rounded-xl list-style: none; -webkit-backdrop-filter: blur(10px)'
      >
        <h2 style={{ color: bg}}>Generar frase</h2>
      </button>
    </>
  )
}

export default App
