
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name,
            email,
        })
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            let p = document.createElement("p");
            document.body.appendChild(p);
            p.innerHTML = object.id;
            console.log(object);
        })
        .catch(function (error) {
            alert("Error");
            let p = document.createElement("p");
            document.body.appendChild(p);
            p.innerHTML = error.message;
        });
}