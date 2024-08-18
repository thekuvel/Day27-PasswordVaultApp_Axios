import { useEffect, useState } from "react"
// import { GetAllPassword } from "../API/APICalls"
import { GetAllPassword } from "../API/AxiosAPICalls"
import PasswordCard from "../components/PasswordCard"

import styles from "./Vault.module.css"



function Vault(){

    let [data,setData] = useState([])

    async function GetAllData() {
        let resData = await GetAllPassword()
        setData(resData)
        console.log(resData)
    }

    useEffect(()=>{
        GetAllData()
    },[])

    return(
    <>

        <div className={styles.cardContainer}>
        {data.map((val)=>(
            <PasswordCard val={val} key={val.id} data={data} setData={setData}/>
        ))}
        </div>

    </>)
}

export default Vault