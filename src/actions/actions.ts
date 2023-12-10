import { CaselleRefs } from '@/type'
import {LegacyRef} from 'react'
import {caselle} from '@/data/data'

export function selezionaPedina(selezionato: string, setPiedina: React.Dispatch<React.SetStateAction<string>>, pedina:string, setCasella: React.Dispatch<React.SetStateAction<string>>, refGrande: React.MutableRefObject<CaselleRefs>){
    let casellaAttuale = "";
    if(selezionato == pedina){
        setPiedina("")
        setCasella("")
    }else{
        setPiedina(selezionato)
        
        

        caselle.some((e)=>(
            e.some((key) =>{ 
                if(`pedina_${refGrande.current[key]?.innerText}` == selezionato) {
                    casellaAttuale=key
                    return true
                }
                
            })
        ))

        setCasella(casellaAttuale)

    }
    console.log({pedina,casellaAttuale})

}

export function spostaPedina(pedina: string, ref_casella: HTMLDivElement | null, casellaPedina:string, refGrande: React.MutableRefObject<CaselleRefs>, casellaMov: string, setPiedina: React.Dispatch<React.SetStateAction<string>>, setCasella: React.Dispatch<React.SetStateAction<string>>){

    if(ref_casella && refGrande.current){

        if(ref_casella.innerText == ""){
            if(casellaPedina != "" && pedina != ""){
                
                const posizionePedina = document.getElementById(pedina) /// prende il div in cui c'è la pedina
                
                if(posizionePedina) // annulla il null

                refGrande.current[casellaMov]?.appendChild(posizionePedina) // aggiunge al nuovo div l'elemento mentre togli allatro div il suo vecchio eleemento


                console.log({pedina,casellaMov, casellaPedina})
                //azzeramento dei valori
                setPiedina("")
                setCasella("")

            }
        }else{
            console.log({pedina,casellaMov, casellaPedina})
        }

    }

}