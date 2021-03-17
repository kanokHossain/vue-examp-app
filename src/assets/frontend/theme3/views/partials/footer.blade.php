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
?>
<!-- New Footer -->
<div class="footer-top-container">
    <div class="footer-top-content">
        <h4 class="footer-top-header">Contact</h4>
    </div>
    <div class="footer-top-bottom-content">
        <div class="d-inline-flex mr-50">
            <div class="icon-footer">
                <i class="fa fa-1x fa-phone icon-position"></i>
            </div>
            <p class="div-footer-icon-text">{{ $backend->phone }}</p>
        </div>
        <div class="d-inline-flex mr-50">
            <div class="icon-footer">
                <i class="fa fa-1x fa-envelope icon-position" style="left: 7px"></i>
            </div>
            <p class="div-footer-icon-text">{{ $backend->email }}</p>
        </div>
        <div class="d-inline-flex">
            <div class="icon-footer">
                <i class="fa fa-1x fa-home icon-position" style="left: 8px;"></i>
            </div>
            <p class="div-footer-icon-text">{{ $backend->saddress }}</p>
        </div>
    </div>
</div>

<div class="footer-container">
    <div class="container">
        <!-- Footer code start -->
        <div class="footer-section-div">
            <div class="text-center">
                <img class="img img-responsive img-fluid footer-logo" src="<?= base_url($frontendThemePath) ?>assets/images/eduslogo.png" alt="Image">
            </div>
        </div>
        <!-- Footer code end -->
    </div>
</div>