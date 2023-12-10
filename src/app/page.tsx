"use client"
import React, {useState, useRef} from 'react'
import { caselle } from '@/data/data'
import { selezionaPedina, spostaPedina } from '@/actions/actions'
import { CaselleRefs } from '@/type'

export default function Home() {

  
  const [pedina,setPedina] = useState("") // per prendere la pedina
  const [casella_us,setCasella] = useState("") // per prendere la casella
  const ref_Caselle = useRef<CaselleRefs>({}) //serve principalmente per le funzioni di aggiunta e togliutura del pedone da un punto all'ator
  const ref_Pedine = useRef<CaselleRefs>({})
  

  return (
    <>
    
      <div className="scacchiera">
        {caselle.map((riga, indiceRiga)=>{
          return riga.map((casella,indiceCasella) =>{
            

            /**
             * Logica che serve per avere il colore di una casella diversa dall'altra
             */
            if(indiceRiga%2==0){
              indiceCasella++ 
            }

            return(
              <div 
              key={`${indiceRiga}-${indiceCasella}`}
              ref={(element) => ref_Caselle.current[casella] = element}
              onClick={()=> spostaPedina(pedina, ref_Caselle.current[casella], casella_us, ref_Caselle, casella, setPedina, setCasella)}  className={`${(indiceCasella)%2==0? 'bg-red-700': 'bg-black'} border border-white`} id={casella}>
                  {indiceRiga<=1 || indiceRiga >=6 ? 
                    (
                      <div onClick={()=> selezionaPedina(`pedina_${casella}`, setPedina, pedina, setCasella, ref_Caselle)} id={`pedina_${casella}`}  className={`text-white w-full h-full ${pedina == `pedina_${casella}`? "bg-green-700": ""}`}>
                        {casella}
                      </div>
                    )
                    : ("")
                    }
              </div>
            )
          })
        })}
      </div>

    </>
  )
}
