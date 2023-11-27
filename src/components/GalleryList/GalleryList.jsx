import axios from "axios"
import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import { Stack } from "react-bootstrap"

import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList() {

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
        <div className="container">
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
        </div>
    )
}

export default GalleryList
