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
                @if(count($page_setting) > 0)
                @if($page_setting['show_page_title'] == "yes")
                <h3 class="page-title">{{ $page->title }}</h3>
                @endif
                @else
                <h3 class="page-title">{{ $page->title }}</h3>
                @endif
                <!--<h3 class="page-title">{{ $noticeView->title }}</h3>-->
            </div>
        </div>
    </div>
</div>
@endsection


@section('content')

<div class="single-notice-content">
    <div class="row">
        <div class="col-md-12">
            <?php
            if (isset($this->session->lang_data)) {
                if ($this->session->lang_data == "ban") {
                    if ($noticeView->title_bangla) {
                        $noticeView->title = $noticeView->title_bangla;
                    }
                }
            }
            ?>
            <div class="notice-text-area">
                <p class="notice-date">{{ date('F j, Y', strtotime($noticeView->date)) }}</p>
                <h3 class="notice-header">{{ $noticeView->title }}</h3>
                <p class="notice-text">{{ htmlspecialchars_decode($noticeView->notice) }}</p>
            </div>
        </div>
    </div>
    <div class="row margin-top60">
        <div class="col-md-12">
            <div class="frame-section">
                <iframe src="{{ base_url('uploads/images/'.$noticeView->photo) }}" control='true'>
                    <p>Your browser does not support iframes.</p>
                </iframe>
            </div>
        </div>
    </div>
</div>

@endsection