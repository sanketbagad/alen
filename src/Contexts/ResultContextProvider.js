import React, {createContext, useContext, useState} from 'react';

const ResultContext = createContext()

const BaseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const getResults = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${BaseUrl}${type}`, {
            method: "GET",
            headers: {
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'fc2d932218msh64f21ad4212ecd3p1af359jsn1c8c5abd9df9'
              }
        })

        const data = await response.json()
        console.log(data)

        if(type.includes('/news')) {
            setResults( data.entries)
        } else if(type.includes("/images")) {
             setResults(data.image_results)
        } else {
            setResults(data.results)
        }
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)