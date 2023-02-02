document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;



    let myTitleInfo;
    let GetTitleData = window.localStorage.getItem('Title');
    console.log("GetTitleData", GetTitleData);
    if (GetTitleData === null) {
        myTitleInfo = [];
    } else {
        myTitleInfo = JSON.parse(GetTitleData);
    }

    myTitleInfo.push({
        id: Math.floor(Math.random() + Date.now()),
        title: title,
        description: description
    });

    window.localStorage.setItem('Title', JSON.stringify(myTitleInfo));

    location.href = "./DashboardScreen.html";

});
