import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null) // resct use state hooks
    const [isPending, setisPending] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        setTimeout(() => { // add a a delay of 2 seconds before fetching data
            fetch(url)
            .then(res => {
                if (!res.ok){
                    throw Error("Could not fetch data from url...")
                }
                console.log(res.status)
                return res.json()
            })
            .then(data => {
            setData(data) 
            setisPending(false)
            setErr(null) // stop the conditional err div from showing if request successful
            })
            .catch(err =>{
                // console.log(err.message)
                setErr(err.message)
                setisPending(false) // stop the loading from showing
            })
        }, 1000)
    }, [url])
    return {data, isPending, err}
}
export default useFetch;