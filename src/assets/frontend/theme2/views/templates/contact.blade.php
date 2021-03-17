
@layout('views/layouts/master')


@section('before_content')
<div class="page-title-row">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <?php
                if (isset($this->session->lang_data)) {
                    if ($this->session->lang_data == "ban") {
                        if ($page->title_bangla) {
                            $page->title = $page->title_bangla;
                        }
                    }
                }
                ?>
                <!--<h2> {{ $page->title }} </h2>-->
                @if(count($page_setting) > 0)
                @if($page_setting['show_page_title'] == "yes")
                <h3 class="page-title">{{ $page->title }}</h3>
                @endif
                @else
                <h3 class="page-title">{{ $page->title }}</h3>
                @endif
                <!--<h3 class="page-title">Contact Us</h3>-->
            </div>
        </div>
    </div>
</div>
@endsection

@section('content')

<div class="container">
    <div class="row ov-h">
        <div class="col-md-12">
            <div class="contact-us">
                <div class="address-section">
                    <div class="row">
                        <div class="col-md-9">
                            <h3>General Office (Administrative Centre)</h3>
                            <p class="adr-info"><i class="fa fa-phone"></i>{{ $backend->phone }}</p>
                            <p class="adr-info"><i class="fa fa-envelope"></i>{{ $backend->email }}</p>
                            <p class="adr-info"><i class="fa fa fa-map-marker"></i>{{ $backend->saddress }}</p>
                            <!--<p class="adr-info"><i class="fa fa-clock-o"></i>Mondays to Fridays: 7am to 5.30pm Closed on Saturdays, Sundays and Public Holidays</p>-->
                        </div>
                        <div class="col-md-3">
                            <div class="teacher-social">
                                <ul>
                                    <li  class="social-facebook"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li class="social-whatsapp"><a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                    <li class="social-twitter"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li class="social-skype"><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                    <li class="social-youtube"><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!--                <div class="address-section margin-top60">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3>Security Supervisor (24h)</h3>
                                            <p class="adr-info"><i class="fa fa-envelope"></i>{{ $backend->email }}</p>
                                        </div>
                                    </div>
                                </div>
                
                                <div class="address-section margin-top60 ">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <h3>Admissions Office</h3>
                                            <p class="adr-info"><i class="fa fa-clock-o"></i>Mondays to Fridays: 7am to 5.30pm Closed on Saturdays, Sundays and Public Holidays</p>
                                        </div>
                
                                    </div>
                                </div>-->
                <div class="contact-us-form margin-top60">
                    <p>Use the details above or the contact form below, we'll be in contact with you as soon as we can.</p>
                    <form class="contact-us" action="{{ base_url('frontend/contactMailSend') }}" method="post">
                        <div class="row">
                            <div class="col-md-6">
                                <input id="send-email-name" class="form-control mb-4" type="text" name="name" placeholder="Your Name">
                            </div>

                            <div class="col-md-6">
                                <input id="send-email-email" class="form-control mb-4" type="email" name="email" placeholder="Your Email">
                            </div>
                            <div class="col-md-6">
                                <input id="send-email-subject" class="form-control mb-4" type="text" name="subject" placeholder="Subject">
                            </div>
                            <div class="col-md-6">
                                <textarea name="message" class="form-control mb-4" id="send-email-message" maxlength="550" placeholder="Message..."></textarea>
                            </div>
                            <div class="col">
                                <button type="submit" class="btn btn-primary btn-submit btn-submit-lg" name="ok" class="send-btn" id="send-email">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="google-map margin-top60">
                    <div class="row">
                        <div class="col-md-12">
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
                                        height: 350px;
                                        width: 100%;
                                    }

                                    .gmap_canvas {
                                        overflow: hidden;
                                        background: none !important;
                                        height: 350px;
                                        width: 100%;
                                    }

                                </style>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</div>


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