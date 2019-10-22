let acc = document.getElementsByClassName("according");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    };
}

const accordions = document.querySelectorAll('.according__item .according__head');

for (const according of accordions) {
    according.onclick = () => {
        according.parentNode.classList.toggle('_active');
    }
}

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function () {

        $('body,html').animate({scrollTop: 0}, 800);

    });

});





