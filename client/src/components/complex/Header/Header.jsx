import React, { useContext } from 'react'
import styles from "./Header.module.css"
import UserContext from '../../../lib/context'
import { logoutUser } from '../../../lib/api'
import { Link, useNavigate } from 'react-router'

export const Header = () => {
    const { user,setUser } = useContext(UserContext)
    const navigate = useNavigate()
    
    const handleLogout = () => {    
        logoutUser()
        .then(res => {
            if(res.status === "ok"){
                setUser(null)
            }
        })
    }
    const handlePrivateNavigate = (url) => {
        if(user){
            navigate(url)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <div className={styles.logo_wrapper}>
                        <div className={styles.logo} onClick={() => navigate("/news")}>
                            <span>H</span>
                        </div>
                        <h1 className={styles.logo_name} onClick={() => navigate("/news")}>Hacker News</h1>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.list}>
                            <li><Link to="/newest">new</Link></li>
                            <li><Link to="#">past</Link></li>
                            <li><Link to="#">comments</Link></li>
                            <li><Link to="/ask">ask</Link></li>
                            <li><Link to="#">show</Link></li>
                            <li><Link to="#">jobs</Link></li>
                            <li><span 
                                onClick={(e) => handlePrivateNavigate("/post/add")}
                                className={styles.privateNav}
                            >submit</span></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.user}>
                    {
                        user ? <>
                            <Link to="/account">{user.username}</Link>
                            <Link to="/" onClick={handleLogout} className={styles.login}>logout</Link>
                        </>
                        :
                        <Link to="/auth" className={styles.login}>login</Link>
                    }
                </div>
            </div>
        </div>
    )
}
