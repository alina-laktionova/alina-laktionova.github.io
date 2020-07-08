var detailedImage = document.querySelector('.detail-image');
var detailedTitle = document.querySelector('.detail-title');
var thumbnails = document.querySelectorAll('a');
var detailedContainer = document.querySelector('.detail-container');
var thumbnailsList = document.querySelector('.thumbnails-list');
var thumbnailsItem = document.querySelector('.thumbnails-item');

function showDetails() {
    detailedContainer.classList.remove('hidden');
    thumbnailsList.classList.remove('hidden');
    detailedImage.classList.add('is-tiny');
    detailedTitle.classList.add('coming-left');
    setTimeout(function () {
        detailedImage.classList.remove('is-tiny');
        detailedTitle.classList.remove('coming-left');
    }, 1);
}
function hideDetails() {
    detailedContainer.classList.add('hidden');
    thumbnailsList.classList.add('hidden');
}
function setDetails(thumbnail) {
    detailedImage.setAttribute('src',
        thumbnail.getAttribute('href'));
    detailedTitle.textContent = thumbnail.getAttribute('data-detailed-text');
}
function addListener(thumbnail) {
    thumbnail.addEventListener('click', function (event) {
        event.preventDefault();
        setDetails(thumbnail);
        showDetails();
    })
}
for (var i = 0; i < thumbnails.length; i++) {
    addListener(thumbnails[i]);
}
