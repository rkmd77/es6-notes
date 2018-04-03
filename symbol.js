// var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
//     return typeof e
// } : function(e) {
//     return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
// };

// Symbol
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

{
let a1 = Symbol();
let a2 = Symbol();
console.log(a1===a2);


let a3 = Symbol.for('a3');
let a4 = Symbol.for('a3');
console.log(a3===a4)
// 两者的区别for会先检查是否在全局注册过，如果注册过就调用，没注册再for a3是key值

}

{
    let a1=Symbol.for('abc');
    let obj={
      [a1]:'123',
      'abc':345,
      'c':456
    };
    console.log('obj',obj);

    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);
      }
      Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]);
      })
      Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownkeys',item,obj[item]);
      })

}