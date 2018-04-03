{
    // map vs array
    let map = new Map()
    let arr = [];
    // 增
    map.set('add',1);
    arr.push({add:1 })
    console.log(map, arr)
    // 查    
    console.log(map.has('add'))
    console.log(arr.find( item => item.add))    
    // 改
    map.set('add',2);
    arr.forEach( item =>item.add?item.add=2 :'');
    console.log(map, arr)
    // 刪
    map.delete('add');
    let index = arr.findIndex( item => item.add);
    arr.splice(index, 1);
    console.log(map, arr)

}
{
    // set vs arr
     
     console.log('// map vs array')
     let set = new Set()
     let arr = [];
    // 增
     set.add({add:1});
     arr.push({add:1})
     console.log(set, arr)
     // 查    
     console.log(set.has({add:1}))
     console.log(arr.find( item => item.add))  
     // 改
     set.forEach( item => item.add?item.add=2:'')
     arr.forEach( item => item.add?item.add=2 :'');
     console.log(set, arr)
     // 刪
     set.forEach(item => item.add? set.delete(item):'');
     console.log(set, arr)
}


{
    // map, set ,vs obj

    let item = {add:'1'}
    let map = new Map();
    let set = new Set();
    let obj = {};

    map.set('add','1');
    set.add(item);
    obj['add']=1;

    console.log(map, set, obj);

    console.info({
        a:map.has('add'),
        b:set.has(item),
        c:'add' in obj

    })
    // 改
    obj['add']=2;
    map.set('add','2');
    item.add=2;
    set.add(item);    
    console.log(map, set, obj);


    // 删除
    map.delete('add');
    set.delete(item);
    delete obj['add']
    console.log(map, set, obj);
}