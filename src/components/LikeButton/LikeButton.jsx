import axios from "axios"

function LikeButton({id, getGallery}) {

    function addLike() {
        axios({
            method: 'PUT',
            url: `gallery/like/${id}`
        })
        .then((response) => {
            getGallery()
            // refresh
        })
        .catch((error)=> {
            console.error(error)
        })
    }

    return (
        <button onClick={addLike}>Like</button>
    )
}

export default LikeButton
