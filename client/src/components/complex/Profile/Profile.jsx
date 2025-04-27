import styles from "./Profile.module.css"
import { UserContext } from "../Layout/Layout"
import { useContext, useEffect } from "react"

export const Profile = () => {
    const { user } = useContext(UserContext)

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
                            <textarea name="about" defaultValue={user?.about} cols={60} rows={5} className={styles.field}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.title}>email:</td>
                        <td>
                            <input type="text" placeholder="email" className={styles.field}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}
