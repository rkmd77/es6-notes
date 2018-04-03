{
Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]
Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
Array.of();    // []
Array.of(undefined); // [undefined]
}
// Polify
{
    if (!Array.of) {
    Array.of = function() {
      return Array.prototype.slice.call(arguments);
    };
  }
}
//   Array.prototype.slice
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
{
    if(!Array.of){
        Array.of = function(){
            return A
        }
    }
}


// Array.from 
// array-like objects (objects with a length property and indexed elements) or
// iterable objects (objects where you can get its elements, such as Map and Set).

{
    let arr = document.querySelectorAll('p');
    let arrEle = Array.from(arr);
    arrEle.forEach( item=> {
        console.log(item.textContent)
    })
}
{
    Array.from([1, 3, 5], (item, index) => {
        console.log(item, val)
    })
}

{
    // Array.fill()和slice的用法差不多
    // Array.slice(val)
    // Array.slice(val, start)
    // Array.slice(val, start, end)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
    [].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}
    // https://segmentfault.com/q/1010000005847475
    // https://segmentfault.com/a/1190000004450221
 
}

{
    
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index);
    }
    for(let value of ['1','c','ks'].values()){
        console.log('values',value);
    }
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('values',index,value);
    }
      
}

{
    // copyWithin
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin
}
{
    // Array.find()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // Array.findIndex()
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
}

{
         // arr.includes(searchElement)
         // arr.includes(searchElement, fromIndex)
        console.log('number',[1,2,NaN].includes(1));
        console.log('number',[1,2,NaN].includes(NaN));
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
}

{

    // apply and call
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

}
