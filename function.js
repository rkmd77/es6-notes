// Rest parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// about this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work
// 
{

function multiply(multiplier, ...theArgs){
    return theArgs.map( item => {
        return multiplier * item
    })

}
console.log(multiply(3,1,2,3))
}
{
    function test(x, y = 'world'){
      console.log('默认值',x,y);
    }
    test('hello');
    test('hello','kill');
  }
  
  {
    let x='test';
    function test2(x,y=x){
      console.log('作用域',x,y);
    }
    test2('kill');
  }
  
  {
    function test3(...arg){
      for(let v of arg){
        console.log('rest',v);
      }
    }
    test3(1,2,3,4,'a');
  }
  
  {
    console.log(...[1,2,4]);
    console.log('a',...[1,2,4]);
  }
  
  {
    let arrow = v => v*2;
    let arrow2 = () => 5;
    console.log('arrow',arrow(3));
    console.log(arrow2());
  
  }
  
  {
    function tail(x){
      console.log('tail',x);
    }
    function fx(x){
      return tail(x)
    }
    fx(123)
  }
  