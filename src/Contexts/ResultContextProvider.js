import React, {createContext, useContext, useState} from 'react';

const ResultContext = createContext()

const BaseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const [result, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
}