$(document).ready(function() {
    $('#startButton').click(function() {
        $(this).prop('disabled', true); 
        slide($('#carousel'), function() {
            $('#startButton').prop('disabled', false); 
        });
    });

    function slide(carousel, callback) {
        var firstImage = carousel.find('.carousel-image:first');
        var imageWidth = firstImage.outerWidth(true);

        if (carousel.scrollLeft() + carousel.width() >= carousel[0].scrollWidth) {
            carousel.append(firstImage.clone());
            firstImage.remove();
            carousel.scrollLeft(carousel.scrollLeft() - imageWidth);
        }

        carousel.animate({ 'scrollLeft': '+=' + imageWidth }, 1000, callback);
    }



});