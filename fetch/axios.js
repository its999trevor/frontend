let url='https://jsonplaceholder.typicode.com/todos/1';
// axios.get(url)
//     .then((Response)=>{
//         console.log(Response.data);
//     })
async function getData(){
    let Response=await axios.get(url)
    console.log(Response.data);
    }
    getData();
    