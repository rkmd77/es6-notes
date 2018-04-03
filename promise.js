// http://es6.ruanyifeng.com/#docs/promise
// http://www.jianshu.com/p/b497eab58ed7
// http://web.jobbole.com/82601/
// http://imweb.io/topic/57a0760393d9938132cc8da9
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

{
    var p = new Promise((resolve, reject) => {
           if(true){
               console.log('1');
               resolve('true')
               console.log('2');
           }else{
               reject('failed')
           }   
           console.log('3');           
    });
    p.then(
        val =>{
            console.log('success');
        },
        err =>{
            console.log('error');
        }
    )
}
{
    console.log('this block end')
    function test(second){
        return new Promise((resolve, reject) => {
            setTimeout(resolve('good'), second,'parama1');
        });
    }
    test(100).then(
        val =>{
            console.log('success');
        }
    )
    
}
{
// then方法指定的回掉函数，会在当前脚本同步全部执行完毕再执行

let promise = new Promise((resolve, reject) => {
        console.log('1');
        resolve('2')
});
promise.then(val=>{
    console.log('4');
    console.log('block end');
})
console.log('3');

}
{
    // 如果resolve的参数是另一个promise 那么当前promise取决于 参数了
    //  resolved 的 Promise 是在本轮事件循环的末尾执行，总是晚于本轮循环的同步任务。
    let p1 = new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log('p1');
                reject('fuck') 
                console.log('p3'); 
            }, 3000);
    });
    let p2 = new Promise((resolve, reject) => {
            setTimeout(function() {
                console.log('p2');
                  resolve(p1)  
            }, 1000);
    });
    p2.then(val=>{
        console.log('success');
    }).catch(err=>{
        console.log(err);
    })

}
{
    // 调用resolve或reject以后，Promise 的使命就完成了,加return 会阻止后续执行
     new Promise((resolve, reject) => {
       return resolve(1);
       console.log('i will not be excuted'); 
    });
}

{
    // then 有可能返回的还是一个Promise对象
    // 一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法。
  
    var someAsyncThing = function() {
        return new Promise(function(resolve, reject) {
          // 下面一行会报错，因为x没有声明
          resolve(x + 2);
        });
      };
      
      someAsyncThing().then(function() {
        console.log('everything is great');
      });
}
{
      // catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。
      var someAsyncThing = function() {
        return new Promise(function(resolve, reject) {
          // 下面一行会报错，因为x没有声明
          resolve(x + 2);
        });
      };
      
      someAsyncThing().then(function() {
        console.log('everything is great');
      }).catch(err=>{
          console.log(err);
      }).then(()=>{
          console.log('catch then carry on');
      });
}

{
    // 如果p2报错，但是已经有catch方法了，就会返回新的promise实例,状态是resolve的，那么Pomise.all就都是resolve了
    let p1 =  new Promise((resolve, reject) => {
        resolve('hello')
    });
    let p2 =  new Promise((resolve, reject) => {
        reject('err')
    }).catch(err=>
    {
        console.log(err); 
    });

    Promise.all([p1, p2]).then( val=>{
        console.log(val);
    }).catch(err=>{
        console.log(err);
    })
}
{
    // Promise.resolve()
    let thenable = {
        then:(resolve, reject)=>{
            resolve('ok')
        }
    }
    Promise.resolve(thenable).then(val=>{
        console.log('ok');
    })

}
{
    setTimeout(function() {
        console.log(3);
    }, 0);
    Promise.resolve().then(val=>{
        console.log(2);
    })
    console.log(1);
}