// mdn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// 数组解构赋值

    
{
    let a, b, rest;
    [a, b, ...rest] = [1,2,3,4,5,6];
    console.log(a, b, rest)
}

{
    function f(){
      return [1,2]
    }
    let a,b;
    [a,b]=f();
    console.log(a,b);
  }

{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
  }

// 对象解构赋值

{
    let a, b, c, rest;
    ({a, b, c=60, ...rest} = {a: 10, b: 20, c: 30, d: 40});
    console.log(a, b, c, rest)
}



// 字符串解构赋值





// 布尔值解构赋值





// 函数参数解构赋值
{

    function userId({id}) {
        return id;
      }
      
      function whois({displayName, fullName: {firstName: name}}) {
        console.log(displayName + ' is ' + firstName);
      }
      
      var user = { 
        id: 42, 
        displayName: 'jdoe',
        fullName: { 
            firstName: 'John',
            lastName: 'Doe'
        }
      };
      
      console.log('userId: ' + userId(user)); // "userId: 42"
      whois(user); // "jdoe is John"
}


// 数值解构赋值


{
    let metaData={
      title:'abc',
      test:[{
        title:'test',
        desc:'description'
      }]
    }
    let {title:titleVal, test:[{desc:descVal}]} = metaData;
    console.log(titleVal, descVal)
  }


  {
    function f() {
        return [1, 2, 3];
      }
      
      var a, b; 
      [a, , b] = f(); 
      console.log(a); 
      console.log(b); 
  }

  {
    let people = [
        {
          name: 'Mike Smith',
          family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
          },
          age: 35
        },
        {
          name: 'Tom Jones',
          family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
          },
          age: 25
        }
      ];

        for(let {name:nameVal, family:{father:faVal}}of people){
            console.log(nameVal, faVal)
        }

  }

 

//   其它

{
    let z = 'fuck';

    let { [z]:foo} = {fuck:'fuck'}

    console.log(foo)
}

// 对象解构赋值 一般等号的右边大多为 真正的对象 等号左边，是笔者需要赋值的变量较多。