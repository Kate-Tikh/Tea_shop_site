$(document).ready(() => {
    $('#products-container .products').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('#review-container .review-block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        rows: 0
    });


    $('.open-modal').click(() => {
        $('#reservation').css('display', 'flex');
    });

    $('.open-contact').click(() => {
        $('#contact-to-us').css('display', 'flex');
    });


    $('.reservation-cancel-close').click(() => {
        $('#reservation').hide();
        $('#mail-customer').hide();
        $('#contact-to-us').hide();


    });

    $('#contact-to-us').click((e) => {
        if (e.target.id === 'contact-to-us') {
            $('#contact-to-us').hide();
            location.reload();

        }
    });
    $('#mail-customer').click((e) => {
        if (e.target.id === 'mail-customer') {
            $('#mail-customer').hide();
            location.reload();
        }
    });
    $(' #reservation').click((e) => {
        if (e.target.id === 'reservation') {
            $('#reservation').hide();
            location.reload();
        }
    });



    $('#feedback-button > button').click(() => {
        let customer = $('#feedback-name');
        let call = $('#feedback-phone');

        if (customer.val() === "" || call.val() === "") {
            $('.reserve-error').show();
            return false

        } else {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'customer=' + customer.val() + '&call=' + call.val(),
                success: () => {
                    alert("Спасибо за Ваше обращение! Наш менеджер свяжется с вами в ближайшее время")
                    $('#contact-to-us').hide();
                },
                error: () => {
                    alert('Ошибка обработки заявки. Свяжитесь, пожалуйста, по номеру телефона')
                }
            });
            location.reload();

        }

    });

    $('#reserve-button > button').click(() => {
        let name = $('#name');
        let phone = $('#phone');

        if (name.val() && phone.val()) {
            $('#mail-customer').show();
            $('#reservation').hide();
            $('#mail-customer').css('display', 'flex');
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#mail-customer').show();
                    $('#reservation').hide();
                },
                error: () => {
                    $('#reservation').hide();
                    alert('Ошибка обработки заявки. Свяжитесь, пожалуйста, по номеру телефона')
                }

            });
            location.reload();
        } else {

            $('.reserve-error').show();
        }
    });
    $('#burger-icon').click(() => {
        $('#menu-header').classList.add('menu-open');
    });
    $('#menu-header ul li').click(() => {
        $('#header').removeClass('menu-open')
    });
});