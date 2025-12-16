import classes from './Post.module.css'
import likeIcon from './../../../assets/like.png'
import commentIcon from './../../../assets/comment.png'
import repostIcon from './../../../assets/repost.png'

const Post = ({post}) => {

    const ReactionsData = [
        {
            icon: likeIcon,
            alt: "Likes",
            count: post.engagement.likes
        },
        {
            icon: commentIcon,
            alt: "Comments",
            count: post.engagement.comments_count
        },
        {
            icon: repostIcon,
            alt: "Reposts",
            count: post.engagement.reposts_count
        }
    ]

    const mediaUrl = post.content.media && post.content.media.length > 0
        ? post.content.media[0].url
        : '';

    const avatarUrl = post.author ? post.author.avatar_url : '';

    return (
        <div className={classes.post}>
            <div className={classes.user}>

                {avatarUrl && <img src={avatarUrl} alt="Avatar"/>}
                <span className={classes.postUsername}>{post.author.username}</span>
            </div>
            <div className={classes.postContent}>
                <div>
                    <p>{post.content.text}</p>
                </div>
                <div className={classes.postPhoto}>
                    <div className={classes.postPhoto}>
                        {mediaUrl && <img src={mediaUrl} alt="Post Media"/>} {/* <-- ИСПРАВЛЕНО: Добавлена проверка */}
                    </div>

                </div>
            </div>
            <div className={classes.postReactions}>

                {ReactionsData.map((reaction) => (
                    <div key={reaction.alt} className={classes.postReaction}>
                        <button>
                            <img src={reaction.icon} alt={reaction.alt}/>
                        </button>
                        <span>{reaction.count}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Post