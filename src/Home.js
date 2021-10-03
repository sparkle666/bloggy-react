import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
           setBlogs(data) 
        })
    })
     // this useEffect runs on load if there are dependencies attached to it.
        // Evalutes if blog and blog components are both true. If one is false, nothing renders.
    return(
        <div className="home"> 
           {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    ) 
}
export default Home;