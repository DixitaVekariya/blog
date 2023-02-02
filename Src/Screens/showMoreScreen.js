
window.addEventListener('load', (e) => {
   e.preventDefault()
   if (localStorage.getItem("showmore")) {
      getUpdatedata = JSON.parse(localStorage.getItem("showmore"));
      console.log("getUpdatedata", getUpdatedata);
      document.getElementById("showTitle").innerHTML = getUpdatedata.title;
      document.getElementById("showDescription").innerHTML = getUpdatedata.description;
   }
})


const backBtn = () => {
   window.location.href = "./DashboardScreen.html"

}
