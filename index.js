// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };

// const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarok!");
//         console.log(error.message);
//     });

/////

// function sumbitData(name, email) {
    
//     return fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify({
//         userName: name,
//         userEmail: email,
//         })
//     })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Error! Try this again!");
//         console.log(error.message);
//     });
// };


// function sumbitData(name, email) {

//     let formData = {
//         name: name,
//         email: email,
//     };

//     let configurationObject = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//         },
//         body: JSON.stringify(formData)
//     };

//     return fetch("http://localhost:3000/users", configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         let newUser = document.createElement('newUser');
//         newUser.textContent = object.id;
//         document.querySelector('body').appendChild(newUser);
//         })
//     .catch(function(error) {
//         let errorMess = document.createElement(errorMess);
//         errorMess.textContent = error.message;
//         document.querySelector('body').appendChild(errorMess);
//         });
// };

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(function(response) {
            return response.json();
         })
    .then(function(object) {
        document.body.textContent = object.id;
        })
    .catch(function(error) {
        document.body.textContent = error.message
        });
};