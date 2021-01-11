//Intro 

navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
});
 console.log('done');


 //Some Async functions we might already looked at

 window.addEventListener("load", () => {
    alert("page has loaded")
 })

 const img1 = document.getElementById("myImg")

 img1.addEventListener("load", () => {
     alert("Image has loaded")
 })

 //// *** set timeout Async

 function myFunction ()
//  {
//      setTimeout(() => {
//          alert ("Hello there")
//      }, 3000);
//  }

//intro to callback hell

 window.addEventListener("load", () => {
    console.log("page has loaded")
    console.log("done")
    console.log("done")
 })

// //Callback hell example

navigator.geolocation.getCurrentPosition(position => {
    // console.log(position);
    anotherFunction(position, restaurant => {
    // console.log(position);
    // console.log(restaurant);
            //issues with this:
            //what if there was an error on top?
            //we get no details of the execution
            // no control program

    })
});
 console.log('done');



//How can we fix callback hell?? 

//Restaurant example
    ///some promises that can take place
    /// 1) Pending (waiting to be seated, walking to the restaurant while the food is being prepared)
    // 2) Fulfilled (once it ready, you can do as you wish)
    // 3) Rejected 

    //creates a constructor function 
    const promise = new Promise ((resolve, reject) => {

        setTimeout(() => resolve ('done'), 1000)

        setTimeout(() => reject (Error('Promise failed')), 1000)

    })
    console.log(promise)

    //question: what can we do next after, "resolve" and "reject" are being used in the callback?

    promise.then().catch()
    //looking up, when resolve is called, the code will execute "then" function 
    //if reject is called, the code will execute the "catch" part


    // Gabriel's example
    const thepromise = new Promise((resolve, reject) => {
        let connection = true
        if (connection){
            resolve('it works')
        } else {
            reject('failed')
        }
    });

    thepromise.then((msg) => {
        console.log(msg);
    }).catch((msg) => {
        console.log(msg)
    })

//     // Jacob's approach 
    const promise1 = new Promise((resolve, reject) => {
        resolve('Success!')
        reject('failed')
    });
    
    promise1
    .then((value) => { console.log(value) })
    .catch((fail => { console.log(fail) }))


//     //Fahad's example 

    const promise = new Promise ((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position); 
            //we know that when we get the position, our promise was able to resolve successfully 
            //therefore we can pass position into resolve
            resolve(position)
            
            //but what if it failed?
          }, error => {
              reject(error)
          }); 
    })

    //now we can use method chaining 
promise
.then(position => console.log(position))
.catch(error => console.log(error))
.finally(() => console.log("done"))



//*****/ APIs

//a simple GET request

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    // we get a response and then we use to convert the response into json data

    .then(data => console.log(data))


    // // /////this is our object where we would be making our POST request
    const blogPost = {
        title: "Cool post",
        body: "lkajsdflkjasjlfda",
        userId: 1  
      }

    //   //How can we make a POST request?
      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(blogPost)
      })
      .then(response => response.json())
      .then(data => console.log(data))



    /////But what if we have a problem with our GET request??
    
    fetch('https://jsonplaceholder.typicode.com/pots/1')
    .then(response => response.json())
    .then(data => console.log(data))
      //fetch promise will result in an object even if it fails 

    .catch(error => console.error(error))   

    // //we have to define what error is 


    fetch('https://jsonplaceholder.typicode.com/pots/1')
        .then(response => {
            // response.ok // status of 200 if OK

        if (!response.ok) {
             //when response is not OK 
             throw new Error ("Error!!")

          }

          return response.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))



    



