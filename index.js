let menubar =document.getElementById("menubar")
let list =document.getElementById("display")
const menu = () =>{
    list.classList.toggle("block")
}
// 
let flag =0;
let get =document.getElementById("getone")
const plus =() =>{
    if(flag>=5){
        alert("SORRY STOCK ITEMS NOT AVALIBLE ")
        flag=0;

    }

    flag +=1
    get.innerText =flag
}
const minus =() =>{
    if(flag<=0){
        flag=1;
    }
    flag -=1
    get.innerText =flag
}

let count =0;
let gettwo =document.getElementById("get")
const plustwo =() =>{
    if(count>=5){
        alert("SORRY STOCK ITEMS NOT AVALIBLE ")
        count=0;

    }
    count +=1
    gettwo.innerText =count
}
const minustwo =() =>{
    if(count<=0){
        count=1;
    }
    count -=1
    gettwo.innerText =count
}
let num =0;
let getthree=document.getElementById("gethree")
const plusthree =() =>{
    if(num>=5){
        alert("SORRY STOCK ITEMS NOT AVALIBLE ")
        num=0;

    }
    num +=1
    getthree.innerText =num
}
const minusthree =() =>{
    if(num<=0){
        num=1;
    }
    num -=1
    getthree.innerText =num
}
let firstresult =document.getElementById("one")
let secondresult =document.getElementById("second")

let thirdresult =document.getElementById("third")

let array =new Array()
const checkone =() =>{

    let getvalue=document.getElementById("getone").innerText;
    let convert =Number(getvalue)
    let resultone=50*convert;
    firstresult.innerText=resultone
array[0]=resultone
totalamount(array[0])

}

const checktwo =() =>{
   
    let getvalue=document.getElementById("get").innerText;
    let convert =Number(getvalue)
     let resulttwo=70*convert;
    secondresult.innerText=resulttwo
array[1]=resulttwo
totalamount(array[1])
}

const checkthree =() =>{
        
    let getvalue=document.getElementById("gethree").innerText;
    let convert =Number(getvalue)
   let  resultthree= 56*convert;
    thirdresult.innerText=resultthree
array[2]=resultthree
totalamount(array[2])
}


let text =document.getElementById('total')
let sum =0
const totalamount =() =>{
let text =document.getElementById('total')
let sum =0
const totalamount =() =>{
   let check = array.reduce((accumalator,curelement)=>{
      return  accumalator +=curelement
        
   });
   text.innerText=check
}   

}   




// const firstremove =()=>{
//     let totalitems =totalamount()
//     let getfirst=document.getElementById("getone").innerText;
//     let number =Number(getfirst)
//     let multi;
//     switch (number) {
//         case 4:
//              multi =50*1
//             totalitems=totalitems-multi
//             text.innerText=totalitems
//             firstresult.innerText=totalitems
//             break;
//             case 3:
//                 multi =50*2
//                 totalitems=totalitems-multi
//                 text.innerText=totalitems
//                 firstresult.innerText=totalitems
//                 break;
//                 case 2:
//                     multi =50*3
//                     totalitems=totalitems-multi
//                     text.innerText=totalitems
//                     firstresult.innerText=totalitems
//                     break;
//                     case 1:
//                          multi =50*4
//                         totalitems=totalitems-multi
//                         text.innerText=totalitems
//                         firstresult.innerText=totalitems
//                         break;
    
//         default:
//             totalitems=totalitems-50;
//             text.innerText=totalitems
//             firstresult.innerText=totalitems
//             break;
//     }
// }




let lists=document.getElementsByClassName("list-1")
const display=(a) =>{
    let common =document.getElementsByClassName("common")
    for(let d  of common){
        d.style.display="none"
    }
    for(let x  of lists){
        x.style.borderBottom ="none"
    }
    common[a].style.display="block"
    lists[a].style.borderBottom = "4px solid tomato"

}




// ---------------for contact page
document.querySelector("#form").addEventListener("submit" ,call);
let name =document.getElementById('name');
let email =document.getElementById('email');
let password =document.getElementById('current-password');
let textarea =document.getElementById('message'); 
textarea.onclick =font;
function font(){
      textarea.setAttribute("style" ,"font-size:18px");
     
} 
function call(){
    if(name.value==""){
        alert('please fill name');
    }
    else if(email.value==""){
        alert('please fill email');
    }
    else if(password.value==""){
        alert('please enter your password');
    }
    else if(textarea.value==""){
        alert('please fill any message');
    }
    else {
        alert('your Message was successfully submit');
    }

}
