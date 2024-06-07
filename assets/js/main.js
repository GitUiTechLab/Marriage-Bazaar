$('.slider1').slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  infinity: true,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider2').slick({
  // arrows: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  infinity: true,
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider3').slick({
  dots: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  infinity: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider4').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  infinity: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('.slider5').slick({
  dots: true,
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 1000,
  infinity: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// Counter

function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 0) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}


// variable divs

var divs = ["container1", "container2", "container3", "container4", "container5"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if (visibleDivId !== divId) {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}

const activeCons = document.querySelectorAll(".con-link");

activeCons.forEach(activeCon => {
  activeCon.addEventListener('click', () => {
    document.querySelector(".activeContainer")?.classList.remove("activeContainer");
    activeCon.classList.add("activeContainer");
  })
});

const close = document.querySelector(".close");
const col_add = document.querySelector(".collection-add");
const bg = document.querySelector(".venue-bg");

function close_div() {
  col_add.style.display = "none";
  bg.style.height = "100%";
}

// Dropdown

document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const dropdownItems = dropdown.querySelectorAll('.dropdown-item');
    const dropNameSpan = dropdown.querySelector('.drop-name');

    dropdownItems.forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        dropNameSpan.textContent = this.textContent;
      });
    });
  });
});

// Searchbar

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });

  function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (query === 'venue') {
      window.location.href = 'venue.html';
    } else if (query === 'vendor') {
      window.location.href = 'vendors.html';
    } else if (query === 'trend') {
      window.location.href = 'wed-trends.html';
    } else if (query === 'theme') {
      window.location.href = 'wed-theme.html';
    } else if (query === 'collection' || query === 'photos') {
      window.location.href = 'collection.html';
    } else if (query === 'blog') {
      window.location.href = 'blogs.html';
    } else if (query === 'service') {
      window.location.href = 'services.html';
    } else {
      alert('No results found for: ' + query);
    }
  }
});

// password

$(".toggle-password").click(function () {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});

// add reviews

$(document).on('click', '.modal-trigger', function() {
  var modalId = $(this).data('modal-id');
  $('#' + modalId).addClass('model-open');
});

$(document).on('click', '.close-btn, .bg-overlay', function() {
  $(this).closest('.custom-model-main').removeClass('model-open');
});