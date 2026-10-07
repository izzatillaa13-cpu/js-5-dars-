// let a = ""
// for (let i = 0; i < 5; i++) {
//    a = a + "🌎"
//     console.log(a)
// }


// let number = +prompt("son kiriting !")
// let chess = ""
// for (let i = 0; i < number; i++) {
//     for (let j = 0; j < number; j++) {
//         if (i % 2 == 0 && j % 2 == 1 || i % 2 == 1 && j % 2 == 0) {
//             chess = chess + "⬛"
//         }
//         else {
//             chess = chess + "⬜"
//         }
       
//     }
//      console.log (chess)
//         chess = " "
// }




let number = +prompt("son kiriting")

for (let i = 0; i < number; i++) {

    let chess = ""
    for (let j = 0; j < number; j++) {
        if (i == 0 || i == number - 1 || j == 0 || j == number - 1 || i == j) {
            chess = chess + "⬛"
        } 
        else {
            chess = chess + "⬜"
        }
    }
    console.log(chess)
}

