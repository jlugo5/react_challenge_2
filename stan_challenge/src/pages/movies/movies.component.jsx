
import { DATA } from '../../data/data'
import './movies.styles.css'

const Movies = () => {
   
    const movies = DATA[0].entries.filter( entrie => entrie.programType === 'movie')
    return(
    <div>
        <h3>Movies List</h3>
        <div className='movies'>
        {
            (movies.map( entrie => 
                (entrie.releaseYear >= 2010) ?
                <div className='movie' key={entrie.title}> <img src={entrie.images['Poster Art'].url} alt="movie" style={{width: 130, height: 180}}/> <p>{entrie.title}</p> </div>
                : ''
                )).filter( (item,index) => index < 21)
        }
        </div>
         
    </div>
)}

export default Movies