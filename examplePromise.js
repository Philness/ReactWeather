
// //promise case

// var getTempPromise = function(location){
//     return new Promise(function(resolve, reject){
//         //let's pretend like there's a delay by using setTimeout
//         setTimeout(function(){
//         //on success, call resolve
//             resolve(75);
//         //on failure, call reject
//             reject("City not found!!");
//             }, 550);
       
//     });
// }

// //getTempPromise is going to wait for data, and then take two functions.  The first is the success branch, the second is the failure branch.
// //promise only runs one time, no matter what.  If it works, it won't try to run the reject branch.
// getTempPromise('Philadelphia').then(
//     function(temp){
//         console.log("Promise has succeeded", temp);
// }, function(error){
//         console.log("promise failed", error);
// });

var addPromise = function (a,b){
    return new Promise(function(resolve,reject){
        console.log("Adding your numbers, this may take a bit...");
        setTimeout(function(){
            //when using typeof, the number has to be in quotes and lowercase.
            if(typeof a === "number" && typeof b === "number"){resolve(a+b);}
            else {reject("One or both of the variables are not numbers.")}
        },1000);
    });
}


var logErrors = (e) => console.error("Failure: " + e);
addPromise(7,"4").then(
    function(total){
        console.log("The two numbers supplied add to", total);
}).catch((error) => logErrors(error))