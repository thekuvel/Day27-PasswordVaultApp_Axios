import {Outlet} from "react-router-dom"
import PasswordForm from "../components/PasswordForm"
import styles from "./Layout.module.css"
import Header from "../components/Header"

function Layout(){
    return(
        <>
            <Header/>
            <div className={styles.container}>
                <PasswordForm/>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout