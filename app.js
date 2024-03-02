


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, get, set, ref, child  } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";



const firebaseConfig = {
    apiKey: "AIzaSyCV195zYdCiejAtlWuDpZwwED5i9lvZcWQ",
    authDomain: "testing-a3e0a.firebaseapp.com",
    databaseURL: "https://testing-a3e0a-default-rtdb.firebaseio.com",
    projectId: "testing-a3e0a",
    storageBucket: "testing-a3e0a.appspot.com",
    messagingSenderId: "147841163827",
    appId: "1:147841163827:web:b69de523d7b11a68d13946"
  };

  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
  let database = firebase.database();
  
  let form = document.querySelector("#registration-form");
  
  // submit event
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonepattern = /^[0-9]+$/;
  
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let gender = document.getElementById("gender").value;
    let work = document.getElementById("work").checked;
    let student = document.getElementById("student").checked;
  
    // function validateMobileNumber(phone) {
    //     let mobileRegex = /^[0-9]+$/;
    //     return mobileRegex.test(phone);
    // }
    //
    // if (!validateMobileNumber(phone)) {
    //     document.getElementById('mobileError').textContent = 'Please enter a valid phone number';
    //     return;
    // }
    //
    // function validateEmail(email) {
    //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailPattern.test(phone);
    // }
    //
    // if (!validateEmail(email)) {
    //     document.getElementById('emailError').textContent = 'Please enter a valid EMail address';
    //     return;
    // }
  
    if (
      emailPattern.test(email) &&
      document.getElementById("password").value.length >= 8 &&
      phonepattern.test(phone)
    ) {
      console.log("Valid email:");
      let formData = {
        name: name,
        phone: phone,
        email: email,
        password: password,
        gender: gender,
        work: work,
        student: student,
      };
      let userData = JSON.parse(localStorage.getItem("userData")) || [];
      userData.push(formData);
  
      localStorage.setItem("userData", JSON.stringify(userData));
  
      database
        .ref("form-data")
        .push(formData)
        .then(function () {
          form.reset();
          console.log("Form data saved successfully");
          alert("Form data saved successfully");
        })
        .catch(function (error) {
          console.error("Error saving form data:", error);
        });
      form.reset();
    } else {
      // if(document.getElementById("password").length < 8){
      //     alert("invalid password")
      // }
      // if(emailPattern.test(email)===false){
      //     alert("invalid email")
      // }
      alert("invaid input");
    }
    // push data in firebase
  });