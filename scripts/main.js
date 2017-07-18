var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';


function getImageInformation(imageUrl, titleText) {
    var imageSrc = document.querySelector(DETAIL_IMAGE_SELECTOR);
    imageSrc.setAttribute('src', imageUrl);

    var imageTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    imageTitle.textContent = titleText;
}

function getImageFromThumbnail(thumbnail) {
    return  thumbnail.getAttribute('data-image-url');
}

function getTitleFromThumbnail(thumbnail) {
    return  thumbnail.getAttribute('data-image-title');
}

function combineThumbnailInformation (thumbnail) {
    getImageInformation(getImageFromThumbnail(thumbnail), getTitleFromThumbnail(thumbnail));
}

function addThumbnailClickEvent(thumb) {
    thumb.addEventListener('click', function (event) {
        event.preventDefault();
        combineThumbnailInformation(thumb);
    });
}

function turnThumbnailsIntoArray() {
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailsArray = [].slice.call(thumbnails);
    return thumbnailsArray;
}


function randomLoadImage(luckyOtter) {
    document.addEventListener('DOMContentLoaded', function (event) {
        var thumbnails = turnThumbnailsIntoArray();
        var number = Math.floor(Math.random() * (thumbnails.length - 1));
        combineThumbnailInformation(thumbnails[number]); 
    });
}

function makeItHappen() {
    var thumbnails = turnThumbnailsIntoArray();
    thumbnails.forEach(addThumbnailClickEvent);
    randomLoadImage();
}

makeItHappen();