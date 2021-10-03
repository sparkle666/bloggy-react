import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null) // resct use state hooks
    const [isPending, setisPending] = useState(true)

    useEffect(() => {
        setTimeout(() => { // add a a delay of 2 seconds before fetching data
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then(data => {
            setBlogs(data) 
            setisPending(false)
            })
        }, 2000)
    }, [])
     // this useEffect runs on load if there are dependencies attached to it.
        // Evalutes if blog and blog components are both true. If one is false, nothing renders.
    return(
        <div className="home"> 
            { isPending && <div> Loading... </div> } 
           { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    ) 
}
export default Home;