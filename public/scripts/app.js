//toggles sidebar
    $('.toggler').on('click', function() {
        $('.ui.labeled.icon.sidebar').sidebar('toggle');
    });

// filepond

// Get a reference to the file input element
const inputElement = document.querySelector('input[type="file"]');

// Create a FilePond instance
const pond = FilePond.create(inputElement);