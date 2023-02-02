document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var email = document.getElementById("newEmail").value;
    var password = document.getElementById("newPassword").value;

    let names;
    let GetRegisterData = window.localStorage.getItem('Register');
    console.log("GetRegisterData", GetRegisterData);
    if (GetRegisterData === null) {
        names = [];
    } else {
        names = JSON.parse(GetRegisterData);
    }

    names.push({
        "email": email,
        "password": password
    });

    window.localStorage.setItem('Register', JSON.stringify(names));

    location.href = "./DashboardScreen.html" 

});
