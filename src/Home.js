import { useState } from 'react'

const Home = () => {
    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(28)

    const handleClick = () => {
        setName('Luigi')
        setAge(30)
    }
    return(
        <div className="home">
            <h1>Homepage</h1>
            <p>{name} is {age} years old. </p>
            <button onClick = {handleClick}>Click me</button> 
        </div>
    )
}
export default Home;