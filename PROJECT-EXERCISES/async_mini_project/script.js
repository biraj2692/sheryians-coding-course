let searchbtn = document.querySelector(".search")
let usernameInp = document.querySelector(".usernameInp")
let card = document.querySelector(".card")
function getProfileData(username) {
    return fetch(`https://api.github.com/users/${username}`).then(raw => {
        if(!raw.ok) throw new Error("User not Found");
        return raw.json();
    });
}

function getRepo(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw => {
        if(!raw.ok) throw new Error("User not Found");
        return raw.json();
    });
}

function showProfileData(details) {
    console.log(details);
    
    let data =`<div class="mt-6 flex items-center gap-6">
            <img src="${details.avatar_url}" alt="Avatar" class="w-24 h-24 rounded-full border border-gray-600" />
            <div>
              <h2 class="text-2xl font-semibold text-white">${details.name}</h2>
              <p class="text-gray-400">@${details.login}</p>
              <p class="text-gray-400 mt-2">${details.bio}</p>
              <div class="mt-2 text-sm text-gray-500">
                Followers: ${details.followers} • Following: ${details.following} • Repositories: ${details.name}
              </div>
            </div>
          </div>`
          
    card.innerHTML = data;
}


searchbtn.addEventListener("click",function () {
    let user = usernameInp.value.trim();
    if (user.length > 0) {
        getProfileData(user).then((data)=>{
            showProfileData(data);
        })
    }else{
        alert("Please provide valid input to search");
    }
})