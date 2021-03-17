<?php
$fblink = frontendData::get_frontend('facebook');
$googlelink = frontendData::get_frontend('google');
$twitterlink = frontendData::get_frontend('twitter');
$youtubelink = frontendData::get_frontend('youtube');
$linkedinlink = frontendData::get_frontend('linkedin');

$fblink = strpos($fblink, "http") == 0 ? $fblink : $fblink ? "http://" . $fblink : '';
$googlelink = strpos($googlelink, "http") == 0 ? $googlelink : $googlelink ? "http://" . $googlelink : '';
$twitterlink = strpos($twitterlink, "http") == 0 ? $twitterlink : $twitterlink ? "http://" . $twitterlink : '';
$youtubelink = strpos($youtubelink, "http") == 0 ? $youtubelink : $youtubelink ? "http://" . $youtubelink : '';
$linkedinlink = strpos($linkedinlink, "http") == 0 ? $linkedinlink : $linkedinlink ? "http://" . $linkedinlink : '';

$events = frontendData::get_latest_events();

?>


<div class="container-fluid footer-top">
    <div class="container">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-3">
                <div class="footer-box">
                    <h3>About Us</h3>
                    <p class="footer-box-text mb-40">
                        {{ $backend->sname }}<br>
                        {{ $backend->address }}
                    </p>
                    <div class="social-block">
                        <ul>
                            @if($fblink)
                            <li><a href="{{ $fblink }}" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            @endif
                            @if($youtubelink)
                            <li><a href="{{ $youtubelink }}" target="_blank"><i class="fa fa-youtube"></i></a></li>
                            @endif
                            @if($twitterlink)
                            <li><a href="{{ $twitterlink }}" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            @endif
                            @if($googlelink)
                            <li><a href="{{ $googlelink }}" target="_blank"><i class="fa fa-google"></i></a></li>
                            @endif
                            @if($linkedinlink)
                            <li><a href="{{ $linkedinlink }}" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                            @endif
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="footer-box">
                    <h3>Stay In Touch</h3>
                    <p class="footer-contact-header"></p>
                    <p class="footer-box-text mb-40">Phone : {{namesorting($backend->phone, 100) }}<br>Email : {{namesorting($backend->email, 100) }}</p>
                </div>
            </div>

            <div class="col-md-3">
                <div class="footer-box">
                    <h3>Recent Events</h3>
                    <div class="latest-work-gallery">
                        <ul>
                            <?php foreach ($events as $ev): ?>
                                <li><a href="<?= base_url('frontend/event/' . $ev->eventID) ?>"><img src="<?= base_url('uploads/images/' . $ev->photo) ?>"></a></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>

            </div>
            <div class="col-md-1"></div>
        </div>
    </div>
</div>

<div class="container-fluid footer-container">
    <!-- Footer code start -->
    <h4 class="footer-powered-by">Powered By</h4>
    <img class="img img-responsive img-fluid footer-logo" src="<?= base_url($frontendThemePath) ?>assets/images/eduslogo.png" alt="Image">
    <p class="copyright">&copy;Braintect Sytems Ltd.</p>
    <!-- Footer code end -->
</div>
