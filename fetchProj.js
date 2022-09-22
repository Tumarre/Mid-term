let projNum = window.location.search.split("?")[1];

console.log("projNum: " + projNum);
const urlProject = [`https://jsonplaceholder.typicode.com/posts/${projNum}`];

const urlOther = ["https://jsonplaceholder.typicode.com/posts?_limit=4"];

function getData1() {
  fetch(urlProject)
    .then((response) => response.json())
    .then((data) => {
      let dataContainer2 = "";
      dataContainer2 += `
          <div class="section project wf-section">
          <div class="container project">
            <h1 class="project-page-title" id="project1">${data.title}</h1>
            <div class="project-type-wrapper">
              <div class="project-page-type">UI Design &amp; App Development</div>
              <div class="project-completion">
                <div class="project-completed">Completed on</div>
                <div class="project-date">2/2/22</div>
              </div>
            </div>
            <div class="project-image-wrapper">
              <img
                src="img/project-section/${data.id}.jpg"
                loading="lazy"
                alt=""
                sizes="(max-width: 479px) 88vw, (max-width: 767px) 92vw, 94vw"
                class="project-page-image"
              />
            </div>
            <div class="project-detail w-richtext">
              <p id="body1">
                ${data.body}
              </p>
            </div>
          </div>
        </div>
          `;
      document.querySelector(".wf-section").innerHTML = dataContainer2;
    });
}

getData1();

function getData2() {
  fetch(urlOther)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let dataContainer = "";
      data.forEach((data) => {
        console.log(data);
        if (data.id.toString() !== projNum) {
          dataContainer += `
        <article class="projectsArticle">
        <img
          src="img/project-section/${data.id}.jpg"
          alt="imagen"
          class="projectImg"
        />
        <div class="project_text">
          <h3 class="dataTitle" id="project1">${data.title}</h3>
          <div class="text dataBody" id="body1">
          ${data.body}
          </div>
          <a href="projects.html?${data.id}" class="learnMore">Learn more</a>
        </div>
      </article>
        `;
        }
      });
      document.querySelector(".projectsArticles").innerHTML = dataContainer;
    });
}

getData2();
