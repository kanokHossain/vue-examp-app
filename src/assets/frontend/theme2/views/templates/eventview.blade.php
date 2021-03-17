@layout('views/layouts/master')

@section('before_content')
<div class="page-title-row">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <?php
                if (isset($this->session->lang_data)) {
                    if ($this->session->lang_data == "ban") {
                        if ($eventView->title_bangla) {
                            $eventView->title = $eventView->title_bangla;
                        }
                    }
                }
                ?>
                <h3 class="page-title">{{ $eventView->title }}</h3>
            </div>
        </div>
    </div>
</div>
@endsection

@section('content')

<!-- Events start -->
<div class="page-featured-image">
    <img class="event-cover-img" src="{{ base_url('uploads/images/'.$eventView->photo) }}">
    <div class="single-event-body">                        
        <div class="event-content-header">
            <h3 class="event-header-text">{{ $eventView->title }}</h3>
            <!--<p>Lorem ipsum dolor sit amet.<br>Lorem ipsum dolor sit amet, quidem ea ex a repellat </p>-->    
        </div>
        <div class="event-time-date">
            <h4><i class="fa fa-calendar" aria-hidden="true"></i> {{ date("F j, Y", strtotime($eventView->fdate)) }} TO {{ date("F j, Y", strtotime($eventView->tdate)) }}</h4>
            <h4><i class="fa fa-clock-o" aria-hidden="true"></i> {{ date("h:i A", strtotime($eventView->ftime)) }} - {{ date("h:i A", strtotime($eventView->ttime)) }}</h4>
        </div>
        <div class="event-content-text">
            <p>{{ $eventView->details }}</p>
            <!--<h4>Travel Fee: School Students - 1000 / = Parents - 1050 / = Ex Students - 1050 / =</h4>
            <p class="subtext">Last date for submission of travel fee: 28 February - 2019</p>-->
        </div>
    </div>
</div> 

@endsection