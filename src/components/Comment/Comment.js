import './Comment.css'

function Comment(props) {

    let {postId, id, name, email ,body} = props;

    return (
        <div className={"comment"}>
            <strong>{postId}.{id}</strong> - {name}
            <br/>
            <span><strong>email:</strong> {email}</span>
            <p>{body}</p>
        </div>
    );
}

export default Comment;