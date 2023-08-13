import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList (props) {
    console.log('props is:', props)
    return (
        <>
            {props.galleryList.map((item) => {
                return <GalleryItem 
                         key={item.id} 
                            item={item}/>
            })}
        </>
    )
}

export default GalleryList