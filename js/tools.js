$(document).ready(function () {
    $(window).scroll(function (event) {
        let s = $(this).scrollTop();
        let w = $(this).outerWidth();
        let h = $('.content').outerHeight();
        let h_b = $('.parallax').outerHeight();
        let p = s / h * 100;
        let p_b = s / h_b * 100;
        let o = 1 - 1 / 150 * p_b;
        let o_2 = 1 - 1 / 450 * p_b;
        let o_3 = 1 - 1 / 550 * p_b;
        let o_4 = 1 - 1 / 850 * p_b;

        if (p <= 78) {
            let z_1 = 1 + (w / 10000 * p_b);
            $('.parallax__fog').css('transform', 'scale(' + z_1 + ')');
            $('.parallax__fog').css('opacity', o);

            let z_2 = 1 + (w / 2000000 * p);
            $('.parallax__city_1').css('transform', 'scale(' + z_2 + ')');
            $('.parallax__city_1').css('opacity', o_2);


            let hr = w / 2000 * p_b;
            let z_3 = 1 + (w * 0.00002 * p_b);
            $('.parallax__city_2').css('transform', 'translate3d(' + hr + 'px, 0, 0) scale(' + z_3 + ')');
            $('.parallax__city_2').css('opacity', o_3);


            let hr_2 = w / -650 * p_b;
            let z_4 = 1 + (w * 0.000003 * p_b);
            $('.parallax__city_3').css('transform', 'translate3d(' + hr_2 + 'px, 0, 0) scale(' + z_4 + ')');
            $('.parallax__city_3').css('opacity', o_4);
        }

    });
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    // MODAL

    const itemBtn_1 = $('#item_1');
    const itemBtn_2 = $('#item_2');
    const itemBtn_3 = $('#item_3');
    const itemBtn_4 = $('#item_4');
    const itemBtn_5 = $('#item_5');
    const itemBtn_6 = $('#item_6');
    const itemBtn_7 = $('#item_7');


    const modalBg = $('#modal_bg');
    const modalGifs = $('.modal_gifs');
    const modalGifs1 = $('#modal_gifs_1');
    const modalGifs2 = $('#modal_gifs_2');
    const modalGifs3 = $('#modal_gifs_3');
    const modalGifs4 = $('#modal_gifs_4');
    const modalGifs5 = $('#modal_gifs_5');
    const modalGifs6 = $('#modal_gifs_6');
    const modalGifs7 = $('#modal_gifs_7');


    itemBtn_1.on('click', () => {
        modalBg.css('display', 'block');
        modalGifs1.css({
            'display': 'block',
        });
    });

    itemBtn_2.on('click', () => {
        modalBg.css('display', 'block');
        modalGifs2.css({
            'display': 'block',
        });
    });
    itemBtn_3.on('click', () => {
        modalBg.css('display', 'block');
        modalGifs3.css({
            'display': 'block',
        });
    });
    itemBtn_4.on('click', () => {
        modalBg.css('display', 'block');
        modalGifs4.css({
            'display': 'block',
        });
    });
    itemBtn_5.on('click', () => {
        modalBg.css('display', 'block');
        modalGifs5.css({
            'display': 'block',
        });
    });
    itemBtn_6.on('click', () => {
        modalBg.css('display', 'block');
        modalGifs6.css({
            'display': 'block',
        });
    });
    itemBtn_7.on('click', () => {
        modalBg.css('display', 'block');
        modalGifs7.css({
            'display': 'block',
        });
    });

    // itemBtn_1.on('click', () => {
    //     modalBg.css('display', 'block');
    //     modalGifs.css({
    //         'display': 'block',
    //         'background': 'url(../uploads/mobile_adoption.gif) center center no-repeat'
    //     });
    // });

    // itemBtn_2.on('click', () => {
    //     modalBg.css('display', 'block');
    //     modalGifs.css({
    //         'display': 'block',
    //         'background': 'url(../uploads/chat.gif) center center no-repeat'
    //     });
    // });

    // itemBtn_3.on('click', () => {
    //     modalBg.css('display', 'block');
    //     modalGifs.css({
    //         'display': 'block',
    //         'background': 'url(../uploads/chuck_norris.gif) center center no-repeat'
    //     });
    // });

    // itemBtn_4.on('click', () => {
    //     modalBg.css('display', 'block');
    //     modalGifs.css({
    //         'display': 'block',
    //         'background': 'url(../uploads/cocktail_search.gif) center center no-repeat'
    //     });
    // });

    // itemBtn_5.on('click', () => {
    //     modalBg.css('display', 'block');
    //     modalGifs.css({
    //         'display': 'block',
    //         'background': 'url(../uploads/sapeur.gif) center center no-repeat'
    //     });
    // });

    // itemBtn_6.on('click', () => {
    //     modalBg.css('display', 'block');
    //     modalGifs.css({
    //         'display': 'block',
    //         'background': 'url(../uploads/spents_graphic.gif) center center no-repeat'
    //     });
    // });

    // itemBtn_7.on('click', () => {
    //     modalBg.css('display', 'block');
    //     modalGifs.css({
    //         'display': 'block',
    //         'background': 'url(../uploads/kiosque.gif) center center no-repeat'
    //     });
    // });



    modalBg.on('click', () => {
        modalGifs.css('display', 'none');
        modalBg.css('display', 'none');
    });

});