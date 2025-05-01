import { useParams } from 'react-router'
import styles from './Post.module.css'
import { useContext, useEffect, useState } from 'react'
import { getPostById } from '../../../lib/api'
import { PostItem } from '../../primitive/PostItem/PostItem'
import { UserContext } from '../Layout/Layout'

export const Post = () => {
    const [post, setPost] = useState(null)
    const [newComment, setNewComment] = useState("")
    const { id } = useParams()
    const currentUser = useContext(UserContext)

    useEffect(() => {
        getPostById(id)
            .then(res => {
                if (res.status == "ok") setPost(res.payload)
                    console.log(res.payload.author)
            })
    }, [])

    const handleComment = () => {
        if(newComment.trim() !== "" && currentUser){
            const data = {
                text: newComment,
                author:currentUser._id,
                parent:null
            }
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

                    </div>
                </>
            }
        </div>
    )
}
