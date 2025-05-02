import styles from './Ask.module.css'
import { getPosts } from '../../../lib/api'
import { PostItem } from '../../primitive/PostItem/PostItem'
import { useEffect, useState } from 'react'

export const Ask = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts("ask")
            .then(res => {
                if (res.status == "ok") setPosts(res.payload)
            })
    }, [])
    return (
        <div className={styles.container}>
            {
                <ol className={styles.list}>
                    {
                        posts.map(post => <li key={post._id}><PostItem post={post} /></li>)
                    }
                </ol>
            }
        </div>
    )
}
