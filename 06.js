// function funk(a,b){
//     c = a.split(" ") 
//     for (let index = 0; index < c.length; index++) {
//         if (b == c[index]) {
//             return index
//         }
     
//     }
    
// }

// 


// function nam(a) {
//     b = a.split(" ")
//     c = b[0]
//     for (let index = 0; index < b.length; index++) {
//         if(b[index].length>c.length){
//             c= b[index]
//         }
        
//     }
//     return c
// }

// console.log(nam("salam dostlar"))


function rap(a, b) {
    c =  a.split("").sort().join("")
    d =  b.split("").sort().join("")
    if(c==d){
        return true
    }else{
        return false
    }
}

console.log(rap("listen", "silent")); 

