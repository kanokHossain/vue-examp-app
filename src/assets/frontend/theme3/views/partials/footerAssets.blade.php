<script src="<?= base_url($frontendThemePath) ?>assets/js/popper.min.js"></script>
<script src="<?= base_url($frontendThemePath) ?>assets/js/bootstrap.min.js"></script>
<script src="<?= base_url($frontendThemePath) ?>assets/js/lightbox.min.js"></script>
<!-- calender js -->
<script src="<?= base_url($frontendThemePath) ?>assets/js/jquery.datetimepicker.js"></script>
<script>
    $(document).ready(function () {
        if ($.fn.datepicker) {
            $('.datepicker').datepicker({
                format: 'dd-mm-yyyy'
            });
        }
        $(".scrollbox").each(function (index) {
            $(this).niceScroll({cursorborder: "", cursorcolor: $(this).data("cursorcolor"), boxzoom: false});
        });

        $(window).on("resize", function () {
            setTimeout(function () {
                $(".scrollbox").getNiceScroll().resize();
            }, 600);
        });

        $(".owl-carousel").owlCarousel({
            autoPlay: 1000, //Set AutoPlay to 3 seconds
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true
        });

        $(".regular").slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });


        // calender
        $('#demo2').datetimepicker({
            date: new Date(),
            viewMode: 'YMD',
            onDateChange: function () {
                // $('#date-text2').text(this.getText());
                // $('#date-text-ymd2').text(this.getText('YYYY-MM-DD'));
                // $('#date-value2').text(this.getValue());
            }
        });
        
        $('#campus').change(function (event) {
            var campusID = $(this).val();
            if (campusID === '0') {
                $('#classesID').val(0);
            } else {
                $.ajax({
                    async: false,
                    type: 'POST',
                    url: "<?= base_url('frontend/classcall') ?>",
                    data: "id=" + campusID,
                    dataType: "html",
                    success: function (data) {
                        $('#classesID').html(data);
                    }
                });
    
    
            }
        });
    });
</script>


<script>
    $(function () {
        if ($('.gallery a').length > 0) {
            var $gallery = $('.gallery a').simpleLightbox();

            $gallery.on('show.simplelightbox', function () {
                console.log('Requested for showing');
            })
                    .on('shown.simplelightbox', function () {
                        console.log('Shown');
                    })
                    .on('close.simplelightbox', function () {
                        console.log('Requested for closing');
                    })
                    .on('closed.simplelightbox', function () {
                        console.log('Closed');
                    })
                    .on('change.simplelightbox', function () {
                        console.log('Requested for change');
                    })
                    .on('next.simplelightbox', function () {
                        console.log('Requested for next');
                    })
                    .on('prev.simplelightbox', function () {
                        console.log('Requested for prev');
                    })
                    .on('nextImageLoaded.simplelightbox', function () {
                        console.log('Next image loaded');
                    })
                    .on('prevImageLoaded.simplelightbox', function () {
                        console.log('Prev image loaded');
                    })
                    .on('changed.simplelightbox', function () {
                        console.log('Image changed');
                    })
                    .on('nextDone.simplelightbox', function () {
                        console.log('Image changed to next');
                    })
                    .on('prevDone.simplelightbox', function () {
                        console.log('Image changed to prev');
                    })
                    .on('error.simplelightbox', function (e) {
                        console.log('No image found, go to the next/prev');
                        console.log(e);
                    });
        }
    });
</script>

<script>
    $(function () {
        if ($('.pgallery a').length > 0) {
            var $pgallery = $('.pgallery a').simpleLightbox();

            $pgallery.on('show.simplelightbox', function () {
                console.log('Requested for showing');
            })
                    .on('shown.simplelightbox', function () {
                        console.log('Shown');
                    })
                    .on('close.simplelightbox', function () {
                        console.log('Requested for closing');
                    })
                    .on('closed.simplelightbox', function () {
                        console.log('Closed');
                    })
                    .on('change.simplelightbox', function () {
                        console.log('Requested for change');
                    })
                    .on('next.simplelightbox', function () {
                        console.log('Requested for next');
                    })
                    .on('prev.simplelightbox', function () {
                        console.log('Requested for prev');
                    })
                    .on('nextImageLoaded.simplelightbox', function () {
                        console.log('Next image loaded');
                    })
                    .on('prevImageLoaded.simplelightbox', function () {
                        console.log('Prev image loaded');
                    })
                    .on('changed.simplelightbox', function () {
                        console.log('Image changed');
                    })
                    .on('nextDone.simplelightbox', function () {
                        console.log('Image changed to next');
                    })
                    .on('prevDone.simplelightbox', function () {
                        console.log('Image changed to prev');
                    })
                    .on('error.simplelightbox', function (e) {
                        console.log('No image found, go to the next/prev');
                        console.log(e);
                    });
        }
    });
</script>

<script>
    function changeLang(value) {
        console.log(value);
        $.ajax({
            url: "<?php echo base_url(); ?>ajax/change_language",
            method: "POST",
            data: {'lang_data': value},
            success: function (data) {
                location.reload(true);
            }
        });
    }
</script>