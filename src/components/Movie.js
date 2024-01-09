import PropTypes from "prop-types"
import {Link} from "react-router-dom"
export default function Movie({id, coverImage, title, summary, genres}){
    return(
        <div>
            <img src={coverImage} alt={title}/>
            <h3><Link to={`/movie/${id}`}>{title}</Link></h3>
            <p>{summary}</p>
            <ul>
              {genres.map(g => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
    )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}