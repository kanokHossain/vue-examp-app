@layout('views/layouts/master')

@section('content')

<?php
if (isset($this->session->lang_data)) {
    if ($this->session->lang_data == "ban") {
        if ($teacherView->name_bangla) {
            $teacherView->name = $teacherView->name_bangla;
        }
        if ($teacherView->designation_bangla) {
            $teacherView->designation = $teacherView->designation_bangla;
        }
        if ($teacherView->teacher_desc_bn) {
            $teacherView->teacher_desc = $teacherView->teacher_desc_bn;
        }
    }
}
?>

<div class="row single-teacher-header">
    <div class="col-md-12">
        <h3>{{ $teacherView->name }}</h3>
    </div>

</div>

<div class="single-teacher-content">
    <div class="row">
        <div class="col-md-8">
            <div class="teacher-intro">
                <h3 class="designation">{{ $teacherView->designation }}</h3>
                @if($teacherView->teacher_desc)
                <p>{{ $teacherView->teacher_desc }}</p>
                @endif
            </div>
            <div class="teacher-education">
                <?php if ($teacherView->teacher_educations) { ?>
                    <h3>Academic Qualification</h3>
                    <table class="table qualification-table">
                        <?php
                        $ed_arr = json_decode($teacherView->teacher_educations);
                        foreach ($ed_arr as $ed):
                            ?>
                            <tr>
                                <td><?= $ed->degree; ?></td>
                                <td><?= $ed->institute; ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </table>
                <?php } ?>

                <?php if ($teacherView->trainings) { ?>
                    <h3>Trainings</h3>
                    <table class="table qualification-table">
                        <?php
                        $tr_arr = json_decode($teacherView->trainings);
                        foreach ($tr_arr as $tr):
                            ?>
                            <tr>
                                <td><?= $tr->training; ?></td>
                                <td><?= $tr->tr_institution; ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </table>
                <?php } ?>
            </div>
        </div>
        <div class="col-md-4">
            <div class="teacher-contact">
                <img class="img img-responsive img-fluid" src="{{ base_url('uploads/images/'.$teacherView->photo) }}" alt="Image">
                <p class="teacher-phone"><span class="contact-title">Phone:</span>{{ $teacherView->phone }}</p>
                <p class="teacher-phone"><span class="contact-title">Email:</span>{{ $teacherView->email }}</p>
            </div>

            <div class="teacher-social">
                <ul>
                    @if($teacherView->fb_id)
                    <li><a href="{{ $teacherView->fb_id }}" class="social-fb"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    @endif
                    @if($teacherView->whatsapp_link)
                    <li><a href="{{ $teacherView->whatsapp_link }}" class="social-whatsapp"><i class="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                    @endif
                    @if($teacherView->twitter_link)
                    <li><a href="{{ $teacherView->twitter_link }}" class="social-twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    </li>
                    @endif
                    @if($teacherView->skype_link)
                    <li><a href="{{ $teacherView->skype_link }}" class="social-skype"><i class="fa fa-skype" aria-hidden="true"></i></a>
                    </li>
                    @endif
                    @if($teacherView->youtube_link)
                    <li><a href="{{ $teacherView->youtube_link }}" class="social-youtube"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                    </li>
                    @endif
                </ul>
            </div>

        </div>

    </div>

</div>


<div class="row">
    <div class="col-md-12 mb-3">
        <p class="latest-events">Related Teacher</p>
        <hr style="color: #f6f6                                                                                                                                                          f7">
        <div class="regular slider no-arrow related-teacher">
            <div class="card custom-card">
                <div class="card-body p-0">
                    <a href="#" class="gallery-posted-by">
                        <div class="media bg-cl1">
                            <img class="latest-event-img" src="{{ base_url('uploads/images/'.$teacherView->photo) }}" alt="Generic placeholder image">
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
                            <img class="latest-event-img" src="{{ base_url('uploads/images/'.$teacherView->photo) }}" alt="Generic placeholder image">
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
                        <div class="media bg-cl3">
                            <img class="latest-event-img" src="{{ base_url('uploads/images/'.$teacherView->photo) }}" alt="Generic placeholder image">
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
                        <div class="media bg-cl4">
                            <img class="latest-event-img" src="{{ base_url('uploads/images/'.$teacherView->photo) }}" alt="Generic placeholder image">
                            <div class="media-body">
                                <p class="latest-event-title">Shamina Anwar</p>
                                <p class="latest-event-date">Assistant Teacher</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

</div>


@endsection

