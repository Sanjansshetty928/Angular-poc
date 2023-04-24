export class DataService{
   getDetails(){ 
    const prom=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Data');
        },1500)
    })
    return prom;
}
}