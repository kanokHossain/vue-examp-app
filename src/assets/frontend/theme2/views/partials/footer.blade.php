<?php 
    $fblink = frontendData::get_frontend('facebook');
    $googlelink = frontendData::get_frontend('google');
    $twitterlink = frontendData::get_frontend('twitter');
    $youtubelink = frontendData::get_frontend('youtube');
    $linkedinlink = frontendData::get_frontend('linkedin');

    $fblink = strpos($fblink, "http") == 0 ? $fblink : $fblink ? "http://".$fblink : '';
    $googlelink = strpos($googlelink, "http") == 0 ? $googlelink : $googlelink ? "http://".$googlelink : '';
    $twitterlink = strpos($twitterlink, "http") == 0 ? $twitterlink : $twitterlink ? "http://".$twitterlink : '';
    $youtubelink = strpos($youtubelink, "http") == 0 ? $youtubelink : $youtubelink ? "http://".$youtubelink : '';
    $linkedinlink = strpos($linkedinlink, "http") == 0 ? $linkedinlink : $linkedinlink ? "http://".$linkedinlink : '';
    
?>

<div class="footer-top-container" style="margin-top: 200px">
    <div class="container footer-top-div">
        <div class="footer-top-paragraph"></div>
        <div class="footer-top-content">
            <h4 class="footer-top-header">{{namesorting($backend->sname, 100) }}</h4>
            <h6 class="footer-top-header-2">{{namesorting($backend->address, 100) }}, {{namesorting($backend->phone, 100) }},{{namesorting($backend->email, 100) }}</h6>
        </div>
        <div class="footer-top-bottom-content">
            <a href="{{ $fblink ? $fblink : '#' }}" class="ft-social-link social-facebook"><i class="fa fa-2x fa-facebook-square"></i></a>
            <a href="{{ $twitterlink ? $twitterlink : '#' }}" class="ft-social-link social-twitter"><i class="fa fa-2x fa-twitter-square"></i></a>
            <a href="{{ $youtubelink ? $youtubelink : '#' }}" class="ft-social-link social-youtube"><i class="fa fa-2x fa-youtube-square"></i></a>
            <a href="{{ $linkedinlink ? $linkedinlink : '#' }}" class="ft-social-link social-linkedin"><i class="fa fa-2x fa-linkedin-square"></i></a>
            <a href="{{ $googlelink ? $googlelink : '#' }}" class="ft-social-link social-instagram"><i class="fa fa-2x fa-instagram"></i></a>
        </div>
    </div>
</div>

<div class="footer-container">
    <div class="container">
        <!-- Footer code start -->
        <div class="footer-section-div">
            <div class="text-center">
                <img class="img img-responsive img-fluid footer-logo" src="<?= base_url($frontendThemePath) ?>assets/images/eduslogo.png"
                    alt="Image">
            </div>
        </div>
        <!-- Footer code end -->
    </div>
</div>
<!-- End Main content -->