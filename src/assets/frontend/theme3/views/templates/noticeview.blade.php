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
<div class="page-heading">
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <div class="single-notice-header-date">
                    <div class="square-date bg-cl6">
                        <h5 class="content-header-text">{{ date('d', strtotime($noticeView->date)) }}</h5>
                        <p class="content-footer-text">{{ date('F Y', strtotime($noticeView->date)) }}</p>
                    </div>
                </div>

                <div class="single-notice-header">
                    <h3>{{ $noticeView->title }}</h3>
                </div>                       
            </div>
        </div>
    </div>
</div>
@endsection


@section('content')

<div class="container">
    <div class="notice-page-content">

        <div class="row">
            <div class="col-md-12">
                <div class="single-notice-content">
                    <p>{{ $noticeView->notice }}</p>
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
        <div class="row">
            <div class="col-md-12">
                <div class="notice-button">
                    <a href="#"><i class="fa fa-download" aria-hidden="true"></i>Download</a>



                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <h4 class="related-news">Related Notice</h4>
            </div>
        </div>
        <div class="row">
            <?php
            $colors = array("bg-cl1", "bg-cl2", "bg-cl3", "bg-cl4", "bg-cl5", "bg-cl6", "bg-cl7", "bg-cl8");
            ?>
            @foreach($related_notices as $key => $nt)
            <div class="col-md-4">
                <div class="notice-content-box">
                    <a href="#">
                        <div class="square">
                            <div class="notice-content-box-content {{ $colors[$key % 4] }}">
                                <div class="notice-content-box-header">
                                    <h5 class="content-header-text">{{ date('d', strtotime($nt->date)) }}</h5>
                                    <p class="content-footer-text">{{ date('F Y', strtotime($nt->date)) }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="notice-content-text">
                            <p class="notice-content-link-p">{{ $nt->title }}</p>
                            <p class="notice-content-link-p2">{{ $nt->notice }}</p>
                        </div>
                    </a>

                </div>
            </div>
            @endforeach

        </div>


    </div>
</div>
@endsection