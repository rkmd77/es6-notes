// Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
{
  let a = 1,
    b = 2;
  let es6 = {
    a,
    b
  };
  console.log(es6);
}

{
  let es6_method = {
    hello() {
      console.log("hello");
    }
  };
}

{
  let a = "b";
  let es6_obj = {
    [a]: "fuck"
  };
  console.log(es6_obj);
}

{
  console.log("字符串", Object.is("abc", "abc"), "abc" === "abc");
  console.log("数组", Object.is([], []), [] === []);
}

{
  var arr = ["a", "b", "c"];
  console.log(Object.keys(arr)); // console: ['0', '1', '2']

  // array like object
  var obj = { 0: "a", 1: "b", 2: "c" };
  console.log(Object.keys(obj)); // console: ['0', '1', '2']

  // array like object with random key ordering
  var anObj = { 100: "a", 2: "b", 7: "c" };
  console.log(Object.keys(anObj)); // ['2', '7', '100']

  // array like object with random key ordering
  var an_obj = { 100: "a", 2: "b", 7: "c" };
  console.log(Object.values(an_obj)); // ['b', 'c', 'a']
}

{       
  // getFoo is property which isn't enumerable
  var myObj = Object.create(
    {},
    {
      getFoo: {
        value: function() {
          return this.foo;
        }
      }
    }
  );
         myObj.foo = 1;
         console.log(Object.keys(myObj)); // console: ['foo']
}


{
    // non-object argument will be coerced to an object
    console.log(Object.values('foo')); // ['f', 'o', 'o']
}
{
    // entries
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

    let arr = {a:1,b:2};
    for(let [key, value] of Object.entries(arr)){
            console.log(key, value)
    }

    Object.entries(arr).forEach( ([key, val]) =>{
        console.log(key + ' ' + val)
    }

    );    
}