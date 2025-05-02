import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router'
import UserContext from "../../../lib/context.js"
import styles from "./PostItem.module.css"
import { calcTimestamp } from "../../../lib/helpers"


export const PostItem = ({ post }) => {
  const [hostname, setHostname] = useState("")
  const {user} = useContext(UserContext)
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

  return <>
    <div className={styles.container}>
      <div className={styles.header}>
        <Link className={styles.title} to={post.type == "url" ? post.url : `/post/${post._id}`}>{post.title}</Link>
        {post.type === "url" && <Link className={styles.url} to={post.url}>{hostname}</Link>}
      </div>
      <div className={styles.actions}>
        <span>{`${post.points} ${post.points > 1 ? "points" : "point"}`}</span>
        <span>
          by <Link to={"#"} className={user?._id == post.author._id ? styles.isUser : ""}>{post.author.username}</Link>
        </span>
        <span>{calcTimestamp(post.createdAt)}</span>
        <span>hide</span>
        <Link to={`/post/${post._id}`}>{`${post.comments.length > 0 ? `${post.comments.length} comments` : "discuss"}`}</Link>
      </div>
    </div>
  </>
}
