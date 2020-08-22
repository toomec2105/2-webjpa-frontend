import { getAPIDataAsJsObjects } from './utils/api-data-fetcher';
//console.log(okGame("Football")); //js import  test
console.log("start again");
//let usersArr = getAPIDataAsJsObjects("http://localhost:8080/users/");



console.log("this should be the end");

let getAll = document.getElementById("find-users-btn");
let display = document.getElementById("display");

getAll.addEventListener("click", function () {
    getAllUsersFromAlreadyFetchedData();
    //getAllUsersFromApi();
     // -------------------------------------------
    // let allUsers = getAllUsersFromFetchedData()
    // console.log("Will be undefined because getAllUsersFromApi is async : ",allUsers);
});

function User(id, email, password, role, username) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
    this.username = username;

}

function getAllUsersFromAlreadyFetchedData() {
    let fetchedData = [{ "id": 1, "email": "john@gmail.com", "password": "john123", "role": "ADMIN", "username": "John Brown" }, { "id": 2, "email": "alice.white@gmail.com", "password": "alice9999", "role": "USER", "username": "Alice White" }, { "id": 3, "email": "johnson@zoho.com", "password": "john123", "role": "USER", "username": "Ben Johnson" }, { "id": 4, "email": "mike@gmail.com", "password": "mike666", "role": "ADMIN", "username": "Mike Scott" }, { "id": 5, "email": "jennifer@onet.pl", "password": "jenny000", "role": "USER", "username": "Jennifer Smith" }, { "id": 6, "email": "caren@onet.pl", "password": "caren3434", "role": "USER", "username": "Caren Brown" }, { "id": 7, "email": "darek@gmail.com", "password": "darek666", "role": "ADMIN", "username": "Darek Scott" }];
    console.log('Showing data saved in a string without calling api: ', data);
   
    fetchedData.forEach(userJson => {
        // console.log(userJson.username);
        let para = document.createElement("p");
        para.innerText = userJson.username;
        display.appendChild(para);
    });

}


function getAllUsersFromApi() {


    fetch('http://localhost:8080/users/', {
        method: 'GET', // or 'PUT'
        headers: {
            'Accept': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success. Data fetched from api:', data);
           
            /* 
            this should be replaced with the code from getAllUsersFromFetchedData()
            data.forEach(userJson => {
                console.log(userJson.username);
              
            });

             */

              //return data;  Best solution but we don't know how to handle this async call. Promises?!
        })

        .catch((error) => {
            console.error('Error is:', error);
        });
}