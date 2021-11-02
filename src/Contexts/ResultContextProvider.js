import React, {createContext, useContext, useState} from 'react';

const ResultContext = createContext()

const BaseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const [result, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")

    const getResults = async (type) => {
        setIsLoading(true)

        const response = await fetch(`${BaseUrl}${type}`, {
            method: "GET",
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': 'fc2d932218msh64f21ad4212ecd3p1af359jsn1c8c5abd9df9'
              }
        })

        const data = await response.json()

        setResults(data)
        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{ getResults, result, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext)