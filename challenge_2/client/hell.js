// var requests = {
//     initialize: () => {
//         $('#btn').on('click', requests.appOnPost);
//         requests.appOnGet
//     },
//     appOnGet: (data) => {
//         $.ajax({
//             url: '/upload_json',
//             method: 'GET',
//             success: data => {
//                 console.log(';',data)
//             },
//             error: () => {
//                 console.log("no no no");
//             }
//         })

//     },
//     appOnPost: (e) => {
//         e.preventDefault()
//         var data = $('textarea').val()
//         console.log(data)
//         $.ajax({
//             url: "/upload_json",
//             method: "POST",
//             contentType: "application/json",
//             data: data,
//             success: () => {
//                 app.onGet();
//             }
//         });
//         $("textarea").val("");
//     }
// }
// $(document).ready(requests.initialize);
// const fs = require("fs");

// fs.readFile('test.csv',(err, data)=> {
//     console.log(data)
// })
