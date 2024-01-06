// Set the date we're counting down to
var countDownDate = new Date("September 24, 2024 17:04:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  // document.getElementById("demo").innerHTML =
  //   '<span id="day">' +
  //   days +
  //   "</span>" +
  //   '<span id="hours">' +
  //   hours +
  //   "</span>" +
  //   '<span id="minute">' +
  //   minutes +
  //   "</span>" +
  //   '<span id="second">' +
  //   seconds +
  //   "</span>";

  var z = document.getElementsByClassName("demos");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="day">' +
      days +
      "</span>" +
      '<span id="hours">' +
      hours +
      "</span>" +
      '<span id="minute">' +
      minutes +
      "</span>" +
      '<span id="second">' +
      seconds +
      "</span>";
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);

    // document.getElementById("demo").innerHTML = "";
    var y = document.getElementsByClassName("demos");
    for (var i = 0; i < y.length; i++) {
      y[i].innerHTML = "";
    }

    // document.getElementById("demo").style.padding = "0";
    var p = document.getElementsByClassName("demos");
    for (var i = 0; i < p.length; i++) {
      p[i].style.padding = "0";
    }

    // document
    //   .getElementById("after-expire")
    //   .setAttribute("id", "offer-expire-text");
    var g = document.getElementsByClassName("after-expire");
    for (var i = 0; i < g.length; i++) {
      g[i].classList.add("offer-expire-text");
    }

    // document.getElementById("offer-expire-text-inner").innerHTML =
    //   '<p id="EXPIRED">' + " پیشنهاد ویژه این محصول به پایان رسیده !" + "</p>";
    var d = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < d.length; i++) {
      d[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده !";
    }

    // document.getElementById("offer-blur").style.filter = "blur(1.6px)";
    var t = document.getElementsByClassName("offer-blur");
    for (var i = 0; i < t.length; i++) {
      t[i].style.filter = "blur(1.6px)";
    }
  }
}, 1000);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    items: 4,
    loop: true,
    // margin: 10,
    // autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPouse: true,
    nav: true,
    dots: true,
    center: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      900: {
        items: 3,
        nav: true,
        loop: false,
        center: false,
      },
      1100: {
        items: 4,
        nav: true,
        loop: false,
        center: false,
      },
    },
  });
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
