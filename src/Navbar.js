import { Link } from 'react-router-dom'

const Navbar = () => { // A stateless functional component
    return ( 
        <nav className="navbar">
            <h1>The sparkles blog</h1>
            <div className="link-list">
                <Link to="/">Home</Link>
                <Link to="/create">Create blog</Link>
            </div>
        </nav>
    )
}
export default Navbar;