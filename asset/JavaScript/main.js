// var navLists = document.querySelectorAll(".nav__list")
// var navListItems = document.querySelectorAll(".nav__list-down")

// for (let navList of navLists) {
//     navList.addEventListener("mousemove",function() {
//         navList.children[1].classList.add("showHeaderList")
        
//     } )
//     navList.addEventListener("mouseout", function() {
//         navList.children[1].classList.remove("shoHeaderList")
//     })
// }

//tabui
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
// const line = $(".tabs .line");

requestIdleCallback(function () {
//   line.style.left = tabActive.offsetLeft + "px";
//   line.style.width = tabActive.offsetWidth + "px";

});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    // line.style.left = this.offsetLeft + "px";
    // line.style.width = this.offsetWidth + "px";
    // tabs.style.borderColor = "#000" 


    this.classList.add("active");
    pane.classList.add("active");
  };
});

