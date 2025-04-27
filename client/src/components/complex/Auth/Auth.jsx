import React, { useContext } from 'react'
import styles from "./Auth.module.css"
import { useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { userRegistration, userLogin } from "../../../lib/api.js"
import { UserContext } from '../Layout/Layout.jsx'

export const Auth = () => {
  const navigate = useNavigate()
  const {setUser} = useContext(UserContext)

  const {
    register: registerLogin,
    handleSubmit: handleLogin
  } = useForm()

  const {
    register: registerReg,
    handleSubmit: handleReg
  } = useForm()

  const registration = (data) => {
    userRegistration({
      username: data.reg_username,
      password: data.reg_password
    }).then(res => {
      if (res.status === "ok") {
        setUser(res.payload)
        navigate("/")
      }
    })
  }

  const login = (data) => {
    userLogin({
      username: data.login_username,
      password: data.login_password
    })
      .then(res => {
        if (res.status === "ok") {
          setUser(res.payload)
          navigate("/")
        }
      })

  }


  return <>
    <div className={styles.container}>
      <div className={styles.login}>
        <form onSubmit={handleLogin((data) => login(data))} className={styles.form}>
          <h2>Log In</h2>
          <div className={styles.field}>
            <label htmlFor="username1">username</label>
            <input
              type="text"
              id='username1'
              className={styles.field_input}
              autoComplete="current-username"
              {...registerLogin("login_username", { required: true })}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password1">password</label>
            <input
              type="password"
              id='password1'
              autoComplete="current-password"
              className={styles.field_input}
              {...registerLogin("login_password", { required: true })}
            />
          </div>
          <button type='submit' className={styles.btn}>Login</button>
        </form>
      </div>


      <div className={styles.registration}>
        <form onSubmit={handleReg((data) => registration(data))} className={styles.form}>
          <h2>Sign Up</h2>
          <div className={styles.field}>
            <label htmlFor="username2">username</label>
            <input
              type="text"
              id='username2'
              className={styles.field_input}
              autoComplete="new-username"
              {...registerReg("reg_username", { required: true })}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password2">password</label>
            <input
              type="password"
              id='password2'
              className={styles.field_input}
              autoComplete="new-password"
              {...registerReg("reg_password", { required: true })}
            />
          </div>
          <button type='submit' className={styles.btn}>Sign Up</button>
        </form>
      </div>
    </div>
  </>
}
