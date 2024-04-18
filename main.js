
async function newUser(url) {
    const response = await fetch('https://randomuser.me/api/?results=40');
    const displayUsers = await response.json();
    console.log(displayUsers.results);
    const newUser = document.getElementById("userData");

    console.log(displayUsers.results.length);
    for (let i = 0; i < displayUsers.results.length; i++) {
        const user = displayUsers.results[i];
        // console.log(user);

        const userData = `<div class ="container" style="width:31%;"> 
        <div class="card text-bg-dark"" style="width: 20rem; margin:2%; "  >
              <img src="${user.picture.thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <p class="card-text">gender: ${user.gender}</p>
                <p class="card-text">Age: ${user.dob.age}</p>
                <p class="card-text">email: ${user.email}</p>
                <button class="btn btn-primary" onclick = " saveFavToConteur()" >FAVORITE</button>
              </div>
            </div>
            </div> `






        newUser.innerHTML += userData


        let userBackUp = JSON.parse(localStorage.getItem('userData')) || [];
        userBackUp.push(userData);
        localStorage.setItem('userBackUp', JSON.stringify(userBackUp));




    }
}



newUser()






//action in scolling

// Function to update content
// function updateContent() {
    async function newUserContent(url) {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const displayUsersContent = await response.json();
        console.log(displayUsersContent.results);
        const content = document.getElementById('newContent');
    
        console.log(displayUsersContent.results.length);
        for (let i = 0; i < displayUsersContent.results.length; i++) {
            const userContent = displayUsersContent.results[i];
            console.log("test");
    
            const userDataContent  = `<div class ="container" style="width:31%;"> 
            <div class="card text-bg-dark" style="width: 20rem; margin:2%;"id="";  >
                  <img src="${userContent.picture.thumbnail}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Name: ${userContent.name.title} ${userContent.name.first} ${userContent.name.last}</h5>
                    <p class="card-text">gender: ${userContent.gender}</p>
                    <p class="card-text">Age: ${userContent.dob.age}</p>
                    <p class="card-text" style=   "  white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 0;
                    padding: 10px;
                    font-size: 10px;" >email: ${userContent.email}</p>
                    <button class="btn btn-primary" onclick = "saveFavToConteur()" > FAVORITE </button>
                  </div>
                </div>
                </div> `
    
    
    
    
    
    
                content.innerHTML += userDataContent
    
    
            let userBackUp = JSON.parse(localStorage.getItem('userData')) || [];
            userBackUp.push(userData);
            localStorage.setItem('userBackUp', JSON.stringify(userBackUp));


            function saveFavToCount(){
                count = count+1
               favoriteCount.innerHTML = `you have ${count} favorites`
           
           
           }
    
    
    
    
        }
    }
    
    // newUser.innerHTML += userData
// content.innerHTML += '<p>New content added!</p>';


// Event listener for scroll
window.addEventListener('scroll', function () {
    // If scrolled to bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Update content
        newUserContent();
    }
});

let count = 0;
const favoriteCount = document.getElementById("favorite");

function saveFavToConteur(){
     count = count+1
    favoriteCount.innerHTML = `you have ${count} favorites`


}

saveFavToConteur()


$(document).ready(function() {
    // Make the draggable element draggable
    $("#draggable").draggable();
  
    // Make the droppable element droppable
    $("#droppable").droppable({
      drop: function(event, ui) {
        $(this).addClass("ui-state-highlight").find("p").html("Dropped!");
      }
    });
  });
  




