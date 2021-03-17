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


<div class="row">
    <div class="col-md-12">
        <p class="single-event-txt">{{ $eventView->title }}</p>
    </div>

    <div class="col-md-12 single-event-timing">
        <div class="row">
            <div class="col-md-3">
                <p class="single-event-datetime">
                    <i class="fa fa-calendar"></i> {{ date("F j, Y", strtotime($eventView->fdate)) }} -
                   {{ date("F j, Y", strtotime($eventView->tdate)) }}</p>
            </div>
            <div class="col-md-3">
                <p class="single-event-datetime"><i class="fa fa-clock-o"></i>
                    {{ date("h:i A", strtotime($eventView->ftime)) }} - {{ date("h:i A", strtotime($eventView->ttime)) }}</p>
            </div>
        </div>
    </div>

    <div class="col-md-12 mb-40">
        <div class="event-image-box">
            <img src="{{ base_url('uploads/images/'.$eventView->photo) }}" class="img img-responsive single-custom-img">
            <p class="single-event-desc">
                {{ $eventView->details }}
            </p>
        </div>

    </div>
    <div class="col-md-12 mb-3">
        <p class="latest-events">Latest Events</p>
        <hr style="color: #f6f6f7">
        <div class="regular slider no-arrow">
            <div class="card custom-card">
                <div class="card-body p-0">
                    <a href="#" class="gallery-posted-by">
                        <div class="media bg-cl1">
                            <img class="latest-event-img" src="../assets/images/Layer 99.png"
                                 alt="Generic placeholder image">
                            <div class="media-body">
                                <p class="custom-teacher-name">Shamina Anwar</p>
                                <p class="custom-teacher-designation">Assistant Teacher</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body p-0">
                    <a href="#" class="gallery-posted-by">
                        <div class="media bg-cl2">
                            <img class="latest-event-img" src="../assets/images/Layer 99.png"
                                 alt="Generic placeholder image">
                            <div class="media-body">
                                <p class="custom-teacher-name">Shamina Anwar</p>
                                <p class="custom-teacher-designation"><i class="fa fa-calendar"
                                                                         style="margin-right: 0px"></i> MAR 5, 2019</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body p-0">
                    <a href="#" class="gallery-posted-by">
                        <div class="media bg-cl3">
                            <img class="latest-event-img" src="../assets/images/Layer 99.png"
                                 alt="Generic placeholder image">
                            <div class="media-body">
                                <p class="custom-teacher-name">Shamina Anwar</p>
                                <p class="custom-teacher-designation"><i class="fa fa-calendar"
                                                                         style="margin-right: 0px"></i> MAR 5, 2019</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-body p-0">
                    <a href="#" class="gallery-posted-by">
                        <div class="media bg-cl4">
                            <img class="latest-event-img" src="../assets/images/Layer 99.png"
                                 alt="Generic placeholder image">
                            <div class="media-body">
                                <p class="latest-event-title">Shamina Anwar</p>
                                <p class="latest-event-date"><i class="fa fa-calendar"
                                                                style="margin-right: 0px"></i> MAR 5, 2019</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>

@endsection