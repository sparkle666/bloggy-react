import { useParams } from "react-router"
import useFetch from "./useFetch"

const Mylists = () => {
    
    const {id} = useParams()
    const {data:blog, isPending, err} = useFetch('http://localhost:8000/blogs/' + id)
    return (
        <div className="mylist">
            <h2>My personal List...</h2>
            { isPending && <div> Loading... </div>}
            {blog && (
                <div className="mylist">
                    <h3>{blog.title} <span>{blog.id}</span></h3>
                    <p>{blog.body}</p>
                </div>   
            )}
            {err && <div> {err} </div> }
        </div>
    )
}

export default Mylists;