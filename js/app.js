// TYPING EFFECT ON HOMEPAGE
var typed = new Typed("#typed", {
        strings: [
          "<a href='https://facebook.com/HussnainAhmad25' target='_blank'>Hussnain Ahmad</a>",
          "<a href='https://github.com/PsychoCoder25/' target='_blank'>PsycoCoder25</a>",
          "<a href='https://github.com/HussnainAhmad1606/' target='_blank'>Ha Rajpoot</a>"
        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
      });

$("#urlBtn").click(function (){
if (document.querySelector("#urlFromUser").value == ""){
	error = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>ERROR!</strong> Please Enter URL.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
$(".error").html(error)
return false
}

let url = $("#urlFromUser").val()
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://url-shortener-service.p.rapidapi.com/shorten",
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "2abea73700mshf8385534a6b10d0p1b7749jsn11fa876ed6bb",
		"x-rapidapi-host": "url-shortener-service.p.rapidapi.com"
	},
	"data": {
		"url": url
	}
};

$.ajax(settings)
.done(function (response) {
	let returnURL = response.result_url;
	let returnHTML = `<h1>Your Shorten URL: </h1>
	<a  href='${returnURL}' target="_blank">${returnURL}</a>`
	$(".information").html(returnHTML)
	success = `<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>SUCCESS!</strong> Your Shorten URL has been generated.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
$(".error").html(success)
})
.fail(function(xhr, status, error){
	error = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
	<strong>ERROR!</strong> 400 Bad Request. Please Try again.
	<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>`
	$(".error").html(error)
})
});