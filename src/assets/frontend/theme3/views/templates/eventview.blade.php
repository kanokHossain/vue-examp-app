@layout('views/layouts/master')

@section('content')
<?php
if (isset($this->session->lang_data)) {
    if ($this->session->lang_data == "ban") {
        if ($eventView->title_bangla) {
            $eventView->title = $eventView->title_bangla;
        }
    }
}
?>
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div class="events-single">
                <div class="media" style="padding-top: 35px">
                    <img class="events-single-img mr-3 img img-responsive" src="{{ base_url('uploads/images/'.$eventView->photo) }}" alt="Generic placeholder image">
                    <div class="media-body event-content">
                        <h3 class="single-events-title">{{ $eventView->title }}</h3>
                        <!--<p class="event-single-desc">Don't miss the party of the year</p>-->
                        <hr class="event-hr">
                        <p class="single-event-datetime">
                            <i class="fa fa-calendar" style="margin-right: 0px"></i> {{ date("F j, Y", strtotime($eventView->fdate)) }}
                            -
                            {{ date("F j, Y", strtotime($eventView->tdate)) }}<br>
                            <i class="fa fa-clock-o" style="margin-right: 0px"></i> {{ date("h:i A", strtotime($eventView->ftime)) }} -
                            {{ date("h:i A", strtotime($eventView->ttime)) }}
                        </p>
<!--                        <p class="card-text single-event-text">Place: <br>
                            Fantasy Kindom, Water Kindom
                        </p>-->
                    </div>
                </div>

                <div class="event-single-full-desc">
                    <p>{{ $eventView->details }}</p>
                </div>
            </div>

        </div>
    </div>
</div>

@endsection