const accessKey = "5nQSUZ30rE5IpiyZgDALcKTGgw5RkPvvy7x_YZS_vCU";
const searchForm = document.getElementById("form-search");
const searchBox = document.getElementById("search-box");
const showMore = document.getElementById("show-more");
const imageBtn = document.getElementById("img-btn");

let keyword = "";
let page = 1;
async function imageSearch() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}
  &query=${keyword}&client_id=${accessKey}&per_page=12
  `;
  const response = await fetch(url);

  const data = await response.json();
  if (searchBox === "") {
    alert("Please select what you want to search");
  }
  if (page === 1) {
    showMore.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");

    image.src = result.urls.small;

    const imagLink = document.createElement("a");

    imagLink.href = result.links.html;

    imagLink.target = "_blank";

    imagLink.appendChild(image);

    showMore.appendChild(imagLink);
  });
  imageBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  page = 1;

  imageSearch();
});

imageBtn.addEventListener("click", () => {
  page++;
  imageSearch();
});

const toggle = document.getElementsByClassName("toggle-button")[0];
const navlink = document.getElementsByClassName("nav-link")[0];

toggle.addEventListener("click", () => {
  navlink.classList.toggle("active");
});
