function showReview(){
    //document.querySelector('.review-con').style.opacity = '100';
    //document.querySelector('.product-img').style.filter = 'brightness(0.4)';
    document.querySelector('.review-con').classList.toggle('hover-review');
    document.querySelector('.product-img').classList.toggle("hover-img");
}
function hideReview(){
    //document.querySelector('.review-con').style.opacity = '0';
    //document.querySelector('.product-img').style.filter = 'brightness(1)';
    document.querySelector('.review-con').classList.toggle('hover-review');
    document.querySelector('.product-img').classList.toggle("hover-img");
}