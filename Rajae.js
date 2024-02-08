console.log("Im here");

//PROMISE
let UploudVideo=new Promise((resolve,reject)=>{
//do some operation ...

let completed;
completed=true;
//completed=false;

if(completed){

    resolve("Sucssfully Uploaded");

}else{
    reject("Sorry,Failled");
}

});

UploudVideo
.then((msg)=>{
    console.log("then is called:"+ msg);
})
.catch((msg)=>{
    console.log("catch is called:"+ msg);
});


let UploudVideo1= new Promise((resolve,reject)=>{
    resolve("Sucssfully UploadedVideo1 upload");
   // reject("upload video 1 is failled !!!");
});

let UploudVideo2= new Promise((resolve,reject)=>{
    resolve("Sucssfully UploadedVideo2 upload");
});

let UploudVideo3= new Promise((resolve,reject)=>{
    resolve("Sucssfully UploadedVideo3 upload");
   // reject("upload video 3 is failled !!!");
});
// upload tous les video quant il a trouve un reject sortir afficher le reject
/*Promise.all([UploudVideo1,UploudVideo2,UploudVideo3]).then((msgs)=>
{
    console.log(msgs);
}).catch((msgs)=>{
    console.log(msgs);
});*/

//premier resulet  qui est reusi ila afiicher est soertir
Promise.race([UploudVideo2,UploudVideo1,UploudVideo3]).then((msgs)=>
{
    console.log(msgs);

}).catch((msgs)=>{
    console.log(msgs);
});