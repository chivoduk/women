$(document).ready(function () {
    $('.butn_menu_right').click(function () {
        $('.pop-up_menu').toggleClass('visible');
    });

    $('.item_search').click(function () {
        $('.search_form').toggleClass('search_form_visible');
    });

    var width_sample_price = Math.round($('.sample_price').width());
    var number_sample_price = $('.sample_price').length;

    $('.butn_toggle-right').click(function () {
        var margin_sample_price = $('#one').css('margin-left');
        
        if (isInteger((parseInt(margin_sample_price) / parseInt(width_sample_price)))) {
            if (parseInt(margin_sample_price) == parseInt(width_sample_price) * (number_sample_price - 1) * (-1)) {
                return;
            } else {
                $('#one').css('margin-left', parseInt(margin_sample_price) - parseInt(width_sample_price));
            }
        }
    });

    $('.butn_toggle-left').click(function () {
        var margin_sample_price = $('#one').css('margin-left');

        if (isInteger((parseInt(margin_sample_price) / parseInt(width_sample_price)))) {
            if (parseInt(margin_sample_price) == 0) {
                return;
            } else {
                $('#one').css('margin-left', parseInt(margin_sample_price) + parseInt(width_sample_price) );
            }
        }
    });


    function isInteger (number) {
        return (number ^ 0) == number;
    }
});

