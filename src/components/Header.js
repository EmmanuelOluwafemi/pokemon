import React from 'react'
import { Link } from 'react-router-dom'

import pokeball from '../assets/pokeball.png'

const Header = () => {

    return (
        <div className="py-4 flex justify-between items-center mb-8">
            <Link to="/">
                <img src={pokeball} alt="pokeball" className="w-16 h-16" />
            </Link>
        </div>
    )
}

export default Header