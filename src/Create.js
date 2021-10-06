import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("sparkles")
    const [isPending, setIsPending] = useState(true) // Use this to show a adding button to notify user
    const history = useHistory() // use this for redirection

    const handleSubmit = (e) => {
        e.preventDefault()
        const newBlog = {title, body, author}
        setIsPending(false)
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(newBlog)
        }).then((res) => {
            setIsPending(true)
            console.log("blog added. ", res.status, newBlog);
            history.push("/")
        })
    }
    return(
        <div className="create">
            <h1>Create new blog</h1>
            <form onSubmit={handleSubmit}>
                <label> Blog Title:</label>
                <input type="text" required value = {title} onChange = {(e) => setTitle(e.target.value) }/>
                <label> Blog Content:</label>
                <textarea required value = {body} onChange={(e) => setBody(e.target.value)} ></textarea>
                <select value = {author} onChange = {(e) => setAuthor(e.target.value)}>
                    <option value="sparkles">Sparkles</option>
                    <option value="Luigi">Luigi</option>
                </select>
                { !isPending && <button>Adding blog...</button>}
                { isPending && <button>Add Blog</button>}
            </form>
        </div>
    )
}
export default Create;