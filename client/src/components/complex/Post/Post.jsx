import styles from './Post.module.css'
import { useNavigate, useParams } from 'react-router'
import { useContext, useEffect, useState } from 'react'
import { addComment, getPostById, getPostComments } from '../../../lib/api'
import { PostItem } from '../../primitive/PostItem/PostItem'
import { Comment } from '../../primitive/Comment/Comment'
import UserContext from '../../../lib/context'

export const Post = () => {
    const [post, setPost] = useState(null)
    const [newComment, setNewComment] = useState("")
    const [comments, setComments] = useState([])
    const { user } = useContext(UserContext)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getPostById(id)
            .then(res => {
                if (res.status == "ok") setPost(res.payload)
            })
        getPostComments(id)
            .then(res => {
                if (res.status == "ok") setComments(res.payload)
            })
    }, [id])

    const handleComment = () => {
        if (user) {
            if (newComment.trim() !== "") {
                const data = {
                    text: newComment,
                    author: user._id,
                    childs: [],
                    post: id,
                    parent: id,
                    createdAt: Date.now()
                }
                addComment(data)
                    .then(res => {
                        if (res.status == "ok") {
                            setPost(res.payload)
                            setComments(res.payload.comments)
                            setNewComment("")
                        }
                    })
            }
        } else {
            navigate("/auth")
        }
    }

    return (
        <div className={styles.container}>
            {
                post && <>
                    <div className={styles.post}>
                        <div className={styles.header}>
                            <PostItem post={post} />
                        </div>
                        {
                            post.text &&
                            <div className={styles.content}>
                                <p className={styles.content_text}>{post.text}</p>
                            </div>
                        }
                    </div>
                    <div className={styles.actions}>
                        <textarea
                            rows={8}
                            type="text"
                            className={styles.add_field}
                            onChange={(e) => setNewComment(e.target.value)}
                            value={newComment}
                        ></textarea>
                        <button className={styles.add_btn} onClick={handleComment}>add comment</button>
                    </div>
                    <div className={styles.comments}>
                        {
                            post.comments?.length > 0 &&
                            comments.filter(comment => comment.parent === id)
                                .map(comment => <Comment comment={comment} key={comment._id} allComments={comments} />)
                        }
                    </div>
                </>
            }
        </div>
    )
}
