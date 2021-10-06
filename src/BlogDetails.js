import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const Details = () =>{
    const { id } = useParams() // react hook that enables the capturing of url paramaters
    const {data: blog, isPending, err} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push('/')
        })
    }

    return(
        <div className="blog-details">
            { blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                    <p> Written by: {blog.author}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            ) }
            { err  && <div className="err"> { err } </div> }
            { isPending && <div className="pending">Loading...</div> }
        </div>
    )
}
export default Details;