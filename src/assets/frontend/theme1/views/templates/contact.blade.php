
@layout('views/layouts/master')


@section('content')

<div class="container">
    <div class="row">
        <div class="col-md-12 contact-us-heading">
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
            <h6 class="heading-txt">{{ $page->title }}</h6>
            @endif
            @else
            <h6 class="heading-txt">{{ $page->title }}</h6>
            @endif
            <p class="heading-pr">Get In Touch</p>
            <hr class="heading-line-break">
        </div>
        <div class="col-md-6">
            <form action="{{ base_url('frontend/contactMailSend') }}" method="post">
                <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress" name="name" placeholder="Name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress" name="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputAddress" name="subject" placeholder="Subject">
                </div>
                <div class="form-group">
                    <textarea class="form-control" name="message" id="inputAddress" placeholder="Message"
                              style="height: 120px"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block btn-message">Send Message</button>
            </form>
        </div>
        <div class="col-md-6">
            <div class="about-us">
                <h6 class="about-us-heading">Don't hasitate to stay in touch</h6>
                <p class="about-us-text">Our working hours in 8:00am - 20:00pm<br>
                    Call us, email or send us a message.
                </p>
            </div>
            <div class="icon-footer">
                <i class="fa fa-1x fa-phone icon-position"></i>
                <p class="div-footer-icon-text">0147410114444</p>
            </div>
            <div class="icon-footer">
                <i class="fa fa-1x fa-envelope icon-position" style="left: 7px"></i>
                <p class="div-footer-icon-text">demo@mail.com</p>
            </div>
            <div class="icon-footer">
                <i class="fa fa-1x fa-home icon-position" style="left: 8px;"></i>
                <p class="div-footer-icon-text">Malibag 260, Dhaka Bangladesh</p>
            </div>
        </div>
    </div>
</div>

<div class="container" style="margin-bottom: 80px;">
    <div class="map-section">
        @if(frontendData::get_map_link())
            <iframe src="{{ frontendData::get_map_link() }}" frameborder="0" style="border:0;width: 100%;height: 400px;" allowfullscreen></iframe>
        @endif
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