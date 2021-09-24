const handleClick = () => {
    console.log('Hello ninjas')
}

const Home = () => {
    return(
        <div className="home">
            <h1>Homepage</h1>
            <button onClick = {handleClick}>Click me</button> 
        </div>
    )
}
export default Home;