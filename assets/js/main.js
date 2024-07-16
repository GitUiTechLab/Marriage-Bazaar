let ss = document.getElementById("splashscreen");
window.addEventListener("load", function () {
  setTimeout(function () {
    ss.style.display = "none";
  }, 2000);
});

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

// remove div

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

const suggestions = [
  { name: "venues", url: "venue.html" },
  { name: "vendors", url: "vendors.html" },
  { name: "trends", url: "wed-trends.html" },
  { name: "themes", url: "wed-themes.html" },
  { name: "collection", url: "collection.html" },
  { name: "photos", url: "collection.html" },
  { name: "blogs", url: "blogs.html" },
  { name: "services", url: "services.html" },
  { name: "invitations", url: "e-invites.html" }
];

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("searchInput");

  input.addEventListener("input", function () {
    const val = this.value;
    closeAllLists();
    if (!val) return false;
    const list = document.createElement("div");
    list.setAttribute("id", this.id + "-autocomplete-list");
    list.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(list);
    for (let i = 0; i < suggestions.length; i++) {
      if (suggestions[i].name.substr(0, val.length).toUpperCase() === val.toUpperCase()) {
        const item = document.createElement("div");
        item.innerHTML = "<strong>" + suggestions[i].name.substr(0, val.length) + "</strong>";
        item.innerHTML += suggestions[i].name.substr(val.length);
        item.innerHTML += "<input type='hidden' value='" + suggestions[i].name + "'>";
        item.setAttribute("data-url", suggestions[i].url);
        item.addEventListener("click", function () {
          window.location.href = this.getAttribute("data-url");
        });
        list.appendChild(item);
      }
    }
  });

  function closeAllLists(elmnt) {
    const items = document.getElementsByClassName("autocomplete-items");
    for (let i = 0; i < items.length; i++) {
      if (elmnt !== items[i] && elmnt !== input) {
        items[i].parentNode.removeChild(items[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
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

// add images in submit-wed2 page

jQuery(document).ready(function () {
  ImgUpload();
});

function ImgUpload() {
  var imgArray = [];

  $('.upload__inputfile').each(function () {
    $(this).on('change', function (e) {
      var imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
      var maxLength = $(this).attr('data-max_length');

      var files = e.target.files;
      var filesArr = Array.prototype.slice.call(files);

      filesArr.forEach(function (f, index) {
        if (!f.type.match('image.*')) {
          return;
        }

        if (imgArray.length >= maxLength) {
          return false;
        } else {
          var len = 0;
          for (var i = 0; i < imgArray.length; i++) {
            if (imgArray[i] !== undefined) {
              len++;
            }
          }
          if (len >= maxLength) {
            return false;
          } else {
            imgArray.push(f);

            var reader = new FileReader();
            reader.onload = function (e) {
              var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
              imgWrap.append(html);
            }
            reader.readAsDataURL(f);
          }
        }
      });
    });
  });

  $('body').on('click', ".upload__img-close", function (e) {
    var file = $(this).parent().data("file");
    for (var i = 0; i < imgArray.length; i++) {
      if (imgArray[i].name === file) {
        imgArray.splice(i, 1);
        break;
      }
    }
    $(this).parent().parent().remove();
  });
}

// add reviews in submit-wed3 page

jQuery(document).ready(function () {
  $('.modal-trigger').on('click', function () {
    var modalId = $(this).data('modal-id');
    $('#' + modalId).addClass('model-open');
  });

  $('.close-btn, .bg-overlay').on('click', function () {
    $(this).closest('.custom-model-main').removeClass('model-open');
  });


  $('.modal-submit').on('click', function () {
    var inputId = $(this).data('input-id');
    var modalId = $(this).closest('.custom-model-main').attr('id');
    var text = $('#' + modalId).find('textarea').val();
    $('#' + inputId).val(text);
    $('#' + modalId).removeClass('model-open');
  });
});

// Login with google

function start() {
  gapi.load('auth2', function() {
    auth2 = gapi.auth2.init({
      client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      // Scopes to request in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
  });
}

$('#signinButton').click(function() {
  auth2.grantOfflineAccess().then(signInCallback);
});

function signInCallback(authResult) {
  if (authResult['code']) {
    // The user granted offline access, and you received an authorization code
    // Send the authorization code to your server
    $.ajax({
      type: 'POST',
      url: '/storeauthcode',
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      contentType: 'application/octet-stream; charset=utf-8',
      success: function(result) {
        console.log('Code sent to server');
        // Handle or display the result from your server
      },
      processData: false,
      data: authResult['code']
    });
  } else {
    console.log('Error: ' + authResult['error']);
    // There was an error, handle it here
  }
}

// Success popup Js

log_out = document.querySelector(".logout");
popup = document.querySelector(".popup");
popup_close = document.querySelector(".close");

log_out.addEventListener('click', function () {
  popup.style.display = 'flex';
  // confirm("Aar you sure you Want to logout?");
});

popup_close.addEventListener("click", function () {
  popup.style.display = "none";
})

document.querySelectorAll('.close-icon').forEach(function(icon) {
  icon.addEventListener('click', function() {
      const container = this.closest('.content-on-div');
      const popupOverlay = document.getElementById('popupOverlay');
      popupOverlay.style.display = 'flex';

      document.getElementById('confirmYes').onclick = function() {
          container.style.display = 'none';
          popupOverlay.style.display = 'none';
      };

      document.getElementById('confirmNo').onclick = function() {
          popupOverlay.style.display = 'none';
      };
  });
});

