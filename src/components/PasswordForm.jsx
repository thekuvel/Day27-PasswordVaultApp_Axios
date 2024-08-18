import styles from "./PasswordForm.module.css"
import { GetSinglePassword, CreatePassword,EditPassword } from "../API/AxiosAPICalls";
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom";

function PasswordForm(){


    let [searchParams, setSearchParams] = useSearchParams("")

    let [userInput, setUserInput] = useState({});

    let cardId = searchParams.get("id") 

    let navigate = useNavigate()
    

    if(cardId){
        console.log(cardId)
        updateForm(cardId)
    }

    async function updateForm(cardId){
        let data = await GetSinglePassword(cardId)
        console.log(data);    
        setUserInput(data)
        navigate("/?edit=true")
    }

    function handleSubmit(e){
        let edit = searchParams.get("edit");

        if (edit){
            e.preventDefault()
            console.log(edit)
            EditPassword(userInput.id,userInput)
            setUserInput({})
            navigate("/")
            
        }else{
            e.preventDefault()
            // console.log(userInput);
            CreatePassword(userInput)
        }
        
    }

    function handleInputValueChange(e) {
        // console.log(e.target.value);
        
        setUserInput({
            ...userInput,
            [e.target.name] : e.target.value
        })
    }


    return(
        <div className={styles.formContainer}>
            
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="exampleTitle" className="form-label">Title</label>
                    <input name="title" type="text" className="form-control" id="exampleTitle" aria-describedby="titleHelp" value={userInput.title || ""} onChange={handleInputValueChange}/>
                    <div id="titleHelp" className="form-text">Title</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleUrl" className="form-label">URL</label>
                    <input name="urlLink" type="text" className="form-control" id="exampleUrl" aria-describedby="urlHelp" value={userInput.urlLink || ""} onChange={handleInputValueChange}/>
                    <div id="urlHelp" className="form-text">Enter URL or Application Name</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="loginId" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userInput.loginId || ""} onChange={handleInputValueChange}/>
                    <div id="emailHelp" className="form-text">Enter Email Id</div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" value={userInput.password || ""} onChange={handleInputValueChange}/>
                </div>
                

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

          
        </div>
    )
}

export default PasswordForm