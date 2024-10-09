// now make a function
// now i'm going to make a fake array of object
// now see carefully
var objUser = [
  {
    username: "Himanshu Pal",
    password: "123@Himanshu",
  },
  {
    username: "ashu",
    password: "123@ashu",
  },
  {
    username: "monty",
    password: "123@monty",
  },
];

function getInfo() {
  var username = document.getElementById("user").value;
  var password = document.getElementById("password").value;

  for (i = 0; i < objUser.length; i++) {
    //get the length of user
    if (username == objUser[i].username && password == objUser[i].password) {
      //math username or password
      console.log(username + "is logged in");

      alert("User Login Successfully ✅");
      return; //break the loop
    }
  }
  alert("incorrect username or password ❌");
  console.log("incorrect username or password");
}
