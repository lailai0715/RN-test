
const  Request = {
    get:(url,successCallback,failCallBack) =>{
        console.log(url);
        return fetch(url)
            .then((response)=>response.json())
            .then((reshonse)=>{
                successCallback(reshonse);
            })
            .catch((error)=>{
                failCallBack(error);
            });
    }
};
module.exports = Request;