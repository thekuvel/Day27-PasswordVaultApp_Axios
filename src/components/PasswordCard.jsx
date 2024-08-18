import styles from "./PasswordCard.module.css"
import { DeletePassword } from "../API/AxiosAPICalls";
import { useNavigate } from "react-router-dom";

function PasswordCard({val, data, setData}) {
    const navigate = useNavigate();

    let urlText = val.urlLink;
    urlText = urlText.substring(0,25) + "..."

    async function handleDelete(id) {
        // console.log(id);
        let tempData = await data.filter((val)=>val.id!==id)
        DeletePassword(id)     
        setData(tempData)
    }   

    async function handleEdit(val) {
        console.log(val);
        navigate(`?id=${val.id}`)     
    } 

    return(
        <>
            <div className={`card ${styles.passwordCard}`}>
                <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <a href={val.urlLink} className="btn btn-primary">{urlText}</a>
                    <p className="card-text">Id: {val.loginId}</p>
                    <p className="card-text">Password: {val.password}</p>
                    
                    <div className={styles.buttonDiv}>
                        <button onClick={()=>handleEdit(val)} className="btn btn-outline-primary">Edit</button>
                        <button onClick={()=>handleDelete(val.id)} className="btn btn-outline-danger">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordCard