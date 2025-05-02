import { useEffect, useState } from 'react'
import styles from './News.module.css'
import { getPosts } from '../../../lib/api'
import { PostItem } from '../../primitive/PostItem/PostItem'

export const News = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        getPosts("url")
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
