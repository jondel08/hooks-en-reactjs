import { useState, useEffect } from "react";
import { createContext } from "react";
import React from 'react'

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {

   const [consulta, setConsulta] = useState('');
   const [fotosDeGaleria, setFotosDeGaleria] = useState([])
   const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

   useEffect(() => {
      const getData = async () => {
         const response = await fetch('http://localhost:3000/fotos')
         const data = await response.json()
         setFotosDeGaleria([...data])
      }

      //simula espera de 5 seg para cargar los datos (fotos)
      setTimeout(() => getData(), 2000);
   }, [])

   const alAlternarFavorito = (foto) => {

      if (foto.id === fotoSeleccionada?.id) {
         setFotoSeleccionada({
            ...fotoSeleccionada,
            favorita: !fotoSeleccionada.favorita
         })

      }

      setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
         return {
            ...fotoDeGaleria,
            favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
         }
      }))
   }

   return (
      <GlobalContext.Provider value={{
         consulta,
         setConsulta,
         fotosDeGaleria,
         setFotosDeGaleria,
         fotoSeleccionada,
         setFotoSeleccionada,
         alAlternarFavorito
      }}>
         {children}
      </GlobalContext.Provider>
   )
}

export default GlobalContextProvider;