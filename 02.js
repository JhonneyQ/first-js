// let a = prompt("ucbucagin ilk terefini yaz");
// let b = prompt("ikinci teref");
// let c = prompt("ucuncu teref");

// if(a==b && b==c){
//     console.log("beaber terefli ucbucag");

// }else if(a==b && b!=c){
//     console.log("berber yanli ucbucag");
// }else{
//     console.log("muxtelif terefli ucbucag");
// }

// let a = +prompt("reqem");
// if(a % 2 == 0){
//     console.log("cutdur");
// }else{
//     console.log("tekdir");
// }

// a = +prompt("ay reqmi");
// switch(a){
//     case(1):
//         console.log("yanvar");
//         break;
    
//     case(2):
//         console.log("fevral");
//         break;

//     case(3):
//         console.log("mart");
//         break;

//     case(4):
//         console.log("aprel");
//         break;

//     default:
//         console.log("olmaz  :3");
//         break;
    
    
// }

// let a = prompt("reqwm");

// let a = prompt("bal")


// if(a >= 91 && a<= 101){
//     console.log("a");
// }else if(a>=81 && a<=91){
//     console.log("b");
// }else if(a>=71 && a<=81){
//     console.log("c");
// }else if(a>=61 && a<=71){
//     console.log("d");
// }else if(a>=51 && a<=61){
//     console.log("e");
// }else{
//     console.log("f");
// }

// let a = +prompt("firs");
// let b = +prompt("seconf");
// let c = +prompt("third");

// let sum = (a+b+c)/3
// console.log(sum)

// let a = prompt("ad");
// let b = prompt(" soyad");
// let fullname = (`${a} ${b}`);
// console.log(fullname);

let emek = prompt("emek haqqi");
let meblegh = prompt("istediyiniz mebleg");
let muddet = prompt("muddet");

if(mebleg <=emek*10 ){
    if(muddet <= 36 && muddet>=24){
        let faiz = 17;
        let faiz2 = console.log(emek*faiz/100);
        console.log(faiz2/muddet);
    }else if(muddet < 24 && muddet>=12){
        let faiz = 15;
    }else if(muddet < 12 && muddet>=0){
        let faiz = 13;
    }else{
        console.log("olmaz")
    }
}else{
    console.log("olmaz")
}
