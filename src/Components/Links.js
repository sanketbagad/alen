import React from 'react'
import { NavLink } from 'react-router-dom'

const Links = () => {
    const links = [
        {url: "/search", text: "All"},
        {url: "/news", text: "News"},
        {url: "/images", text: "Images"},
        {url: "/videos", text: "Videos"},
    ]

    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {links.map(({url, text}) => (
                
            ))}
        </div>
    )
}

export default Links
