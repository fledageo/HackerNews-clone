import React, { createContext, useEffect, useState } from 'react'
import styles from "./Layout.module.css"
import { Outlet, useLocation, useNavigate } from 'react-router'
import { Header } from '../Header/Header'
import { verifyAuth } from '../../../lib/api'
import UserContext from '../../../lib/context'


export const Layout = () => {
    const [user, setUser] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if(location.pathname) navigate("/news")
            
        verifyAuth()
            .then(res => setUser(res.payload))
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <UserContext.Provider value={{ user, setUser }}>
                        <Header />
                        <main className={styles.main}>
                            <Outlet />
                        </main>
                    </UserContext.Provider>
                </div>
            </div>
        </>
    )
}
