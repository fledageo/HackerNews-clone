import { useContext, useEffect, useState } from 'react'
import styles from './Reply.module.css'
import { Link, useNavigate, useParams } from 'react-router'
import { getCommentById, replyComment } from '../../../lib/api'
import { calcTimestamp } from '../../../lib/helpers'
import UserContext from '../../../lib/context'

export const Reply = () => {
    const [comment, setComment] = useState(null)
    const [replyText, setReplyText] = useState("")
    const { id } = useParams()
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (id) {
            getCommentById(id)
                .then(res => {
                    if (res.status === "ok") setComment(res.payload)
                })
        }
    }, [])

    const handleReply = () => {
        if (user && replyText.trim() !== "") {
            const childComment = {
                text: replyText,
                author: user._id,
                childs: [],
                parent: comment._id,
                post: comment.post
            }
            replyComment(childComment)
                .then(res => {
                    if(res.status == "ok") navigate(`/post/${comment.post._id}`)
                })
        }
    }

    return (
        <div className={styles.container}>
            {
                comment && <>
                    <div className={styles.actions}>
                        <Link to="#">{comment.author.username}</Link>
                        <span>{calcTimestamp(comment.createdAt)}</span>
                        <Link to="#">parent</Link>
                        <span>on: 
                            <Link to={`/post/${comment.post._id}`}>{
                                comment.post.title.length > 30 ? `${comment.post.title.slice(0, 30)}...` : comment.post.title
                            }</Link></span>

                    </div>
                    <div className={styles.text}>
                        {comment.text}
                    </div>
                    <div className={styles.reply}>
                        <textarea
                            className={styles.reply_field}
                            rows={7}
                            onChange={(e) => setReplyText(e.target.value)}
                            value={replyText}
                        ></textarea>
                        <button
                            className={styles.reply_btn}
                            onClick={handleReply}
                        >reply</button>
                    </div>
                </>
            }
        </div>
    )
}
