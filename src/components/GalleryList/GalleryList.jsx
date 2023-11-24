import axios from "axios"
import { useState, useEffect } from "react"

import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList() {

    // react state
    let [galleryItems, setgalleryItems] = useState([])

    // on load, get guests
    // prevents infinite loop
    useEffect(() => {
        getGallery()
    }, [])


    const getGallery = () => {
        axios({
            method: 'GET',
            url: '/gallery'
        })
        .then((response) => {
            setgalleryItems(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <div
            data-testid="galleryList"
        >
            {galleryItems.map((item) => (
                <GalleryItem
                    data-testid="galleryItem"
                    key={item.id}
                    item={item}
                    getGallery={getGallery}
                />
            ))}
        </div>
    )
}

export default GalleryList
