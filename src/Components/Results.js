import React, {useEffect} from 'react'
import {useLocations} from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../Contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
    const { result, isLoading, getResults, searchTerm} = useResultContext()
    const location = useLocations()

    useEffect(() => {
        if(searchTerm) {
            if(location.pathname === "videos") {
                getResults(`/search/q=${searchTerm} videos`)
            } else {
                getResults(`${location.pathname}/${searchTerm}&num=60`)
            }
        }
        
    },[searchTerm, location.pathname])

    if(isLoading) return <Loading />

   switch (location.pathname) {
       case "/search":
           return (
               <div className="flex flex-wrap justify-between space-y-6 sm:px-56 ">
                   {result?.map(({ link, title}, index) => (
                       <div key={index} className="md:w-2/5 w-full" >
                           <a href={link} target="_blank" rel="norefferer noreferrer">
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
                    {result?.map(({ image, link: { href, title}}, index) => (
                        <a className="sm:p-3 p-5" href={href} key={index} target="_blank" rel="norefferer noreferrer">
                            <img className="" src={image?.src} alt={title} loading="lazy" />
                            <p className="text-sm w-36 break-words mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            )

        case "/news":
            return (
                <div className="flex flex-wrap items-center justify-between space-y-6 sm:px-56 ">
                    {result?.map(({ links, title, source, id}) => (
                        <div key={id} className="md:w-2/5 w-full" >
                            <a href={links?.[0].href} target="_blank" rel="norefferer noreferrer" className="hover:underline">
                                 <p className="text-lg dark:text-blue-300 text-blue-700">
                                     {title}
                                 </p>
                            <div className="flex gap-4">
                                <a href={source?.href} target="_blank" rel="norefferer noreferrer" className="hover:underline">
                                    {source?.href}
                                </a>
                            </div>
                            </a>
                        </div>
                    ))} 
                </div>
            )

        case "/videos":
            return (
                <div className="flex flex-wrap">
                    {result.map((video, index) => (
                        <div key={index} >
                            
                         </div>
                    ))}
                </div>
            )
   
       default:
           return "Error"
   }
}

export default Results
