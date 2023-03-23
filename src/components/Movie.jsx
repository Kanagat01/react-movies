function Movie (props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    return <div className="movie card" id={id}>
        <div className="card-image">
            {
                poster === 'N/A' ? 
                    <img src={`https://via.placeholder.com/300x400?text=${title}`} alt={title}/>
                    : <img src={poster} alt={title}/>
            }
        </div>
        <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{year} <span className="right">{type}</span></p>
        </div>
    </div>
}

export {Movie}