



const HomePage = ({history}) => {

    return(
    <div>
        <h3 onClick={() => history.push('/movies')} >Movies</h3>
        <h3 onClick={() => history.push('/series')} >Series</h3>
    </div>
)}

export default HomePage