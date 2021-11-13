
$(document).ready(function(){

// mob nav
    $('.open-nav').click(function(){
        $('.wrap-nav').addClass('open');
        $('.overlay').addClass('open');
    });
    $('.close-nav, .overlay').click(function(){
        $('.wrap-nav').removeClass('open');
        $('.overlay').removeClass('open');
    });


// niceSelect
    $('select').niceSelect();


    // $('select').niceSelect();
    $.fn.allTheClasses = function() {
        return this[0].className.split(' ').slice(1,this[0].length);
    }
    $('.nice-select .option').click(function () {
        var newClass = $(this).allTheClasses();
        $(this).parents('.nice-select').find('.current').attr('class', 'current ' + newClass);
    });

    tippy('[data-tippy-content]', {
        theme: 'light',
        animation: 'scale',
        maxWidth: 220
    });

    tippy('.social-list__btn--other', {
        theme: 'light',
        animation: 'scale',
        maxWidth: 275,
        trigger: 'click',
        placement: 'left-start',
        content(reference) {
            const id = reference.getAttribute('data-template');
            const template = document.getElementById(id);
            return template.innerHTML;
        },
        allowHTML: true,
    });


    // Слайдер отзывы

    $('.reviews-slider').slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
			}
		]
	});


        // Слайдер посты

        $('.post-slider').slick({
            infinite: true,
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
                }
            ]
        });



        inView.offset($(window).innerHeight() * 0.25)

        if ($('.main-content').length) {
            inView('.main-content')
                .on('enter', el => {
                    $(el).addClass('animate__animated animate__fadeInRight')
                })
        }

        if ($('.about').length) {
            inView('.about_items-top')
                .on('enter', el => {
                    $(el).addClass('animate__animated animate__fadeInLeft')
                })
        }

        if ($('.about').length) {
            inView('.about_items-bottom')
                .on('enter', el => {
                    $(el).addClass('animate__animated animate__fadeInRight')
                })
        }

        if ($('.withdrawal').length) {
            inView('.withdrawal-image')
                .on('enter', el => {
                    $(el).addClass('animate__animated animate__fadeInLeft')
                })
        }

        if ($('.program').length) {
            inView('.program_right')
                .on('enter', el => {
                    $(el).addClass('animate__animated animate__fadeInRight')
                })
        }

       

});
