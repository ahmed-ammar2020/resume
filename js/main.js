"use strict";
gsap.registerPlugin(ScrollTrigger);
const hamburger = document.querySelector(".hamburger");
const hamLine1 = document.querySelector(".line1");
const hamLine2 = document.querySelector(".line2");
const hamLine3 = document.querySelector(".line3");
const navbar = document.querySelector("#nav");
const websiteContent = document.querySelector(".website-content");

//hamburger functionality
hamburger.addEventListener("click", function () {
  let windowWidth = window.innerWidth; //getting the width of the window
  if (windowWidth >= 992) {
    //oerflow the body
    document.body.classList.toggle("overflow");
    hamLine1.classList.toggle("animated");
    hamLine2.classList.toggle("animated");
    hamLine3.classList.toggle("animated");
  } else {
    //the navbar functionality when clicking the hamburger
    document.body.classList.toggle("overflow");
    hamLine1.classList.toggle("animated");
    hamLine2.classList.toggle("animated");
    hamLine3.classList.toggle("animated");
    navbar.classList.toggle("show");
    const itemsLi = document.querySelectorAll(".show li");
    itemsLi.forEach((item) => {
      item.addEventListener("click", () => {
        setTimeout(() => {
          document.body.classList.remove("overflow");
          hamLine1.classList.remove("animated");
          hamLine2.classList.remove("animated");
          hamLine3.classList.remove("animated");
          navbar.classList.remove("show");
        }, 100);
      });
    });
  }
});

let windowWidth = window.innerWidth;
if (windowWidth < 992) {
  navbar.classList.add("hide");
} else {
  navbar.classList.remove("hide");
}

window.addEventListener("resize", function () {
  let windowWidth = window.innerWidth;
  if (windowWidth < 992) {
    navbar.classList.add("hide");
    websiteContent.classList.remove("website-content");
  } else {
    navbar.classList.remove("hide");
    navbar.classList.remove("show");
    websiteContent.classList.add("website-content");
  }
});

//back to top button
var btn = $("#button");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1500);
});

//counter nums
var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter-value").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});

//loading progress bar
gsap.from(".my-progress-bar", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 70%",
    toggleActions: "play pause resume reset",
  },
  width: "0%",
  duration: 2,
  ease: "none",
  onUpdate: function () {
    let elem1 = this.targets()[0];
    $(".width-container1 strong").text(
      Math.floor(gsap.getProperty(elem1, "width")) + "%"
    );
    let elem2 = this.targets()[1];
    $(".width-container2 strong").text(
      Math.floor(gsap.getProperty(elem2, "width")) + "%"
    );
    let elem3 = this.targets()[2];
    $(".width-container3 strong").text(
      Math.floor(gsap.getProperty(elem3, "width")) + "%"
    );
    let elem4 = this.targets()[3];
    $(".width-container4 strong").text(
      Math.floor(gsap.getProperty(elem4, "width")) + "%"
    );
    let elem5 = this.targets()[4];
    $(".width-container5 strong").text(
      Math.floor(gsap.getProperty(elem5, "width")) + "%"
    );
    let elem6 = this.targets()[5];
    $(".width-container6 strong").text(
      Math.floor(gsap.getProperty(elem6, "width")) + "%"
    );
  },
});

//active button in portfolio list
let portList = document.querySelector(".port-list");
let portfolioLis = document.querySelectorAll(".port-list li");
portfolioLis.forEach((li) => {
  li.addEventListener("click", function () {
    for (let item of portfolioLis) {
      item.classList.remove("active");
    }
    li.classList.add("active");
  });
});

//filter portfolio
let $grid = $(".grid");
$grid.isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: ".grid-item",
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: ".grid-item",
  },
});
$grid.imagesLoaded().progress(function () {
  $grid.isotope("layout");
});
$(".port-list").on("click", "li", function () {
  let filterValue = $(this).data("filter");
  $grid.isotope({
    filter: filterValue,
  });
  AOS.refreshHard();
});
//Init venoBox plugin
$(".venobox").venobox({
  titleattr: "data-title",
  infinigall: true,
  share: ["facebook", "twitter", "download"],
});

//scrollspy navbar function
$(window).bind("scroll", function () {
  var currentTop = $(window).scrollTop();
  var elems = $(".scrollspy");
  elems.each(function (index) {
    var elemTop = $(this).offset().top;
    var elemBottom = elemTop + $(this).height();
    if (currentTop >= elemTop && currentTop <= elemBottom) {
      var id = $(this).attr("id");
      var navElem = $('a[href="#' + id + '"]');
      navElem.parent().addClass("active").siblings().removeClass("active");
    }
  });
});
