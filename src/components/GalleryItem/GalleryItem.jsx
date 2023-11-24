import LikeButton from "../LikeButton/LikeButton"
import { useState } from "react"

function GalleryItem({item, getGallery}) {

    const [isHovering, setisHovering] = useState(false)

    const hoverOn = () => {
        setisHovering(true)
    }
    const hoverOff = () => {
        setisHovering(false)
    }

    if (isHovering === false) {
        return (
            <div 
                id={item.id}
            >
                <img 
                    src={item.url}
                    onClick={hoverOn}
                ></img>
                {item.title}
                Likes: {item.likes}
                <LikeButton 
                    data-testid="like"
                    id={item.id}
                    getGallery={getGallery}
                />
            </div>
        )
    } else {
        return (
            <div 
                data-testid="description"
                onClick={hoverOff}
            >
            {item.description}
            </div>
        )
    }

}

export default GalleryItem
