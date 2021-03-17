<?php
$important_link_content = frontendData::get_frontend('important_link');
$sidebars = frontendData::get_sidebars();
?>



<div class="sidebar-container">
    @foreach($sidebars as $sidebar)
        @if($sidebar->title == 'notice' && $sidebar->status == 1)
            <!-- Notice area start -->
                <div class="tg-sidebar">
                    <!--Notice Code-->
                    <div class="widget-notice-content widget-notice notice-area" data-cursorcolor="#999">
                        <h5 class="notice-text">Notice Board</h5>
                        {{ frontendData::parse_shortcode('[ai:notices limit=5|class=area-relative ]') }}
                    </div>
                    <!--End Notice Code-->
                </div>
            <!-- Notice area end -->
        @endif
        @if($sidebar->title == 'calender' && $sidebar->status == 1)
            <!-- Calendar start -->
            <div class="jquery-calendar" id="demo2"></div>
            <!-- Calender end -->
        @endif
        @if($sidebar->title == 'important_links' && $sidebar->status == 1)
            <!-- Link sidebar area start -->
            {{ $important_link_content ? $important_link_content : '' }}
            <!-- Link sidebar area end -->
        @endif
        @if($sidebar->title == 'featured_videos' && $sidebar->status == 1)
            <?php $videos = json_decode($sidebar->data); ?>
            <!-- video start -->
            <div class="video-start">
                <p class="news_event_text">Featured Videos</p>

                <div class="row">
                    <?php foreach($videos as $video): ?>
                        <div class="col-md-12 sidebar-iframe">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" width="310" height="250" src="<?= $video; ?>" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <!-- video end -->
        @endif
    @endforeach
</div>