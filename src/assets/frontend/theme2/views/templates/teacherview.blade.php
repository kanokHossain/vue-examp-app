@layout('views/layouts/master')

@section('content')

<?php
if (isset($this->session->lang_data)) {
    if ($this->session->lang_data == "ban") {
        if ($teacherView->name_bangla) {
            $teacherView->name = $teacherView->name_bangla;
            $teacherView->designation = $teacherView->designation_bangla;
        }
    }
}
?>

<div class="container">
    <div class="row ov-h">
        <div class="col-lg-12 col-md-12">
            <div class="personal-data">
                <div class="row">
                    <div class="col-md-3">
                        <div class="teacher-single-image">
                            <img src="{{ base_url('uploads/images/'.$teacherView->photo) }}" alt="teacher single">
                        </div>
                    </div>
                    <div class="col-md-9">
                        <?php
                        if (isset($this->session->lang_data)) {
                            if ($this->session->lang_data == "ban") {
                                if ($teacherView->name_bangla) {
                                    $teacherView->name = $teacherView->name_bangla;
                                }
                                if ($teacherView->designation_bangla) {
                                    $teacherView->designation = $teacherView->designation_bangla;
                                }
                            }
                        }
                        ?>
                        <div class="teacher-info-data">
                            <h3 class="teacher-title">{{ $teacherView->name }}</h3>
                            <h4 class="teacher-designation">{{ $teacherView->designation }}</h4>
                            @if($teacherView->teacher_desc)
                            <p class="teacher-info-text">{{ $teacherView->teacher_desc }}</p>
                            @endif
                            <p class="teacher-contact"><span class="teacher-contact-title">Phone: </span>{{ $teacherView->phone }}</p>
                            <p class="teacher-contact"><span class="teacher-contact-title">Email: </span>{{ $teacherView->email }}</p>
                            <div class="teacher-social">
                                <ul>
                                    @if($teacherView->fb_id)
                                    <li class="social-facebook"><a href="{{ $teacherView->fb_id }}" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    @endif
                                    @if($teacherView->whatsapp_link)
                                    <li class="social-whatsapp"><a href="{{ $teacherView->whatsapp_link }}" target="_blank"><i class="fa fa-whatsapp"></i></a></li>
                                    @endif
                                    @if($teacherView->twitter_link)
                                    <li class="social-twitter"><a href="{{ $teacherView->twitter_link }}" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                    @endif
                                    @if($teacherView->skype_link)
                                    <li class="social-skype"><a href="{{ $teacherView->skype_link }}" target="_blank"><i class="fa fa-skype"></i></a></li>
                                    @endif
                                    @if($teacherView->youtube_link)
                                    <li class="social-youtube"><a href="{{ $teacherView->youtube_link }}" target="_blank"><i class="fa fa-youtube"></i></a></li>
                                    @endif
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="personal-skill">
                <div class="row">

                    <?php
                    if ($teacherView->teacher_educations) {
                        $ed_arr = json_decode($teacherView->teacher_educations);
                        ?>
                        <div class="col-md-6">
                            <h3>Education</h3>
                            <div class="education-info">
                                <ul>
                                    <?php
                                    foreach ($ed_arr as $ed):
                                        ?>
                                        <li><?= $ed->degree; ?> (<?= $ed->institute; ?>).</li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                        </div>

                        <?php
                    }
                    ?>

                    <?php
                    if ($teacherView->teacher_educations) {
                        $sk_arr = json_decode($teacherView->skills);
                        ?>
                        <div class="col-md-6">
                            <h3>Skill</h3>
                            <div class="preogress-bar-section">
                                <?php
                                foreach ($sk_arr as $sk):
                                    ?>
                                    <div class="each-progress-bar">
                                        <p class="progressbar-header"><?= $sk->skill; ?></p>  
                                        <div class="progress">
                                            <div class="progress-bar" style="width:<?= $sk->percentage; ?>%"></div>
                                        </div> 
                                    </div>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

