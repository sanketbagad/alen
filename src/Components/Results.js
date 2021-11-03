import React, {useEffect} from 'react'
import {useLocations} from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../Contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
    const { result, isLoading, getResults, searchTerm} = useResultContext()
    const location = useLocations()

    useEffect(() => {
        getResults("/search/q=Sanket Bagad&num=48")
    },[])

    if(isLoading) return <Loading />

   switch (location.pathname) {
       case "/search":
           return (
               <div className="flex flex-wrap justify-between space-y-6 sm:px-56 ">
                   {result?.results?.map(({ link, title}, index) => (
                       <div key={index} className="md:w-2/5 w-full" >
                           <a href={link} target="_blank" ref={="noreferrer"}>
                                <p className="text-sm">
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                           </a>
                       </div>
                   ))} 
               </div>
           )
        
        case "/images":
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {result?.image_results?.map(({ image, link: { href, title}}, index) => (

                    ))}
                </div>
            )

        case "/news":
            return ""

        case "/videos":
            return ""
   
       default:
           return "Error"
   }
}

export default Results
