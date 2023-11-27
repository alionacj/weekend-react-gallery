import axios from "axios"
import { useState } from "react"

function LikeButton({id, getGallery}) {

    const [isLiked, setisLiked] = useState(false)

    const addLike = () => {
        setisLiked(true)
        axios({
            method: 'PUT',
            url: `gallery/like/${id}`,
            data: true
        })
        .then((response) => {
            getGallery()
            // refresh
        })
        .catch((error)=> {
            console.error(error)
        })
    }

    const unLike = () => {
        setisLiked(false)
        axios({
            method: 'PUT',
            url: `gallery/like/${id}`,
            data: false
        })
        .then((response) => {
            getGallery()
            // refresh
        })
        .catch((error)=> {
            console.error(error)
        })
    }


    if (isLiked) {
        return (
            <button onClick={unLike}>Unlike</button>
        )
    } else {
        return (
            <button onClick={addLike}>Like</button>
        )
    }
}

export default LikeButton
