
let url = "https://65e29554a8583365b31846d3.mockapi.io/v1/Favourites";

import axios from "axios";

const instance = axios.create({
    baseURL : url,
    timeout : 1000,
    headers : {
        'X-Custom-Header': 'foobar'
    }
})

//Using simple axios call
async function GetAllPassword(){
    let res = await axios.get(url)
    return(res.data)
}

//using axios instance
async function GetSinglePassword(id){
    let res = await instance.get(`/${id}`);
    // console.log(data);
    return(res.data)
    
}


async function CreatePassword(payLoad) {

    let res = await instance.post("/",payLoad)
    console.log(res.data)

    window.location.reload();
    
}

async function  DeletePassword(id) {
    let res = await instance.delete(`/${id}`)    
}


async function EditPassword(cardId,data){
    // console.log(cardId,data);
    
    let res = await instance.put(`/${cardId}`,data)
    console.log(res.data);

    window.location.reload();
    
}


export {GetAllPassword, GetSinglePassword, CreatePassword, DeletePassword, EditPassword}