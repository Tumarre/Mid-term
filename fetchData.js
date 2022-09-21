// function getData() {
//   let title1, title2, title3;
//   const body1 = document.querySelector("#body1");
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((result) => {
//       return result.json();
//     })
//     .then((result) => {
//       title1 = result[0];
//       title2 = result[1];
//       title3 = result[2];
//       document.querySelector("#project1").innerText = title1.title.slice(0, 22);
//       document.querySelector("#project2").innerText = title2.title.slice(0, 22);
//       document.querySelector("#project3").innerText = title3.title.slice(0, 22);

//       document.querySelector("#body1").innerText = title1.body;
//       document.querySelector("#body2").innerText = title2.body;
//       document.querySelector("#body3").innerText = title3.body;
//     })
//     .catch((err) => console.log(err));
// }

// getData();

const url = ["https://jsonplaceholder.typicode.com/posts?_limit=4"];
function getData2() {
  fetch(url)
    .then((response) => {
      response.json();
    })
    .then((data) => {
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
          <h3 class="dataTitle" id="project1">${data.title}</h3>
          <div class="text dataBody" id="body1">
          ${data.body}
          </div>
          <a href="projects.html" class="learnMore">Learn more</a>
        </div>
      </article>
        `;
      });
    });
  console.log("¨hello");
  console.log(document.querySelector(".projectsArticles"));
  // document.querySelector(".projectArticles").innerHTML = dataContainer;
}

getData2();
