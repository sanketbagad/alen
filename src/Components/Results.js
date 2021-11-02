import React, {useEffect} from 'react'
import {useLocations} from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../Contexts/ResultContextProvider'

const Results = () => {
    const { result, isLoading, getResults, searchTerm} = useResultContext()
    

    return (
        <div>
            
        </div>
    )
}

export default Results
