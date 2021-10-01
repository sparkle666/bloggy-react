import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My first title", body: "Lorem ipsum somento willyon", author: "Sparkles", id: 1},
        {title: "Welcome to my blog", body: "Lorem ipsum somento willyon", author: "James", id: 2},
        {title: "Some really cool blog", body: "Lorem ipsum somento...", author: "Elija", id: 3},
    ])

    const handleDelete = (id) => {
        const newblogs = blogs.filter(blog => (blog.id !== id))
        setBlogs(newblogs) // Set the new state as the array of filtered blogs.
    }

    const [name, setName] = useState('Mario') //declare a use state hook
    const [num, setNum] = useState(4)

    useEffect(() => {
        console.log("Random shit...")
    }, [name, num]) // this useEffect runs if there are dependencies attached to it.

    return(
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" handleDelete = {handleDelete} />
           <button onClick={() => setName('Luigi')}>Change useEffect Hook</button>
           <p>{ name } is {num + 2} years old.</p>
           <button onClick={() => setNum(6)}>Change num.</button>
        </div>
    )
}
export default Home;