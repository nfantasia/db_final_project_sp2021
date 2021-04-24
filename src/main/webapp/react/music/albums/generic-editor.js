const {useState, useEffect} = React
const {useParams} = window.ReactRouterDOM;
const ALBUM_URL = "http://localhost:8080/api/albums"

const AlbumEditor = (
    {
        schema = {
            title: {type: "text"},
            // id: {type: "text"}
        }
    }) => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    useEffect(() => {
        findById(id)
    }, []);
    const findById = (id) =>
        fetch(`${ALBUM_URL}/${id}`)
            .then(response => response.json())
            .then(item => setItem(item))
    return (
        <div>
            <h2>Album Editor {id}</h2>
            {JSON.stringify(item)}
            <ul className="list-group">
                {
                    Object.keys(item).map((key, ndx) => {
                        if(!schema[key]) return null
                        return(
                            <li>
                                {
                                    
                                }
                                <input
                                    className="form-control"
                                    type={schema[key].type}
                                    value={item[key]}/>
                            </li>)

                    })
                }
            </ul>
        </div>
    )
}

export default AlbumEditor