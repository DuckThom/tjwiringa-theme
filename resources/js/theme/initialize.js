let $nav;

let checkDistanceToTop = function () {
    if (window.scrollY === 0) {
        $nav.classList.add('navbar-transparent');
    } else {
        $nav.classList.remove('navbar-transparent');
    }
};

$(function () {
    $nav = document.getElementById('navigation');

    $(window).on('scroll', checkDistanceToTop);
    checkDistanceToTop();
});
