
import { DATA } from '../../data/data'
import './series.style.css'

const Series = () => {
    
    const series = DATA[0].entries.filter( entrie => entrie.programType === 'series')

    return(
    <div >
        <h3>Series List</h3>
        <div className='series'>
        {
            (series.map( entrie => 
                (entrie.releaseYear >= 2010) ?
                <div className='serie' key={entrie.title}><img src={entrie.images['Poster Art'].url} alt="series" style={{width: 130, height: 180}}/><p>{entrie.title}</p></div>
                : ''
                )).filter ( (item,index) => index < 21)
        }
        </div>
        
    </div>
)}

export default Series