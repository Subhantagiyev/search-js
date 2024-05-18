const accessKey = "837OeO562GJYJpI01hNMWMhFqjSTGHevNrGtsCC-VQ";

const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")


let keyword= "" ;
let page = 1;

async function searchImages(){
    keyword = searchBox.value ;
    const url = 'https://api.unsplash.com/search/collections?page=${page}&query=${keyword}$client_id=${accessKey}' ;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    results.map((result) =>{
       const image = document.createElement("img");
       image.src = result.urls.small;
       const imagelink = document.createElement("a");
       imagelink.href = result.links.html;
       imagelink.target = "_blank";

       imagelink.appendChild(image);
       searchResult.appendChild(imagelink);

    })
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
} )