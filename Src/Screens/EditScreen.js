window.addEventListener('load', (e) => {
    e.preventDefault()
    if (localStorage.getItem("matcheid")) {
        getUpdatedata = JSON.parse(localStorage.getItem("matcheid"));
        console.log("getUpdatedata", getUpdatedata);
        document.getElementById("title1").value = getUpdatedata.title;
        // console.log("title", title);
        document.getElementById("description1").value = getUpdatedata.description;
        // console.log("description", description);
    }

    // debugger
})

const updateArr = JSON.parse(localStorage.getItem('matcheid'))

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault()
    var blogTitle = ((document.getElementById("title1") || {}).value) || "";
    console.log('blogTitle', blogTitle);

    var blogDescription = ((document.getElementById("description1") || {}).value) || "";
    console.log('blogDescription', blogDescription);
    console.log('updateArr.id', updateArr.id)

    let blogArray = [];
    blogArray = JSON.parse(localStorage.getItem('Title')) || []

    const data = blogArray.map((blogdata) => {
        if (blogdata.id == updateArr.id) {
            return { ...blogdata, title: blogTitle, description: blogDescription }
        } return blogdata
    })
    localStorage.setItem('Title', JSON.stringify(data))
  
    window.location.href = 'DashboardScreen.html'
    
    console.log('data>>>', data);
    console.log('blogArray', blogArray);
})
