import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div class ="not-found">
            <h2>Sorry</h2>
            <p>The page you are looking s not found...</p>
            <Link to="/">Go back to the homepage...</Link>
        </div>
    )
}
