function GalleryItem(props) {
    // console.log('inside GalleryItem props is:', props)
    // console.log('props.item.path:', props.item.path)
    const clickItem = () => {
        console.log(props.item.id);
        if(props.item.id) {
            return (
            <>
            <p>{props.item.description}</p>
            </>
            )
        }
    }
    return (
        <>
        <img src ={props.item.path} 
            alt={props.item.description} 
            onClick={(clickItem)}/>
        </>
    )


}

export default GalleryItem