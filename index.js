// Add your code here


const userName= "binilnitk";
const mailid = "binilreni7@gmail.com";



function submitData(userName,mailid)
{
     const createNew = document.querySelector("body");
     console.log(createNew);

    const configurationObject = {

        method : "POST" ,
        headers : {
            "Content-Type" : "application/json",
             "Accept" : "application/json",
        },
        body : JSON.stringify({
            name : userName,
            email : mailid
        })
    };

     return (fetch("http://localhost:3000/users",configurationObject)
     .then(function(response)
     { 
        return (response.json());
     })
     .then(function(data) {
        createNew.innerHTML = `
        <h1 id="id">${data.name}</h1>  
        <h1 id="userDetails">${data.id}</h1>  
        <h1 id="emailDetails">${data.email}</h1>  
        `
     })
     .catch(function(error) {
        const msg=document.getElementById("emailDetails");
        msg.innerHTML=`
        <h1>${error.message}</h1> 
        `
     }))
     
}


submitData(userName,mailid);













