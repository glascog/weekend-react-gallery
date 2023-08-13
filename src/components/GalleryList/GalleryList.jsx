import GalleryItem from "./GalleryItem"

function GalleryList (props) {
    console.log('props is:', props)
    return (
        <>
            {props.galleryItems.map((item) => {
                return <GalleryItem key={item.id} item={item}/>
            })}
        </>
    )
}

export default GalleryList