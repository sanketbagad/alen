import React, {useEffect} from 'react'
import {useLocations} from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../Contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
    const { result, isLoading, getResults, searchTerm} = useResultContext()
    const location = useLocations()

    if(isLoading) return <Loading />

    return (
        <div>
            
        </div>
    )
}

export default Results
