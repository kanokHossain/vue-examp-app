@layout('views/layouts/master')

@section('before_content')
<div class="container-fluid">
    <div class="row ">

        <!-- Slide area start -->
        <div class="col-md-12 banner pad-left-0 pad-right-0">
            <div class="page-header bg-contact">
                <div class="container">
                    <h3>{{ $page->title }}</h3>
<!--                    <p>Sumpol Text Sumpol Text Sumpol Text Sumpol Text Sumpol Text Sumpol Text Sumpol Text</p>-->

                </div>
            </div>
        </div>
        <!-- Slide area end -->

    </div>
</div>
<div class="container-fluid feature-top-img">
    <!-- <img class="img img-responsive custom-img-width" src="assets/images/Layer 6.png"> -->
</div>
@endsection

@section('content')

@if(count($sliders))
<div id="main-slider" class="slider-area">
    @foreach($sliders as $slider)
    <div class="single-slide">
        <img src="{{ base_url('uploads/gallery/'.$slider->file_name) }}" alt="">
        <div class="banner-overlay">
            <div class="container">
                <div class="caption style-2">
                    <h2>{{ sentenceMap(htmlspecialchars_decode($slider->file_title), 17, '<span>', '</span>') }}</h2>
                    <p>{{ htmlspecialchars_decode($slider->file_description) }}</p>
                </div>
            </div>
        </div>
    </div>
    @endforeach
</div>
@endif

@if(count($featured_image))
<div class="featured-slider">
    <img src="{{ base_url('uploads/gallery/'.$featured_image->file_name) }}" alt="{{ $featured_image->file_alt_text }}">
</div>
@endif


<div class="container">
    <div class="contact-us-contact">
        <div class="row">
            <div class="col-md-4">
                <div class="contact-us-content-box">
                    <div class="content-icon-box"><img class="contact-us-icon" src="<?= base_url($frontendThemePath) ?>assets/images/map%20(2).png"></div>
                    <div class="content-text">
                        <h3>Address</h3>
                        <p>{{ $backend->saddress }}</p>
                    </div>

                </div>
            </div>
            <div class="col-md-4">
                <div class="contact-us-content-box">
                    <div class="content-icon-box"><img class="contact-us-icon" src="<?= base_url($frontendThemePath) ?>assets/images/phone%20(2).png"></div>
                    <div class="content-text">
                        <h3>Mobile</h3>
                        <p>{{ $backend->phone }}</p>
                    </div>

                </div>
            </div>

            <div class="col-md-4">
                <div class="contact-us-content-box">
                    <div class="content-icon-box"><img class="contact-us-icon" src="<?= base_url($frontendThemePath) ?>assets/images/mail%20(2).png"></div>
                    <div class="content-text">
                        <h3>Email</h3>
                        <p>{{ $backend->email }}</p>
                    </div>

                </div>
            </div>

        </div>


    </div>

</div>


<div class="container-fluid bg-contact-map" style="margin-bottom: 80px;">
    <div class="map-section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="map">
                        <h3>MAP</h3>
                        <div class="map-box">
                            <div class="mapouter">
                                <div class="gmap_canvas">
                                    @if(frontendData::get_map_link())
                                        <iframe width="1080" height="1080" id="gmap_canvas" src="{{ frontendData::get_map_link() }}" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                    @endif
                                </div>
                                <style>
                                    .mapouter {
                                        position: relative;
                                        text-align: left;
                                        height: 100%;
                                        width: 100%;
                                    }

                                    .gmap_canvas {
                                        overflow: hidden;
                                        background: none !important;
                                        height: 100%;
                                        width: 100%;
                                        border-radius: 12px;
                                    }

                                </style>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3>Write Us</h3>
                    <div class="write-us">
                        <form id="contact-form" class="contact-us-form" action="{{ base_url('frontend/contactMailSend') }}" method="post">
                            <input type="text" class="form-control" name="name" placeholder="Your Name">
                            <input type="email" class="form-control" name="email" placeholder="Your Email">
                            <input type="text" class="form-control" name="subject" placeholder="Subject">
                            <textarea rows="5" class="form-control" name="message" placeholder="Your Message"></textarea>
                            <button type="submit" name="ok" class="btn btn-send send-btn" id="send-email">Send</button>
                        </form>
                        <p class="form-messege"></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<!--Start Our Contact Us Area -->

<!--End Our Contact Us Area -->


<!-- Start About Content -->
<!--<section id="about" class="">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main-about">
                    <p> {{ htmlspecialchars_decode($page->content) }} </p>
                </div>
            </div>
        </div>
    </div>
</section>-->
<!-- Close About Content -->

@endsection

@section('footerAssetPush')
<script>
    var counterLength = document.querySelector('#send-email-message');
    document.getElementById('counter__length').innerHTML = counterLength.getAttribute('maxlength');
    function val(e) {
        var attrLength = counterLength.getAttribute('maxlength');
        var currentLength = counterLength.value.length;
        var totalLength = attrLength - currentLength;
        document.querySelector('#counter__length').innerHTML = totalLength;
        if (e.keyCode === 8) {
            document.querySelector('#counter__length').innerHTML = totalLength++;
        }
    }
    counterLength.addEventListener("keyup", val, false);


    function check_email(email) {
        var status = false;
        var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (email.search(emailRegEx) == -1) {
            $("#to_error").html('');
            $("#to_error").html("<?= $this->lang->line('mail_valid') ?>").css("text-align", "left").css("color", 'red');
        } else {
            status = true;
        }
        return status;
    }

    $(document).on('click', '#send-email', function () {
        var error = 0;
        var name = $('#send-email-name').val();
        var email = $('#send-email-email').val();
        var subject = $('#send-email-subject').val();
        var message = $('#send-email-message').val();


        if (name == '') {
            error++;
            $('#send-email-name').css("border-color", 'red');
        } else {
            $('#send-email-name').css("border-color", '');
        }

        if (email == '') {
            error++;
            $('#send-email-email').css("border-color", 'red');
        } else {
            $('#send-email-email').css("border-color", '');
        }

        if (subject == '') {
            error++;
            $('#send-email-subject').css("border-color", 'red');
        } else {
            $('#send-email-subject').css("border-color", '');
        }

        if (message == '') {
            error++;
            $('#send-email-message').css("border-color", 'red');
        } else {
            $('#send-email-message').css("border-color", '');
        }

        if (check_email(email) == false) {
            error++;
            $('#send-email-email').css("border-color", 'red');
        } else {
            $('#send-email-email').css("border-color", '');
        }

        if (error <= 0) {
            $.ajax({
                type: 'POST',
                url: "<?= base_url('frontend/contactMailSend') ?>",
                data: {'name': name, 'email': email, 'subject': subject, 'message': message},
                dataType: "html",
                success: function (data) {
                    if (data = 'success') {
                        location.reload();
                    }
                }
            });

        }
    });

</script>


@if($this->session->flashdata('success'))
<script type="text/javascript">
    toastr["success"]("<?= $this->session->flashdata('success'); ?>")
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "500",
        "hideDuration": "500",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
</script>
@endif

@if($this->session->flashdata('error'))
<script type="text/javascript">
    toastr["error"]("<?= $this->session->flashdata('error'); ?>")
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "500",
        "hideDuration": "500",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
</script>
@endif
@endsection