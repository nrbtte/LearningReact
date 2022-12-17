import React from "react";
import { useParams } from "react-router-dom";
import pictures from '../data/data'

const Picture = () => {
    const {pictureId} = useParams();
    const picture = pictures.find(img => img.id === pictureId);
    const {name, image} = picture;

    return(
        <div>
            <h1>A single product {name}</h1>
            <img src={require(`../data/pictures/${image}`)} alt={name}/>
        </div>
    );
}

export default Picture;