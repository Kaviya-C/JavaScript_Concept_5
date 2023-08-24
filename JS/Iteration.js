let names=['heena','java','html','csytyts','js'];

let res=names.find(myFunc);
console.log(res);


function myFunc(value){
 return value.length>5;
}


const ar=Array.from("KaviyaC");
console.table(ar);