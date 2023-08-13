

function GalleryItem(props) {
    // console.log('inside GalleryItem props is:', props)
    // console.log('props.item.path:', props.item.path)
    
    const clickItem = () => {
        console.log('props id is:', props.item.id);
        console.log('props description:', props.item.description)
            
       if (props.item.id.clicked == true) {
    
            <>
            {props.item.description} 
            </>
        
       }
        }

    return (
        <>
        <img src ={props.item.path} 
            alt={props.item.description} 
            onClick={(clickItem)}/>
        <button type="like">Love it!</button>
        <p>{0} people love this</p>
        </>
    )
    
}

export default GalleryItem