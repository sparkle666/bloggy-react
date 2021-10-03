import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null) // resct use state hooks
    const [isPending, setisPending] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        setTimeout(() => { // add a a delay of 2 seconds before fetching data
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok){
                    throw Error("Could not fetch data from url...")
                }
                console.log(res.status)
                return res.json()
            })
            .then(data => {
            setBlogs(data) 
            setisPending(false)
            setErr(null) // stop the conditional err div from showing if request successful
            })
            .catch(err =>{
                // console.log(err.message)
                setErr(err.message)
                setisPending(false) // stop the loading from showing
            })
        }, 1000)
    }, [])
     // this useEffect runs on load if there are dependencies attached to it.
        // Evalutes if blog and blog components are both true. If one is false, nothing renders.
    return(
        <div className="home"> 
           { err && <div>{err}</div> }
           { isPending && <div> Loading... </div> } 
           { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
    ) 
}
export default Home;