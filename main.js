// function promieseFunc(){
//     return new Promise((resolve,reject) => {
//         const rnd = Math.floor(Math.random()*4)
//         if(rnd ==3){
//             resolve("hello" + rnd)
//         }
//             reject(rnd)
//     })
//     }
// promieseFunc()
// .then((data) => {console.log(data)})
// .catch((err) => {console.log(err)})


// function  getDatePromies(){
//     return new Promise((resolve,reject) => {
//         const nowDate = new Date()
//         if(nowDate.getHours()<11){
//             resolve("Good Morning")
//         }
//         reject(" ERR -- Good Afternone")
//     })

// .then(data => {document.getElementById("printPromise1").innerText = data})
// .catch(err => {document.getElementById("printPromise1").innerText = err})
// }
// let btn = document.createElement("button")
// btn.innerText = "Click"
// document.body.append(btn)
// btn.addEventListener("click",() => {getDatePromies()})


// function getModoloPromies(num1,num2){
//     return new Promise((resolve,reject) => {
//         if(num2 % num1 == 0){
//             resolve("Yes")
//         }
//         reject("No")
//     })
// .then(data => {document.getElementById("printPromise1").innerText = data})
// .catch(err => {document.getElementById("printPromise1").innerText = err})
// }
// let btn = document.createElement("button")
// btn.innerText = "Click"
// document.body.append(btn)
// btn.addEventListener("click",() => {getModoloPromies(3,6)})


// function getNumInArrPromies(num, numsArray){
//     return new Promise ((resolve,reject) =>   {
//         let res =0
//         numsArray.forEach(item => {
//             if(item == num){
//                 res++
//             }
//         });
//         if(res != 0){
//             resolve("Yes")
//         }
//         reject("No")
//     })
// .then(data => {document.getElementById("printPromise1").innerText = data})
// .catch(err => {document.getElementById("printPromise1").innerText = err})
// }

// let btn = document.createElement("button")
// btn.innerText = "Click"
// document.body.append(btn)
// btn.addEventListener("click",() => {getNumInArrPromies(42, [0,45,7,8,99,7,12,1,5])})


// function promieseFunc(){
//     return new Promise((resolve,reject) => {
//         clickMe.disabled = true;
//         loading.innerHTML = "<img style = 'width:20vw' src ='/gif/loading.gif'/>"
//         setTimeout(() => {
//             const rnd = Math.floor(Math.random()*4)
//         if(rnd ==3){
//             resolve("hello" + rnd)
//         }
//         reject(rnd)
//         }, 5000)

//     });
// }

// function playPromies(){
//     promieseFunc()
//     .then((data) => {document.getElementById("printPromise1").innerText = data})
//     .catch((err) => {alert(err)})
//     .finally(() => {
//         loading.innerHTML = "";
//         clickMe.disabled = false;
//     })
// }

// async function asyncFunc(){
//     try {
//         await promieseFunc()
//         .then(data => console.log(data))
//     }
//     catch (error) {
//         alert(error)
//     }
//     finally{
//         loading.innerHTML = ""
//         clickMe.disabled = false
//     }
// }

// 8.
// async function myFirstCatchTry(){
//     try{
//         await getNumInArrPromies(1, [0,45,7,8,99,7,12,1,5])
//         .then(data =>{console.log(data)})
//     }
//     catch(err){
//         alert(err)
//     }
// }
// myFirstCatchTry()


// async function myFirstFetch(){
//     loading.innerHTML = "<img style = 'width:20vw' src ='/gif/loading.gif'/>"
//     try{
//         await fetch("https://moviesmern.herokuapp.com/movies/all")
//         .then(data => {console.log(data)})
//     }
//     catch(err){
//         alert(err)
//     }
//     finally{
//         btn.disabled = false
//         loading.innerHTML = ""
//     }
// }
// let btn = document.createElement("button")
// btn.innerText = "Click"
// document.body.append(btn)
// btn.addEventListener("click",() => {myFirstFetch()})

// async function fetchCat(){
//     loading.innerHTML = "<img style = 'width:20vw' src ='/gif/loading.gif'/>"
//     try{
//         await fetch("https://cat-fact.herokuapp.com/facts")
//         .then(data => {console.log(data)})
//     }
//     catch(err){
//         alert(err)
//     }
//     finally{
//         btn.disabled = false
//         loading.innerHTML = ""
//     }
// }

// let btn = document.createElement("button")
// btn.innerText = "Click"
// document.body.append(btn)
// btn.addEventListener("click",() => {fetchCat()})

// async function fetchPlace(){
//     loading.innerHTML = `<img style = 'width:20vw' src ='/gif/loading.gif'/>`
//     try{
//         await fetch("https://placekeanu.com")
//         .then(data => {document.getElementById("printPromise1").innerText = data})
//     }
//     catch(eror){
//         document.getElementById("printPromise1").innerText = eror
//     }
//     finally{
//         btn.disabled = false
//         loading.innerHTML = ""
//     }
// }
// let btn = document.createElement("button")
// btn.innerText = "Click"
// document.body.append(btn)
// btn.addEventListener("click",() => {fetchPlace()})

let res;
async function fetchAnime(){
    
    loading.innerHTML = `<img style = 'width:20vw' src ='/gif/loading.gif'/>`
    try{
        await fetch("https://api.jikan.moe/v4/anime")
        .then(response => {return response.json()}).then(res => {console.log(res.data)
        document.getElementById("printPromise1").innerText =`${res.data.length}`})

}  
  catch(err){
        alert("somthing went wrong")
    } 
    finally{
        btn.disabled = false
        loading.innerHTML = ""
    }

}
let btn = document.createElement("button")
btn.innerText = "Click"
document.body.append(btn)
btn.addEventListener("click",() => {fetchAnime()})
