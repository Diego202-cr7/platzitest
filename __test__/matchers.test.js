

describe('comparadores comunes', ()=>{
    const user= {
        name: "Diego",
        lastname: "barajas"
    }
     const user2 ={
        name: "Diego",
        lastname: "barajas"
     }
test('igualdad de elementos', () =>{

expected(user).toEqual(user2);

});

});