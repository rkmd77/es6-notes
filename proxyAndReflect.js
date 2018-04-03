// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

{

let obj = {
    name:'John Snow',
    age:20,
    _skill:'sword',
    girlFriend:'The Mother Of Dragon'
}
let ctl = new Proxy(obj, {
    get(target, key){
           return key =='name'? target[key]:'you can only get Johns name'
    },
    set(obj, prop, value){
        if(prop=='age'){
            if(!Number.isInteger(value)){
                throw new TypeError('age is not a integer')
            }
            if(value > 30){
                throw new TypeError('snow cant 30+')
            }
        }
        obj[prop] = value;
        return true;

    },
    ownKeys(target) {
        return Object.keys(target).filter( item => item!='_skill')
      },
      deleteProperty(target, property) {
          if(property!=='girlFriend'){
              delete target[property]
              return true
          }else{
              throw TypeError('you cant split dragon and snow up')
          }
    }


})
obj.name='fuck'
console.log(ctl.age)
console.log(ctl.name)
ctl.age =28;
console.log(obj)
console.log(Object.keys(ctl))
delete ctl._skill;
console.log(ctl);
delete ctl.girlFriend;
}

{
    let obj = {
        name:'John Snow',
        age:20,
        _skill:'sword',
        girlFriend:'The Mother Of Dragon'
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect


}
{
    // example
     function monitorSnow(target, validator){
        return new Proxy(target,{
            _validator:validator,
            set(obj, prop, value){
                if(target.hasOwnProperty[prop]){
                    let va =this._validator[prop]; 
                    if(!!va(value)){
                        return Reflect.set(obj, prop, value)
                    }else{
                        throw TypeError(`不能设置${prop}到${value}`)
                    }
                }else{
                    throw TypeError('不存在')
                }
            }
        }
           
        )
     }
     const validator ={
         name(val){
            return typeof val === 'string'
         },
         age(val){
            return typeof val === 'number' && val>18
         }
     }

     class Snow{
         constructor(name, age){
            this.name=name;
            this.age=age;
            return monitorSnow(this, validator)
         }
     }


const snow = new Snow('john snow',28);
     snow.name=23;
     console.log(snow)

}