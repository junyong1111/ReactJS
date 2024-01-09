import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detail(){
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState()
    const getMovieDetail = async() =>{
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        console.log(json)
        setDetails(json.data.movie)
        console.log("start")
        console.log(json.data.movie)
        setLoading(false)
    }
    useEffect(
        () => {
            getMovieDetail()
        }
        ,[]
    )
    return(
        <div>
            {loading ? <h3>Loading...</h3>:
            <div className="container"> 
                <img className="movie-background" src={details.background_image_original}></img>
                <h2 className="movie-title">{details.title}</h2>
                <ul>
                    <li> {details.year}</li>
                    <li> {details.title_long}</li>
                </ul>
            </div>
            } 

        </div>
    )
}