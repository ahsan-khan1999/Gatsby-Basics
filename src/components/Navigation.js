import React from 'react'
import {Link} from 'gatsby'

export default function Navigation() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
        </div>
    )
}
