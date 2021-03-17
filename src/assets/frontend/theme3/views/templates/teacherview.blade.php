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

<div class="container-fluid pr-0 pl-0">
    <div class="single-teacher-div {{ $color_code }}">
        <h5 class="single-teacher-name-text">{{ $teacherView->name }}</h5>
        <p class="single-teacher-designation">{{ $teacherView->designation }}</p>
        <div class="single-teacher-img">
            <img class="img img-responsive teacher-single-img" src="{{ base_url('uploads/images/'.$teacherView->photo) }}">
        </div>
    </div>
</div>

<div class="container">
    <div class="single-teacher-details">
        <div class="single-teacher-desc">
            <div class="single-teacher-text">
                <div class="single-teacher-icons">
                    @if($teacherView->fb_id)
                    <a href="{{ $teacherView->fb_id }}" target="_blank" class="teacher-pro-link social-facebook"><i class="teacher-single-font-awesome fa fa-facebook-square"></i></a>
                    @endif
                    @if($teacherView->whatsapp_link)
                    <a href="{{ $teacherView->whatsapp_link }}" target="_blank" class="teacher-pro-link social-whatsapp"><i class="teacher-single-font-awesome fa fa-whatsapp"></i></a>
                    @endif
                    @if($teacherView->twitter_link)
                    <a href="{{ $teacherView->twitter_link }}" target="_blank" class="teacher-pro-link social-twitter"><i class="teacher-single-font-awesome fa fa-twitter"></i></a>
                    @endif
                    @if($teacherView->skype_link)
                    <a href="{{ $teacherView->skype_link }}" target="_blank" class="teacher-pro-link social-skype"><i class="teacher-single-font-awesome fa fa-skype"></i></a>
                    @endif
                    @if($teacherView->youtube_link)
                    <a href="{{ $teacherView->youtube_link }}" target="_blank" class="teacher-pro-link social-youtube"><i class="teacher-single-font-awesome fa fa-youtube"></i></a>
                    @endif
                </div>
            </div>
        </div>
        <h5 class="phone-email">Phone : {{ $teacherView->phone }}, Email : {{ $teacherView->email }}</h5>
        <?php
        if ($teacherView->teacher_educations) {
            $ed_arr = json_decode($teacherView->teacher_educations);
            ?>
            <h4 class="teacher-education">Education</h4>
            <?php
            foreach ($ed_arr as $ed):
                ?>
                <h5 class="teacher-common-desc"><?= $ed->degree; ?> (<?= $ed->institute; ?>)</h5>
            <?php endforeach; ?>
        <?php } ?>
        <?php
        if ($teacherView->skills) {
            $sk_arr = json_decode($teacherView->skills);
            ?>
            <h4 class="teacher-skills">Skills</h4>
            <?php
            foreach ($sk_arr as $sk):
                ?>
                <div class="leadership">
                    <p class="leadership-text"><?= $sk->skill; ?></p>
                    <div class="progress">
                        <div class="progress-bar bg-cl1" role="progressbar" style="width: <?= $sk->percentage; ?>%;margin-left: 17.5%;"
                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span
                                class="pg-float-center bc-cl1">65</span>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php } ?>
    </div>
</div>

@endsection

