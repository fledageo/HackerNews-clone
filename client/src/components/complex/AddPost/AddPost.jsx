import { useContext, useEffect } from 'react'
import styles from './AddPost.module.css'
import { useForm } from "react-hook-form"
import { UserContext } from '../Layout/Layout'
import { useNavigate } from 'react-router'
import { addPost } from '../../../lib/api'

export const AddPost = () => {
  const { register, handleSubmit, reset } = useForm()
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
  }, [])

  const handleAddPost = (post) => {
    const data = {
      ...post,
      author: user._id,
      createdAt: Date.now(),
      points: 1,
      pointsFrom: [user._id],
      comments: [],
      type: post.url.trim() !== "" ? "url" : "ask"
    }

    addPost(data).then(res => {
      if (res.status == "ok") {
        navigate("/newest")
      }
    })
  }

  return <>
    <div className={styles.container}>
      <form onSubmit={handleSubmit((post) => handleAddPost(post))} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            id='title'
            {...register("title", { required: true })}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="url">url</label>
          <input
            type="url"
            id='url'

            {...register("url")}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="title">text</label>
          <textarea
            type="text"
            className={styles.text}
            id='text'
            {...register("text")}
          >

          </textarea>
        </div>

        <button type='submit' className={styles.add_btn}>submit</button>
      </form>
    </div>
  </>
}

