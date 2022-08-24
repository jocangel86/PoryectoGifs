import PropTypes from 'prop-types';

export const GifItem=({title, url})=>{
    // Puedes recibir {img} o desestructurar el prop {title, url}
    return(
        <div  className="card">
              {/* <p>id: {gif.id}</p> */}
              <p>{title}</p>
              <img src={url} alt={title}/>
            </div>
    )
}

GifItem.propTypes={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}