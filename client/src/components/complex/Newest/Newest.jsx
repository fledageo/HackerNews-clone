import styles from "./Newest.module.css"
import { useEffect, useState } from 'react'
import { getNewestPosts } from '../../../lib/api'
import { PostItem } from '../../primitive/PostItem/PostItem'

export const Newest = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        getNewestPosts()
            .then(res => {
                if(res.status == "ok") setPosts(res.payload)
            })
    }, [])

    return <>
        <div className={styles.container}>
            {
                <ol className={styles.list}>
                    {
                        posts.map(post => <li key={post._id}><PostItem post={post}/></li>)
                    }
                </ol>
            }
        </div>
    </>
}
