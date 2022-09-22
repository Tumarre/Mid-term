const url = ["https://jsonplaceholder.typicode.com/posts?_limit=3"];
function getData2() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let dataContainer = "";
      data.forEach((data) => {
        console.log(data);
        dataContainer += `
        <article class="projectsArticle">
        <img
          src="img/project-section/${data.id}.jpg"
          alt="imagen"
          class="projectImg"
        />
        <div class="project_text">
          <h3 class="dataTitle" id="project1">${data.title.slice(0, 19)}</h3>
          <div class="text dataBody" id="body1">
          ${data.body}
          </div>
          <a href="projects.html?${data.id}" class="learnMore">Learn more</a>
        </div>
      </article>
        `;
      });
      document.querySelector(".projectsArticles").innerHTML = dataContainer;
    });
}

getData2();
