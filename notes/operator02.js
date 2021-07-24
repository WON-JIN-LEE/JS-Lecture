//false : 0 , -0, '' , null, undefined
// true : -1,  'hello' ,  [], 

let num=9;
if (num) {
    console.log("true");
}else{
    console.log("false");
}

num && console.log(num);