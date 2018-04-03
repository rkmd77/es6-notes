{
    let gen = function* (){
        yield 'a';
        yield 'b';
        return 'c'
    };
    let gene = gen();
    console.log(gene.next());
    console.log(gene.next());
    console.log(gene.next());
    console.log(gene.next());
}


{
    let obj ={};
    obj[Symbol.iterator] = function* (){
        yield 1;
        yield 2;
        yield 3;
    }
    for(let val of obj){
        console.log(val);
    }


}
{
    let state = function* (){
        while(1){
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();

    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());



}

{
    // let state = async function(){
    //     while(1){
    //         await 'A';
    //         await 'B';
    //         await 'C';
    //         await 'D';
    //     }
    // }
    // let status = state();
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());
    // console.log(status.next());

}
{
    let ajaxXhr = function* (){
        yield new Promise((resolve, reject) => {
               setTimeout(function() {
                    resolve('ok')
               }, 200); 
        });
    }

    let pull = function(){
        let ajaxFunc = ajaxXhr()
        let gen = ajaxFunc.next();
        gen.value.then(val=>{
            if(val=='ok'){
                setTimeout(function() {
                    console.log('i am pulling');
                    pull();  
                }, 1000);
            }else{
                console.log('ok');
            }
        })
    }
    pull()
}