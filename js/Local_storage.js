"use strict";
let localStore, Users, img, id;


    //to check if any data has been store in in localstorage.
if (localStorage.getItem('localStore') == null){
    localStorage.setItem('localStore', JSON.stringify([]));
}

  // store when submiting the form
    function onSubmitData(){


    //Get a reference to the image element.
var firstName = document.getElementById("fname").value;
var lastName = document.getElementById("lname").value;
var phoneNo = document.getElementById("tel").value;
var eMail = document.getElementById("email").value;
var dp = document.getElementById("upload");
id = new Date().getTime();


    //user stored in object nested in an array.
 Users = { firstname : firstName,
         lastname: lastName,
         tel : phoneNo,
         Email: eMail, id : id, dp : dp
        };

   //stores the string.
    localStore = JSON.parse(localStorage.getItem('localStore'));

    localStore.push(Users); //pushing the data into the array.

    //store the array in local storage.
    localStorage.setItem('localStore', JSON.stringify(localStore));

    }

    // to display data whenever we add
    function retrieve(){    
        localStore = JSON.parse(localStorage.getItem('localStore'));
        let getCol = document.getElementById('listItem');

        for(var i=0; i<localStore.length; i++) {
            
            let showValue = '<div id="secondary"><a><div class="sec-col"><img class="sec-col-img" src="images/Male%20User_100px.png" alt="User"><h1 class="sec-col-1" id="User_1">' +localStore[i].firstname+ ' ' + localStore[i].lastname+ '</h1><h2 class="sec-col-1" id="telephone_1">' +localStore[i].tel+ '</h2><h3 class="sec-col-1" id="Email_1">' +localStore[i].Email+ '</h3></div><figcaption class="col-delete"></button><button onclick="onView('+localStore[i].id+')"  title="view  contact"><li><img src="images/User_20px.png"></li></button><button onclick="onView('+localStore[i].id+')"  title="Edit contact"><li><img src="images/Edit Profile_20px.png"></li></button></a></figcaption></a></div>';

            getCol.innerHTML += showValue;
        }



    }

//retrieve all data list to be deleted
    function retDelDATA(){
     localStore = JSON.parse(localStorage.getItem('localStore'));
            let getDelCol = document.getElementById('deleteItem');

        for (var i=0; i < localStore.length; i++){

    let showDelValue = '<div id="secondary"><div class="sec-col"><img class="sec-col-img" src="images/Male%20User_100px.png" alt="User"><h1 id="User" class="sec-col-1" >' +localStore[i].firstname+ ' ' + localStore[i].lastname+ '</h1><h2 id="telephone" class="sec-col-1" >' +localStore[i].tel+ '</h2><h3 id="Email" class="sec-col-1">' +localStore[i].Email+ '</h3></div><figcaption class="col-delete"><button  onclick="xamarin('+localStore[i].id+')"  title="Delete contact"><li><img src="images/Trash_20px.png"></li></button><button onclick="onView('+localStore[i].id+')"  title="Edit contact"><li><img src="images/Edit Profile_20px.png"></li></button></figcaption></div>';

         getDelCol.innerHTML += showDelValue;

            }
    }


//delete a particular user from the list
function xamarin(id){
   
localStore = JSON.parse(localStorage.getItem('localStore'));
    
        for (var i = 0; i < localStore.length; i++){
          //Argument to check if the id both match.
         if (localStore[i].id == id){
             //pass a function
            confirm('Are you sure you want to delete' + ' ' + localStore[i].firstname + ' ' + localStore[i].lastname);
             
            localStore.splice(i, 1);
              //store the array in local storage.
            localStorage.setItem('localStore', JSON.stringify(localStore));
             location.reload();
             return true;
         }
        
            
            }

     
                    }

//displays none for the edit page.
 let edit = document.getElementById('edit').style.display = "none";

function onView(id){
    //display block then clicked.
let edit = document.getElementById('edit').style.display = "block";
//    edit.style.transition = "";
    localStore = JSON.parse(localStorage.getItem('localStore'));
    //linear search algorithm
    for (let i=0; i < localStore.length; i++){
        //argument
        if (localStore[i].id == id){
    document.getElementById('fname').value = localStore[i].firstname;
    document.getElementById('lname').value = localStore[i].lastname;
    document.getElementById('email').value = localStore[i].Email;
    document.getElementById('tel').value = localStore[i].tel;
    //button to update the current user.
var updateUser = document.getElementById('updateUser');
updateUser.innerHTML = '<div id="col-form">' + '<input type="submit" value="Update" onclick="xenderIt('+localStore[i].id+')">' + '</div>';
            break;
        }
    }
   
}


function xenderIt(id){
   localStore = JSON.parse(localStorage.getItem('localStore'));
    var form = document.getElementById('myForm');
    
    for (let i = 0; i < localStore.length; i++){
        
        if (localStore[i].id == id){
            localStore[i].firstname = form.fname.value;
            localStore[i].lastname = form.lname.value;
            localStore[i].Email = form.lname.value;
            localStore[i].tel = form.telephone.value;
            //stringify it to update the object in the array
            localStorage.setItem('localStore', JSON.stringify(localStore));
            break;
    
        }
    }
    
//   confirm('it is working');
//    confirm(id);
}






//
//// to delete all data from localstorage.
//    let delAll = document.getElementById('delAll');
//    delAll.addEventListener('click', function(){
//        confirm('Do you want to delete all your contact')
//            localStorage.clear();
//            //  reload after deleting all users in the list.
//            location.reload();
//    
//        
//
//        },false);
//
