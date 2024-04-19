


let divs = document.querySelectorAll("div");


divs.forEach((div) =>
  div.addEventListener("mouseover", function () {
    console.log(window.getComputedStyle(div));
    document.body.style.backgroundColor =
      window.getComputedStyle(div).backgroundColor;
  })
);

divs.forEach((div)=>
  div.addEventListener("mouseleave", function(){
    document.body.style.backgroundColor = "white";
  })
)


/*
divs.forEach(function (div) {
  div.addEventListener("click", function () {
    document.body.style.backgroundColor = this.style.backgroundColor;
  });
});
*/
//divs.forEach((div) => console.log(window.getComputedStyle(div).backgroundColor));
