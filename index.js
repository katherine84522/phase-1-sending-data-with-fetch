// Add your code here
const userData = {
    name: "Steve",
    email: "steve@steve.com",
};

const object = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(userData),
}

const submitData = () => {
    return fetch("http://localhost:3000/users", object)
        .then(response => response.json())
        .then((data) => {
            let p = document.createElement("p")
            p.innerText = data.id
            document.body.appendChild(p)
        })
        .catch((error) => {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
        })


}

submitData();
