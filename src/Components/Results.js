import React, {useEffect} from 'react'
import {useLocations} from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../Contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
    const { result, isLoading, getResults, searchTerm} = useResultContext()
    const location = useLocations()

    if(isLoading) return <Loading />

   switch (location.pathname) {
       case "/search":
           return (
               <div className="flex flex-wrap justify-between space-y-6 sm:px-56 ">
                    
               </div>
           )
        
        case "/images":
            return ""

        case "/news":
            return ""

        case "/videos":
            return ""
   
       default:
           return "Error"
   }
}

export default Results
