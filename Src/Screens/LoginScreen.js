document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var email = document.getElementById("newEmail").value;
    var password = document.getElementById("newPassword").value;
    const myLoginInfo = {
        "email": email,
        "password": password
    }
    localStorage.setItem('Login', JSON.stringify(myLoginInfo));

    localStorage.getItem("Login");

    let ragister = JSON.parse(window.localStorage.getItem('Register'))

 
    for (let index = 0; index < ragister.length; index++) {
                 
        const getEmail = ragister[index].email;
        console.log("getEmail", getEmail);
        const getPassword = ragister[index].password;
        console.log("getPassword", getPassword);
 
        let login = JSON.parse(window.localStorage.getItem('Login'))
        const getLoginEmail = login.email;
        console.log("getLoginEmail", getLoginEmail);
        const getLoginPassword = login.password;
        console.log("getLoginPassword", getLoginPassword);

        if (getEmail === getLoginEmail && getPassword === getLoginPassword) {
            toastr.success('Login to the success');
            location.href = "./DashboardScreen.html"
        }
        else {
            toastr.error('Email and Password incorect');
        }
    }

    let login = JSON.parse(window.localStorage.getItem('Login'))
    console.log('Login', login)



});