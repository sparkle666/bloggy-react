const Navbar = () => { // A stateless functional component
    return ( 
        <nav className="navbar">
            <h1>The sparkles blog</h1>
            <div className="link-list">
                <a href="/">Home</a>
                <a href="/create">Create blog</a>
            </div>
        </nav>
    )
}
export default Navbar;