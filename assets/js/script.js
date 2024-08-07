// Preloader

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
  slidesToScroll: 1,
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
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
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
$('.slider3').slick({
  dots: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
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
$('.slider4').slick({
  dots: false,
  arrows: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  infinite: false,
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

// FAQs

document.addEventListener('DOMContentLoaded', (event) => {
  var toggles = document.querySelectorAll('.que');

  toggles.forEach(toggle => {
    var collapseElement = document.querySelector(toggle.getAttribute('href'));

    collapseElement.addEventListener('show.bs.collapse', function () {
      toggle.querySelector('.fa-plus').classList.add('d-none');
      toggle.querySelector('.fa-minus').classList.remove('d-none');
    });

    collapseElement.addEventListener('hide.bs.collapse', function () {
      toggle.querySelector('.fa-plus').classList.remove('d-none');
      toggle.querySelector('.fa-minus').classList.add('d-none');
    });
  });
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

// Add row area Table in vendor dashboard Js 

document.getElementById('addRowButton').addEventListener('click', function () {
  event.preventDefault();

  var tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  var currentRowCount = tableBody.rows.length;
  var newRow = tableBody.insertRow();

  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);
  var newCell3 = newRow.insertCell(2);
  var newCell4 = newRow.insertCell(3);
  var newCell5 = newRow.insertCell(4);
  var newCell6 = newRow.insertCell(5);
  var newCell7 = newRow.insertCell(6);

  var rowNumber = document.createElement('th');
  rowNumber.scope = "row";
  rowNumber.className = "col-no";
  rowNumber.innerText = currentRowCount + 1;
  newCell1.appendChild(rowNumber);

  newCell2.innerHTML = '<input type="text">';
  newCell3.innerHTML = '<input type="text">';
  newCell4.innerHTML = '<input type="number">';
  newCell5.innerHTML = '<input type="number">';
  newCell6.innerHTML = '<input type="file">';
  newCell7.innerHTML = '<button class="removeRowButton">Remove</button>';

  newCell7.querySelector('.removeRowButton').addEventListener('click', function () {
    tableBody.removeChild(newRow);
    updateRowNumbers();
  });
});

function updateRowNumbers() {
  var tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  var rows = tableBody.rows;
  for (var i = 0; i < rows.length; i++) {
    var cell = rows[i].cells[0];
    var thElement = cell.querySelector('th');

    if (thElement) {
      thElement.innerText = i + 1;
    } else {
      var rowNumber = document.createElement('th');
      rowNumber.scope = "row";
      rowNumber.className = "col-no";
      rowNumber.innerText = i + 1;
      cell.innerHTML = '';
      cell.appendChild(rowNumber);
    }
  }
}

document.querySelectorAll('.removeRowButton').forEach(function (button) {
  button.addEventListener('click', function () {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateRowNumbers();
  });
});
