export default function Post(props) {
    return (
    <h3>
        {props.name} <button onClick={() => props.removePost(props.id)}>delete</button>
    </h3>
    )
}