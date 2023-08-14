import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import getImages from '../App/App';
import './GalleryItem.css'

function GalleryItem(props) {
    // console.log('inside GalleryItem props is:', props)
    // console.log('props.item.path:', props.item.path)

    let [imageClick, setImageClick] = useState(false);
    
    const clickItem = () => {
        // console.log('props id is:', props.item.id);
        // console.log('props description:', props.item.description)
            setImageClick(!imageClick)
        }

    const likeClick = () => {
        axios.put(`/gallery/like/${props.item.id}`, {likes: props.item.likes})
            .then((response) => {
                console.log('response', response);
                getImages();
            })
            .catch((error) => {
                console.log('Error liking image:', error);
            })
    
        }   

    return (
        <>
        <div className="myImage">
        <div onClick={clickItem}>
         {imageClick == true ? <p>{props.item.description}</p> : <img src ={props.item.path}/>}  
        
        </div>
        <button onClick={likeClick} type="button">Love it!</button>
        <p>{props.item.likes} people love this</p>
        </div>
        </>
    )
    
}

export default GalleryItem