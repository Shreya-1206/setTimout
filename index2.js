// using let

function x() {
    let a = 10;
    for (let i = 0; i < 6; i++){
        setTimeout(function () {
            console.log(i, a);
        }, i * 1000)
    }
    console.log("Hello setTimeout function will run after this 😁");
}

x();