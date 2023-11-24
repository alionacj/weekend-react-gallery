function GalleryItem({item}) {

    return (
        <div>
            <img src={item.url}/> <br></br>
            {item.title} <br></br>
            {item.description}
        </div>
    )
}

export default GalleryItem
