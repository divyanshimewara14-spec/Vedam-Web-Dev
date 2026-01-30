let a = 10;//global scope

function test() {
    let b = 20;//functional scope
    if (true) {
        let c = 30;//block scope
    }
    console.log(b);//20
    console.log(c);//Error
    console.log(a);//10
}

test();