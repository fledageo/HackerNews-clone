import React, { createContext, useEffect, useState } from 'react'
import styles from "./Layout.module.css"
import { Outlet, useLocation } from 'react-router'
import { Header } from '../Header/Header'
import { getUserById, verifyAuth } from '../../../lib/api'

export const UserContext = createContext()

export const Layout = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        verifyAuth()
            .then(res => setUser(res.payload))
    }, [])

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <UserContext.Provider value={{ user,setUser }}>
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
