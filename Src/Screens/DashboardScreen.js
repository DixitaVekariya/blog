const createBlogBtn = () => {
    location.href = "./CreateBlogScreen.html"
}

const loginBtn = () => {
    location.href = "./LoginScreen.html"

}

window.addEventListener('load', function (e) {
    e.preventDefault();
    pageOpened();
});

function pageOpened() {
    let getTitleData = []
    getTitleData = JSON.parse(localStorage.getItem('Title')) || []

    let html = ''
    console.log('getTitleData', getTitleData);

    getTitleData?.forEach((element, index) => {
        html += ` <div class="blogContainer">
            <div class="childBlogContainer">
                 <div class="childContainer">
                    <h2 class="noteText">${element.title}</h2>
                    <p class="descriptionText">${element.description}</p>
                    <div class="allBtnContainer">
                        <button class="showMoreBtn" onclick='showMoreBtn(${element.id})' >Show More</button>
                        <button class="editBtn" onclick='editBtn(${element.id})' id='editBtn' >Edit</button>
                        <button class="DltBtn" id='deleteBtn' onclick="deleteBtn(${element.id})" >Delete</button>
                    </div>
                </div>
            </div>
        </div>`

    });
    let blogContainer = document.querySelector('#tasks');
    blogContainer.innerHTML = html;
}


function showMoreBtn(element) {
    let blogData = [];
    blogData = JSON.parse(localStorage.getItem("Title")) || [];
    let showmore = blogData.find((id) => id.id === element);
    localStorage.setItem("showmore", JSON.stringify(showmore));
    window.location.href = "./showMoreScreen.html"
}

function editBtn(element) {
    let blogData = [];
    blogData = JSON.parse(localStorage.getItem("Title")) || [];
    let matcheid = blogData.find((id) => id.id === element);
    localStorage.setItem("matcheid", JSON.stringify(matcheid));
    window.location.href = "./EditScreen.html"
}

function deleteBtn(blogId) {

    console.log('clear...', blogId)
    const getTitle = JSON.parse(localStorage.getItem('Title')) || []
    console.log('getTitle', getTitle);
    const MathedBlog = getTitle.findIndex((blog) => blog.id === blogId)

    if (MathedBlog === -1) return

    getTitle.splice(MathedBlog, 1)

    localStorage.setItem('Title', JSON.stringify(getTitle))
    pageOpened();

}


