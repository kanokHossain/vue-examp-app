

<!-- all js here -->
<script src="<?= base_url($frontendThemePath . 'assets/js/vendor/jquery-1.12.0.min.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/bootstrap.min.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/owl.carousel.min.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/smoothscroll.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/waypoints.min.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/venobox.min.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/jquery.counterup.min.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/jquery.easing.1.3.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/headhesive.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/sticky-head.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/plugins.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/main.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/js/lightbox.min.js') ?>"></script>

<script src="<?= base_url($frontendThemePath . 'assets/iniPlaylist/iniplaylist.js') ?>"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="<?= base_url($frontendThemePath . 'assets/toastr/toastr.min.js') ?>"></script>
<script type="text/javascript" src="<?= base_url($frontendThemePath . 'assets/fullcalendar/lib/jquery-ui.min.js') ?>"></script>
<script src="<?= base_url($frontendThemePath . 'assets/fullcalendar/lib/moment.min.js') ?>"></script>
<script type="text/javascript" src="<?= base_url($frontendThemePath . 'assets/fullcalendar/fullcalendar.min.js') ?>"></script>

<div id="scroll"><i class="fa fa-angle-up"></i></div>
<script type="text/javascript">
    $(function () {
        $('.nav a').filter(function () {
            return this.href == location.href
        }).parent().addClass('active').siblings().removeClass('active')
        $('.nav a').click(function () {
            $(this).parent().addClass('active').siblings().removeClass('active')
        })
    })

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
</script>


<script type="application/javascript">
    $(function() {
    $('#calendar').fullCalendar({
    theme: true,
    customButtons: {
    reload: {
    text: 'Reload',
    click: function() {
    //you code
    }
    }
    },
    header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay,listMonth'
    },
    // firstDay: 3,
    navLinks: true, // can click day/week names to navigate views
    editable: false,
    eventLimit: true, // allow "more" link when too many events
    events: [
    <?php
    foreach ($events as $event) {
        echo '{';
        echo "title: '" . $event->title . "', ";
        echo "start: '" . $event->fdate . "T" . $event->ftime . "', ";
        echo "end: '" . $event->tdate . "T" . $event->ttime . "', ";
        echo "url:'" . base_url('event/view/' . $event->eventID) . "', ";
        echo "color  : '#5C6BC0'";
        echo '},';
    }

    foreach ($holidays as $holiday) {
        echo '{';
        echo "title: '" . $holiday->title . "', ";
        echo "start: '" . $holiday->fdate . "', ";
        echo "end: '" . $holiday->tdate . "', ";
        echo "url:'" . base_url('holiday/view/' . $holiday->holidayID) . "', ";
        echo "color  : '#C24984'";
        echo '},';
    }
    ?>
    ]
    });
    });
</script>
<script>
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }
</script>
<script>
    function myFunctionpros() {
        var prosdots = document.getElementById("prosdots");
        var prosmore = document.getElementById("prosmore");
        var btnText = document.getElementById("myprosBtn");

        if (prosdots.style.display === "none") {
            prosdots.style.display = "inline";
            btnText.innerHTML = "Read more";
            prosmore.style.display = "none";
        } else {
            prosdots.style.display = "none";
            btnText.innerHTML = "Read less";
            prosmore.style.display = "inline";
        }
    }
</script>
<script>
    $('.myClass').click(function () {
        var categoryId = $(this).attr('id');
        var base_url = location.protocol + '//' + location.host + '/edus/';
        $.ajax({
            url: base_url + 'photoCategory/getPhotos',
            type: "POST",
            data: {'categoryId': categoryId},
            cache: false,
            success: function (msg) {
                $('#display-back').css('display', 'block');
                $('#photo-div').css('display', 'block');
                $('#category-div').css('display', 'none');
                $('#photo-div').html(msg);
            },
            error: function () {
                alert('Error Occur...');
            }
        });
    });
    
    $('#gallery-back').click(function() {
        $('#photo-div').css('display', 'none');
        $('#display-back').css('display', 'none');
        $('#category-div').css('display', 'block');
    });
</script>
<script>
    AOS.init();
</script>
<script>
	$(function(){
		var $gallery = $('.gallery a').simpleLightbox();

		$gallery.on('show.simplelightbox', function(){
			console.log('Requested for showing');
		})
		.on('shown.simplelightbox', function(){
			console.log('Shown');
		})
		.on('close.simplelightbox', function(){
			console.log('Requested for closing');
		})
		.on('closed.simplelightbox', function(){
			console.log('Closed');
		})
		.on('change.simplelightbox', function(){
			console.log('Requested for change');
		})
		.on('next.simplelightbox', function(){
			console.log('Requested for next');
		})
		.on('prev.simplelightbox', function(){
			console.log('Requested for prev');
		})
		.on('nextImageLoaded.simplelightbox', function(){
			console.log('Next image loaded');
		})
		.on('prevImageLoaded.simplelightbox', function(){
			console.log('Prev image loaded');
		})
		.on('changed.simplelightbox', function(){
			console.log('Image changed');
		})
		.on('nextDone.simplelightbox', function(){
			console.log('Image changed to next');
		})
		.on('prevDone.simplelightbox', function(){
			console.log('Image changed to prev');
		})
		.on('error.simplelightbox', function(e){
			console.log('No image found, go to the next/prev');
			console.log(e);
		});
	});
</script>

<script>
	$(function(){
		var $pgallery = $('.pgallery a').simpleLightbox();

		$pgallery.on('show.simplelightbox', function(){
			console.log('Requested for showing');
		})
		.on('shown.simplelightbox', function(){
			console.log('Shown');
		})
		.on('close.simplelightbox', function(){
			console.log('Requested for closing');
		})
		.on('closed.simplelightbox', function(){
			console.log('Closed');
		})
		.on('change.simplelightbox', function(){
			console.log('Requested for change');
		})
		.on('next.simplelightbox', function(){
			console.log('Requested for next');
		})
		.on('prev.simplelightbox', function(){
			console.log('Requested for prev');
		})
		.on('nextImageLoaded.simplelightbox', function(){
			console.log('Next image loaded');
		})
		.on('prevImageLoaded.simplelightbox', function(){
			console.log('Prev image loaded');
		})
		.on('changed.simplelightbox', function(){
			console.log('Image changed');
		})
		.on('nextDone.simplelightbox', function(){
			console.log('Image changed to next');
		})
		.on('prevDone.simplelightbox', function(){
			console.log('Image changed to prev');
		})
		.on('error.simplelightbox', function(e){
			console.log('No image found, go to the next/prev');
			console.log(e);
		});
	});
</script>

@yield('footerAssetPush')