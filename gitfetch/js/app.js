const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");


const client_id = 'Iv1.80880c237cbadb61';
const client_secret = '0bef8d98662c88b9e5034f6669da62af6624aae8';
                                       
const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`)                       
//convert data into JSON format//
    const data = await api_call.json();
    return { data }
}

// Pull and display data
const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);
// set innerHTML properties to fetch data//
        nameContainer.innerHTML=`Name: <span class="main__profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;
        reposContainer.innerHTML = `Respositories: <span class="main__profile-value">${res.data.public_repos}</span>`;
        urlContainer.innerHTML = `URL: <span class="main__profile-value">${res.data.html_url}</span>`; 
    })
};





searchButton.addEventListener("click", () => {
    showData();
})