$(document).ready(function () {
    $('#prevButton').click(function (e) {
        e.preventDefault();
        slide($('#carousel'), -1);
    });

    $('#nextButton').click(function (e) {
        e.preventDefault();
        slide($('#carousel'), 1);
    });

    function slide(carousel, direction) {
        carousel.stop();

        if (direction == 1) {
            var firstImage = carousel.find('.carousel-image:first');
            var imageWidth = firstImage.outerWidth(true);

            carousel.animate({ 'scrollLeft': '+=' + imageWidth }, 1000);
        }
        if (direction == -1) {
            var lasttImage = carousel.find('.carousel-image:last');
            var imageWidth = lasttImage.outerWidth(true);

            carousel.animate({ 'scrollLeft': '-=' + imageWidth }, 1000);
        }

    }





});