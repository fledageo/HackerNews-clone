import { Link } from 'react-router'
import { calcTimestamp } from '../../../lib/helpers'
import styles from './Comment.module.css'

export const Comment = ({ comment, allComments }) => {
  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <Link to={"#"}>{comment.author.username}</Link>
        <span>{calcTimestamp(comment.createdAt)}</span>
      </div>
      <div className={styles.text}>
        {
          comment.text
        }
      </div>
      <Link to={`/reply/${comment._id}`} className={styles.reply}>reply</Link>

      <div className={styles.childs}>
        {
          (comment.childs.length > 0 && allComments) &&
            allComments.filter(child => child.parent === comment._id)
            .map(child => <Comment comment={child} allComments={allComments} key={child._id} />)
        }
      </div>
    </div>
  )
}
