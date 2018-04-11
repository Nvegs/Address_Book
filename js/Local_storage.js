//various function.
// Author: NVEGS
//javascript basics Alc 2.0

//global variable.

let localStore;
var Users;
var img;
var id;


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
 


function viewData(){
   
localStore = JSON.parse(localStorage.getItem('localStore'));
    
//        for (var i = 0; i < localStore.length; i++){
//          //Argument to check if the id both match.
//         if (localStore[i].id == id){
////             //pass a function
////               
////     document.getElementById('User').innerHTML = localStore[i].firstname + ' ' + localStore[i].lastname;
////             
////    document.getElementById('telephone').innerHTML = localStore[i].tel;
////    
////     document.getElementById('Email').innerHTML = localStore[i].Email;         

//          
//     
//        }
//   
//}
            console.log(id);
//            console.log(localStore[i].id);

}













    // to display data whenever we add
    function retrieve(){
        localStore = JSON.parse(localStorage.getItem('localStore'));
        let getCol = document.getElementById('listItem');

        for(let i=0; i<localStore.length; i++) {
            let showValue = '<div id="primary"><a href="view_contact.html"><div class="sec-col"><img class="sec-col-img" src="images/Male%20User_100px.png" alt="User"><h1 class="sec-col-1" id="User_1">' +localStore[i].firstname+ ' ' + localStore[i].lastname+ '</h1><h2 class="sec-col-1" id="telephone_1">' +localStore[i].tel+ '</h2><h3 class="sec-col-1" id="Email_1">' +localStore[i].Email+ '</h3></div></a></div>';

            getCol.innerHTML += showValue;
        }



    }

//retrieve all data list to be deleted
    function retDelDATA(){
            localStore = JSON.parse(localStorage.getItem('localStore'));
            let getDelCol = document.getElementById('deleteItem');

            for (let i=0; i < localStore.length; i++){

    let showDelValue = '<div id="secondary"><div class="sec-col"><img class="sec-col-img" src="images/Male%20User_100px.png" alt="User"><h1 id="User" class="sec-col-1" >' +localStore[i].firstname+ ' ' + localStore[i].lastname+ '</h1><h2 id="telephone" class="sec-col-1" >' +localStore[i].tel+ '</h2><h3 id="Email" class="sec-col-1">' +localStore[i].Email+ '</h3></div><figcaption class="col-delete"><button href="Delete_contact.html" onclick="xamarin('+localStore[i].id+')"  title="Delete contact"><li><img src="images/Trash_20px.png"></li></button><a href="Edit_contact.html" title="Edit contact"><li><img src="images/Edit%20Profile_20px.png"/></li></a></figcaption></div>';

         getDelCol.innerHTML += showDelValue;

            }
    }








// to delete all data from localstorage.
        let delAll = document.getElementById('delAll');
        delAll.addEventListener('click', function(){
        localStorage.clear();
//  reload after deleting all users in the list.
            location.reload();
        },false);





//delete a particular user from the list
function xamarin(id){
   
localStore = JSON.parse(localStorage.getItem('localStore'));
    
        for (var i = 0; i < localStore.length; i++){
          //Argument to check if the id both match.
         if (localStore[i].id == id){
             //pass a function
             window.confirm('Are you sure you want to delete' + ' ' + localStore[i].firstname + ' ' + localStore[i].lastname);
             localStore.splice(i, 1);
              //store the array in local storage.
            localStorage.setItem('localStore', JSON.stringify(localStore));
//             console.log(localStore[i].id);
//              console.log(id);
             break;
        }

     
        }
    location.reload();
}

