async function getUser(){
    try{
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        const user = data.results[0];

        document.getElementById("user-img").src = user.picture.large;
        document.getElementById("user-name").innerText = user.name.first;
        document.getElementById("user-email").innerText = user.email;

    }catch(error){
        console.error("Error Fetching Data: ", error);
        
    }
}