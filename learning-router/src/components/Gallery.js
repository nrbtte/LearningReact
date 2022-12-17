import React from "react";
import { Link } from "react-router-dom";
import gallery from '../data/data'
const Gallery = () => {
    return(
        <div>
            <h1>Products</h1>
            <div>
                {gallery.map((picture)=>{
                    return (
                        <article key={picture.id}>
                            <h4>{picture.name}</h4>
                            <Link to={`/gallery/${picture.id}`}>Info</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Gallery;