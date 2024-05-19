function x() {
    for (var i = 0; i < 6; i++){
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    }
    console.log("Hello setTime function will run after this 😁")
}

/// here we saw in debugger that i value was kept on changing because of its same memory space 
x();
