
async function newUser(url) {
    const response = await fetch('https://randomuser.me/api/?results=40');
    const displayUsers = await response.json();
    console.log(displayUsers.results);
    const newUser = document.getElementById("userData");

    console.log(displayUsers.results.length);
    for (let i = 0; i < displayUsers.results.length; i++) {
        const user = displayUsers.results[i];
        console.log(user);

        const userData = `<div class ="container" style="width:30%;"> 
        <div class="card text-bg-dark"" style="width: 20rem; margin:2%; "  >
              <img src="${user.picture.thumbnail}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <p class="card-text">gender: ${user.gender}</p>
                <p class="card-text">Age: ${user.dob.age}</p>
                <p class="card-text">email: ${user.email}</p>
                <a href="#" class="btn btn-primary">FAVORITE</a>
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






const content = document.getElementById('newContent');

// Function to update content
function updateContent() {
    async function newUser(url) {
        const response = await fetch('https://randomuser.me/api/?results=40');
        const displayUsers = await response.json();
        console.log(displayUsers.results);
        const newUser = document.getElementById("userData");
    
        console.log(displayUsers.results.length);
        for (let i = 0; i < displayUsers.results.length; i++) {
            const user = displayUsers.results[i];
            console.log(user);
    
            const userData = `<div class ="container" style="width:30%;"> 
            <div class="card text-bg-dark"" style="width: 20rem; margin:2%; "  >
                  <img src="${user.picture.thumbnail}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Name: ${user.name.title} ${user.name.first} ${user.name.last}</h5>
                    <p class="card-text">gender: ${user.gender}</p>
                    <p class="card-text">Age: ${user.dob.age}</p>
                    <p class="card-text">email: ${user.email}</p>
                    <a href="#" class="btn btn-primary">FAVORITE</a>
                  </div>
                </div>
                </div> `
    
    
    
    
    
    
            newUser.innerHTML += userData
    
    
            let userBackUp = JSON.parse(localStorage.getItem('userData')) || [];
            userBackUp.push(userData);
            localStorage.setItem('userBackUp', JSON.stringify(userBackUp));
    
    
    
    
        }
    }
    
    newUser.innerHTML += userData
// content.innerHTML += '<p>New content added!</p>';
}

// Event listener for scroll
window.addEventListener('scroll', function () {
    // If scrolled to bottom
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        // Update content
        updateContent();
    }
});