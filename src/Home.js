const handleClick = (e) => {
    console.log('Hello ninjas', e.clientX)
}

const handleClickAgain = (name) => {
    console.log("Hello, ", name)
}

const Home = () => {
    return(
        <div className="home">
            <h1>Homepage</h1>
            <button onClick = {handleClick}>Click me</button> 
            <button onClick={() => handleClickAgain('Sparkles')}>Click me again</button>
        </div>
    )
}
export default Home;