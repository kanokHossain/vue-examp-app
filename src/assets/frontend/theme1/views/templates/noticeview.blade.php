@layout('views/layouts/master')

@section('before_content')
<?php
if (isset($this->session->lang_data)) {
    if ($this->session->lang_data == "ban") {
        if ($noticeView->title_bangla) {
            $noticeView->title = $noticeView->title_bangla;
        }
    }
}
?>
<div class="page-title-row">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="page-title">{{ $noticeView->title }}</h3>
            </div>
        </div>
    </div>
</div>

@endsection


@section('content')

<div class="row">
    <div class="col-md-12">
        <p class="single-event-datetime" style="font-size: 15px">
            <i class="fa fa-calendar" style="margin-right: 0px"></i> {{ date('F j, Y', strtotime($noticeView->date)) }}
        </p>
        <p class="single-event-txt">{{ htmlspecialchars_decode($noticeView->notice) }}</p>
        <hr>
    </div>

    <div class="col-md-12 pad-left-0 pad-right-0" style="padding-top: 22px;">
        <div class="frame-section">
            <iframe src="{{ base_url('uploads/images/'.$noticeView->photo) }}" control='true'>
                <p>Your browser does not support iframes.</p>
            </iframe>
        </div>
        <div class="notice-download mb-40">
            <a href="{{ base_url('uploads/images/'.$noticeView->photo) }}" class="card-link event-read-more">Download</a>
        </div>
    </div>

</div>

@endsection