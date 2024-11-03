function x() {
    var i = 1;
    setTimeout(function () {
        console.log(i);
    }, 3000);
    console.log("Namaste JS ");
}

// x();


// JS doesn't wait for anyone even for setTimeout as well it wont wait 
// setTimeout is kept in a side Stack and put into the Call stack once its ready to execute


// function y() {
//     for (var i = 1; i <= 5; i++){
//         setTimeout(function () {
//             console.log(i);
//         } , i *1000 )
//     }
// }

// y();


// function y() {
//     for (let i = 1; i <= 5; i++){
//         setTimeout(function () {
//             console.log(i);
//         } , i *1000 )
//     }
// }

// y();


function y() {
    for (let i = 1; i <= 5; i++){
        function close(i) {
            setTimeout(function () {
                console.log(i);
            } , i *1000 )
        }
        close(i);
    }
}

y();