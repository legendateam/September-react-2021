import './Post.css'

function Post(props) {

    let {userId, id, title} = props

    return (
        <p className='post'>
            {userId}.{id} - {title}
        </p>
    );
}

export default Post;