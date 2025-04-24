import React, { useContext } from 'react'
import styles from "./Header.module.css"
import { UserContext } from '../Layout/Layout'

export const Header = () => {
    const { user } = useContext(UserContext)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <div className={styles.logo_wrapper}>
                        <div className={styles.logo}>
                            <span>H</span>
                        </div>
                        <h1 className={styles.logo_name}>Hacker News</h1>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li><a href="">new</a></li>
                            <li><a href="">past</a></li>
                            <li><a href="">comments</a></li>
                            <li><a href="">ask</a></li>
                            <li><a href="">show</a></li>
                            <li><a href="">jobs</a></li>
                            <li><a href="">submit</a></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.user}>
                    {
                        user ? <>
                            <a href="/account">{user.username}</a>
                            <a href="" className={styles.login}>logout</a>
                        </>
                            :
                            <a href="/auth" className={styles.login}>login</a>
                    }
                </div>
            </div>
        </div>
    )
}
