function getData() {
  let title1, title2, title3;
  const body1 = document.querySelector("#body1");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result) => {
      return result.json();
    })
    .then((result) => {
      title1 = result[0];
      title2 = result[1];
      title3 = result[2];
      document.querySelector("#project1").innerText = title1.title;
      document.querySelector("#project11").innerText = title1.title;
      document.querySelector("#project2").innerText = title2.title;
      document.querySelector("#project3").innerText = title3.title;

      document.querySelector("#body1").innerText = title1.body;
      document.querySelector("#body11").innerText = title1.body;
      document.querySelector("#body2").innerText = title2.body;
      document.querySelector("#body3").innerText = title3.body;
    })
    .catch((err) => console.log(err));
}

getData();
