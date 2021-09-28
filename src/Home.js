import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My first title", body: "Lorem ipsum somento willyon", author: "Sparkles", id: 1},
        {title: "Welcome to my blog", body: "Lorem ipsum somento willyon", author: "James", id: 2},
        {title: "Some really cool blog", body: "Lorem ipsum somento...", author: "Elija", id: 3},
    ])

    return(
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" />
        </div>
    )
}
export default Home;