var allstudent=[]
function submit() {
    if(localStorage.student){
        allstudent=JSON.parse(localStorage.getItem('student'))
    }
var firstname = document.getElementById("firstname").value
var lastname = document.getElementById("lastname").value
var phonenumber = document.getElementById("phonenumber").value
var emailaddress = document.getElementById("emailaddress").value
var password = document.getElementById("password").value

if (firstname === '' || lastname === '' || phonenumber=== '' || emailaddress === '' || password === '') {
    alert('all input cannot be empty')
errorMessage.style.display ='block'
setTimeout(()=>{
    errorMessage.style.display ='none'
},3000);

} else {
// errorMessage.style.display ='none'
Swal.fire({
    title: "Good job!",
    text: "You sign up successfully",
    icon: "success"
  });
var studentobjects = {  
    firstname:firstname,
    lastname:lastname,
    email:emailaddress,
    phone:phonenumber,
    password:password
}
console.log(studentobjects);
allstudent.push(studentobjects)
// display()
}
localStorage.setItem('student', JSON.stringify(allstudent))
window.location.href = 'login.html'
 
var firstname = document.getElementById("firstname").value = ''
var lastname = document.getElementById("lastname").value = ''
var phonenumber = document.getElementById("phonenumber").value = ''
var emailaddress = document.getElementById("emailaddress").value = '' 
var password = document.getElementById("password").value     = ''
}
function display(){
    // studentdetails.innerHTML=`
    // <tr>
    //   <th style="border:2px solid brown;" class="text-center text-warning">S/N</th>
    // <th style="border:2px solid brown;" class="text-center text-warning">Firstname</th>
    // <th style="border:2px solid brown;" class="text-center text-warning">Lastname</th>
    // <th style="border:2px solid brown;" class="text-center text-warning">Email</th>
    // <th style="border:2px solid brown;" class="text-center text-warning">Phone number</th>
    // </tr>
    // `
//     for (let index = 0; index < allstudent.length; index++) {
//         console.log(index);
        
//         studentdetails.innerHTML +=`
   
//        <table>
       
//        <tr>
//            <td style="border:2px solid brown width: 10px;" class="text-center text-warning">${index+1}</td>
//            <td style="border:2px solid brown width: 150px;" class="text-center text-warning border border-danger">${allstudent[index].firstname}</td>
//            <td style="border:2px solid brown width: 150px;" class="text-center text-warning border border-danger">${allstudent[index].lastname}</td>
//            <td style="border:2px solid brown width: 150px;" class="text-center text-warning  border border-danger">${allstudent[index].email}</td>
//            <td style="border:2px solid brownwidth: 150px;" class="text-center text-warning  border border-danger">${allstudent[index].phone}</td>
//            <td style="border:2px solid brown" class="text-center text-warning  border border-danger">
//            <button class="btn btn-warning" onclick="loadify(${index})">Delete</button>
//            <button class="btn btn-danger" onclick="shopify(${index}">Edit</button>
//            </td>
//        </tr>
//    </table>
//        `
//     }
}
function loadify(i) {
    allstudent.splice(i,1)
    console.log(allstudent);
    // display()
}

function shopify(b) {
    var studentobjects = {  
            firstname2:firstname.value,
            lastname3:lastname.value,
            email4:emailaddress.value,
            phone5:phonenumber.value,
            password6:password.value
        }
        console.log(studentobjects);
        var index = prompt('which item did you want to edit')        
        allstudent.splice(index-1, 1)
        // display()
     
}
