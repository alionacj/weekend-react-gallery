import LikeButton from "../LikeButton/LikeButton"

function GalleryItem({item, getGallery}) {

    return (
        <div id={item.id}>
            <img src={item.url}/> <br></br>
            {item.title} <br></br>
            {item.description} <br></br>
            Likes: {item.likes}
            <LikeButton 
                id={item.id}
                getGallery={getGallery}
            />
        </div>
    )
}

export default GalleryItem
