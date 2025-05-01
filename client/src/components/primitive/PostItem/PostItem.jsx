import { useEffect, useState } from "react"
import { Link } from 'react-router'

import styles from "./PostItem.module.css"


export const PostItem = ({ post }) => {
  const [hostname, setHostname] = useState("")

  useEffect(() => {
    if (post.type === "url") {
      try {
        const url = new URL(post.url)
        setHostname(url.host)
      } catch (error) {
        setHostname("")
      }
    }
  }, [])

  const calcCreatedAt = (createdAt) => {
    const calc = Date.now() - new Date(createdAt).getTime()
    const minutes = Math.floor(calc / 1000 / 60)

    if (minutes > 59) {
      const hours = Math.floor(minutes / 60)
      if (hours > 23) {
        const days = Math.floor(hours / 24)
        return days > 1 ? `${days} days ago` : `${days} day ago`
      }
      return hours > 1 ? `${hours} hours ago` : `${hours} hour ago`
    }
    return minutes > 1 ? `${minutes} minutes ago` : `${minutes} minute ago`

  }

  return <>
    <div className={styles.container}>
      <div className={styles.header}>
        <Link className={styles.title} to={post.type == "url" ? post.url : `/post/${post._id}`}>{post.title}</Link>
        {post.type === "url" && <Link className={styles.url} to={post.url}>{hostname}</Link>}
      </div>
      <div className={styles.actions}>
        <span>{`${post.points} ${post.points > 1 ? "points" : "point"}`}</span>
        <span>by <Link to={"#"}>{post.author.username}</Link></span>
        <span>{calcCreatedAt(post.createdAt)}</span>
        <span>hide</span>
        <span><Link to={"/comments"}>{`${post.comments.length > 0 ? post.comments.length : "discuss"}`}</Link></span>
      </div>
    </div>
  </>
}
