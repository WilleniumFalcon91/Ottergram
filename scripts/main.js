var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';


function getImageInformation(imageUrl, titleText) {
    var imageSrc = document.querySelector(DETAIL_IMAGE_SELECTOR);
    imageSrc.setAttribute('src', imageUrl);

    var imageTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    imageTitle.textContent = titleText;
}