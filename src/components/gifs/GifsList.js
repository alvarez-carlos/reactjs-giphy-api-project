import GifItem from './GifItem'

const GifList = ({ data }) => {
    return(
        <ul>
            {
                data.map(item => <GifItem key={item.id} item={item}/>)
            }
        </ul>
    )
}

export default GifList