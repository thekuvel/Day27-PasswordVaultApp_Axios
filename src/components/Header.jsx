import styles from "./Header.module.css"
import { useNavigate, useNavigation } from "react-router-dom"


function Header(){
    const navigate = useNavigate();

    function handleHome(){
        navigate("/")
        window.location.reload("/")
    }

    return(
        <div className={styles.header}>
            <h1>Password Vault</h1>
            <button className="btn btn-info" onClick={handleHome}>Home</button>
        </div>
    )
}

export default Header