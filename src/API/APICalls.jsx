
let API = "https://65e29554a8583365b31846d3.mockapi.io/v1/Favourites"

//CRUD


//READ - GET
async function GetAllPassword(){
    let res = await fetch(API);
    let data = await res.json();
    // console.log(data);
    return(data)
    
}

//READ - GET single object
async function GetSinglePassword(id){
    let res = await fetch(`${API}/${id}`);
    let data = await res.json();
    // console.log(data);
    return(data)
    
}

//CREATE - POST
async function CreatePassword(payLoad) {

    let res = await fetch(API,{
        headers :{
            "Content-Type" : "application/json"
        },
        method : "POST",
        body : JSON.stringify(payLoad)
    })

    let resData = await res.json()
    console.log(resData)
    window.location.reload();
    
}

//DELETE
async function  DeletePassword(id) {
    let res = fetch(`${API}/${id}`,{
        headers : {
            "Content-Type" : "application/json"
        },
        method : "DELETE"
    })    
    
}

//Edit - PUT/PATCH
async function EditPassword(cardId,data){
    console.log(cardId,data);
    
    let res = await fetch(`${API}/${cardId}`,{
        headers : {
            "Content-Type" : "application/json"
        },
        method : "PUT",
        body : JSON.stringify(data)
    })

    let resData = await res.json()
    console.log(resData);
    window.location.reload();
    
}

export {GetAllPassword, GetSinglePassword, CreatePassword, DeletePassword, EditPassword}