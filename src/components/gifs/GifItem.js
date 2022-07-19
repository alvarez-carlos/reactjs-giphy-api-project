const GifItem = ({ item }) => {
    return (
        <li>
            <img src={item.url} />
        </li>
    )
}

export default GifItem