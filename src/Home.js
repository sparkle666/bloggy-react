import { useState } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: "My first title", body: "Lorem ipsum somento willyon", author: "Sparkles", id: 1},
        {title: "Welcome to my blog", body: "Lorem ipsum somento willyon", author: "James", id: 2},
        {title: "Some really cool blog", body: "Lorem ipsum somento...", author: "Elija", id: 3},
    ])

    return(
        <div className="home">
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                </div>
            )) }
        </div>
    )
}
export default Home;