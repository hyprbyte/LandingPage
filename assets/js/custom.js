(function () {
  "use strict";

  window.onload = function () {
    // Header Sticky
    const getHeaderId = document.getElementById("navbar");
    if (getHeaderId) {
      window.addEventListener("scroll", (event) => {
        const height = 150;
        const { scrollTop } = event.target.scrollingElement;
        document
          .querySelector("#navbar")
          .classList.toggle("sticky", scrollTop >= height);
      });
    }

    // Back to Top
    const getId = document.getElementById("backtotop");
    if (getId) {
      const topbutton = document.getElementById("backtotop");
      topbutton.onclick = function (e) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
      window.onscroll = function () {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          topbutton.style.opacity = "1";
        } else {
          topbutton.style.opacity = "0";
        }
      };
    }

    // Preloader
    const getPreloaderId = document.getElementById("preloader");
    if (getPreloaderId) {
      getPreloaderId.style.display = "none";
    }
  };

  // ScrollCue
  scrollCue.init();

  try {
    // Remove the "active" class from the current element and add it to the new element when hovered over
    var elements = document.querySelectorAll("[id^='my-element']");
    elements.forEach(function (element) {
      element.addEventListener("mouseover", function () {
        elements.forEach(function (el) {
          el.classList.remove("active");
        });
        element.classList.add("active");
      });
    });
  } catch (err) {}

  // Work Slide
  var swiper = new Swiper(".work-slide", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".prev",
      prevEl: ".next",
    },
  });

  // partner Slider
  var swiper = new Swiper(".partner-slide", {
    slidesPerView: 1,
    spaceBetween: 25,
    centeredSlides: false,
    preventClicks: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 5,
      },
    },
  });

  // Customers Slide
  var swiper = new Swiper(".customers-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    preventClicks: true,
    loop: false,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".prev",
      prevEl: ".next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 1.5,
      },
      1400: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 2,
      },
    },
  });

  // Customers Slide Two
  var swiper = new Swiper(".customers-slide-two", {
    slidesPerView: 1,
    spaceBetween: 24,
    preventClicks: true,
    loop: false,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: ".prev",
      prevEl: ".next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 1.5,
      },
      1400: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 2,
      },
    },
  });

  // What We Slide
  var swiper = new Swiper(".what-we-slide", {
    slidesPerView: 1,
    spaceBetween: 24,
    preventClicks: true,
    loop: false,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 2.5,
      },
      1400: {
        slidesPerView: 3.7,
      },
      1600: {
        slidesPerView: 3.7,
      },
    },
  });

  // What We Do For Customer Slide
  var swiper = new Swiper(".what-we-do-for-customer-slide", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 50000000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
      type: "bullets",
      renderBullet: function (index, className) {
        return (
          '<span class="' + className + '">' + ("0" + (index + 1)) + "</span>"
        );
      },
    },
  });

  // Skill Bar JS
  var skillPers = document.querySelectorAll(".skill-per");

  skillPers.forEach(function (skillPer) {
    var per = parseFloat(skillPer.getAttribute("per"));
    skillPer.style.width = per + "%";

    var animatedValue = 0;
    var startTime = null;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var stepPercentage = progress / 1000; // Dividing by duration in milliseconds (1000ms = 1s)

      if (stepPercentage < 1) {
        animatedValue = per * stepPercentage;
        skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
        requestAnimationFrame(animate);
      } else {
        animatedValue = per;
        skillPer.setAttribute("per", Math.floor(animatedValue) + "%");
      }
    }
    requestAnimationFrame(animate);
  });

  // Add TO Cart
  var input = document.querySelector("#qty");
  var btnminus = document.querySelector(".qtyminus");
  var btnplus = document.querySelector(".qtyplus");

  if (
    input !== undefined &&
    btnminus !== undefined &&
    btnplus !== undefined &&
    input !== null &&
    btnminus !== null &&
    btnplus !== null
  ) {
    var min = Number(input.getAttribute("min"));
    var max = Number(input.getAttribute("max"));
    var step = Number(input.getAttribute("step"));

    function qtyminus(e) {
      var current = Number(input.value);
      var newval = current - step;
      if (newval < min) {
        newval = min;
      } else if (newval > max) {
        newval = max;
      }
      input.value = Number(newval);
      e.preventDefault();
    }
    function qtyplus(e) {
      var current = Number(input.value);
      var newval = current + step;
      if (newval > max) newval = max;
      input.value = Number(newval);
      e.preventDefault();
    }
    btnminus.addEventListener("click", qtyminus);
    btnplus.addEventListener("click", qtyplus);
  }

  // LightBox JS
  var lightbox = GLightbox();
  lightbox.on("open", (target) => {
    console.log("lightbox opened");
  });
  var lightboxDescription = GLightbox({
    selector: ".glightbox2",
  });
  var lightboxVideo = GLightbox({
    selector: ".glightbox3",
  });
  lightboxVideo.on("slide_changed", ({ prev, current }) => {
    console.log("Prev slide", prev);
    console.log("Current slide", current);

    const { slideIndex, slideNode, slideConfig, player } = current;

    if (player) {
      if (!player.ready) {
        // If player is not ready
        player.on("ready", (event) => {
          // Do something when video is ready
        });
      }

      player.on("play", (event) => {
        console.log("Started play");
      });

      player.on("volumechange", (event) => {
        console.log("Volume change");
      });

      player.on("ended", (event) => {
        console.log("Video ended");
      });
    }
  });

  var lightboxInlineIframe = GLightbox({
    selector: ".glightbox4",
  });

  // Range Slider JS
  const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
  let priceGap = 1000;

  priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
          range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
        } else {
          rangeInput[1].value = maxPrice;
          range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      } else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
        range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    });
  });
})();

// Light & Dark JS
try {
  // function to set a given theme/color-scheme
  function setTheme(themeName) {
    localStorage.setItem("ladiv_theme", themeName);
    document.documentElement.className = themeName;
  }
  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem("ladiv_theme") === "theme-dark") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-dark");
    }
  }

  // Immediately invoked function to set the theme on initial load
  (function () {
    if (localStorage.getItem("ladiv_theme") === "theme-dark") {
      setTheme("theme-dark");
      document.getElementById("slider").checked = false;
    } else {
      setTheme("theme-dark");
      document.getElementById("slider").checked = true;
    }
  })();
} catch (err) {}

function subscribeNow(event) {
  event.preventDefault();
  console.log("subscribeNow function called");
  window.location.href = "under construction.html";
}
