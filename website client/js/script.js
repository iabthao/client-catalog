
var modal = document.getElementById('itemwrapper');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper1');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}


var modal = document.getElementById('itemwrapper2');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper3');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper4');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper5');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
 
var modal = document.getElementById('itemwrapper6');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var modal = document.getElementById('itemwrapper7');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var modal = document.getElementById('itemwrapper8');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var modal = document.getElementById('itemwrapper9');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var modal = document.getElementById('itemwrapper10');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper11');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper12');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

var modal = document.getElementById('itemwrapper13');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var modal = document.getElementById('itemwrapper14');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var modal = document.getElementById('itemwrapper15');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var modal = document.getElementById('itemwrapper16');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
var modal = document.getElementById('itemwrapper17');
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}


function openProduct(evt, cityName) {
    var i, prodcontent, itemslinks;
    prodcontent = document.getElementsByClassName("prodcontent");
    for (i = 0; i < prodcontent.length; i++) {
      prodcontent[i].style.display = "none";
    }
    itemslinks = document.getElementsByClassName("itemslinks");
    for (i = 0; i < itemslinks.length; i++) {
      itemslinks[i].className = itemslinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  
  $(document).ready(function(){

    $('.carousel').carousel({
        interval: 2000
      });

      $('.productBox').scrollspy({ target: '#navbar-example' })
//document.ready function ends here


  });