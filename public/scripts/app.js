//toggles sidebar
    $('.toggler').on('click', function() {
        $('.ui.labeled.icon.sidebar').sidebar('toggle');
    });

// Themes

$('#theme-selector').on("change", (e) => {
    $("html").css("--primary", e.target.value);
    let theme = e.target.value;
    localStorage.setItem("theme", theme);
});
const currentTheme = localStorage.getItem("theme");

function checkTheme(){
    $("html").css("--primary", currentTheme);
}

window.onload = checkTheme();

// filepond

// Get a reference to the file input element
const inputElement = document.querySelector('input[type="file"]');

// Create a FilePond instance
const pond = FilePond.create(inputElement);


const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
  } else {
    document.body.classList.toggle("dark-theme");
  }
});