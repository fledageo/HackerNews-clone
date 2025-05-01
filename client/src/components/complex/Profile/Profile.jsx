import styles from "./Profile.module.css"
import { UserContext } from "../Layout/Layout"
import { useContext, useEffect, useState } from "react"
import { updateUser } from "../../../lib/api"
import { useNavigate } from "react-router"

export const Profile = () => {
    const [info, setInfo] = useState({ about: "", email: "" })
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            setInfo({
                about: user.about,
                email: user.email
            })
        } else {
            navigate("/")
        }
    }, [user])

    const handleUpdate = () => {
        if (info.about !== user.about || info.email !== user.email) {
            updateUser(info)
                .then(res => {
                    if (res.status == "ok") {
                        setUser(res.payload)
                        setInfo({
                            about: res.payload.about,
                            email: res.payload.email
                        })
                        console.log(res.payload)
                    }
                })
        }
    }

    return <>
        <div className={styles.container}>
            <table>
                <tbody className={styles.table_body}>
                    <tr>
                        <td className={styles.title}>user:</td>
                        {
                            user && <td>{user?.username}</td>
                        }
                    </tr>
                    <tr>
                        <td className={styles.title}>created:</td>
                        {
                            user && <td>{user?.created}</td>
                        }
                    </tr>
                    <tr>
                        <td className={styles.title}>karma:</td>
                        {
                            user && <td>{user?.karma}</td>
                        }
                    </tr>
                    <tr>
                        <td className={styles.title}>about:</td>
                        <td>
                            <textarea
                                name="about"
                                value={info.about}
                                cols={60}
                                rows={5}
                                placeholder="about"
                                className={styles.field}
                                onChange={(e) => setInfo({ ...info, about: e.target.value })}
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.title}>email:</td>
                        <td>
                            <input
                                type="text"
                                value={info.email}
                                onChange={(e) => setInfo({ ...info, email: e.target.value })}
                                placeholder="email"
                                className={styles.field}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <button className={styles.update_btn} onClick={handleUpdate}>Update</button>
        </div>
    </>
}
