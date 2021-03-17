@layout('views/layouts/fullpage')

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
                <!--<h3 class="page-title">Events</h3>-->
                @if(count($page_setting) > 0)
                @if($page_setting['show_page_title'] == "yes")
                <h3 class="page-title">{{ $page->title }}</h3>
                @endif
                @else
                <h3 class="page-title">{{ $page->title }}</h3>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection


@section('content')

@if(count($sliders))

<div id="main-slider" class="slider-area">

    @foreach($sliders as $slider)
    <div class="single-slide">
        <img src="{{ base_url('uploads/gallery/'.$slider->file_name) }}" alt="">
        <div class="banner-overlay">
            <div class="container">
                <div class="caption style-2">
                    <h2>{{ sentenceMap(htmlspecialchars_decode($slider->file_title), 17, '<span>', '</span>') }}</h2>
                    <p>{{ htmlspecialchars_decode($slider->file_description) }}</p>
                </div>
            </div>
        </div>
    </div>
    @endforeach
</div>
@endif


<section id="about" class="about-area area-padding">
    <div class="container">
        <div class="row">
            @if(!count($featured_image))
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-10">
                        <div class="">
                            <div class="form-style-5">
                                <form id="admissionSubmit" action="<?php echo site_url('admission/insertApplicantForm') ?>" method="post">
                                    <fieldset>
                                        <legend><span class="number ">1</span> Candidate Info</legend>
                                        <div class="row">
                                            <div class="col-md-6" >
                                                <input id="applicant_name" type="text" name="applicant_name" placeholder="applicant name *">
                                                <select name="campus" id="campus">

                                                    <option value="">Select Campus *</option>
                                                    <?php
                                                    foreach ($campuses as $class) {
                                                        ?>
                                                        <option value="<?php echo $class->cam_id ?>"><?php echo $class->cam_name ?></option>
                                                    <?php } ?>
                                                </select>
                                                <?php
                                                $array = array('0' => 'Select Class');
                                                echo form_dropdown("classesID", $array, set_value("classesID", $classesID), "id='classesID' class='form-control select2'");
                                                ?>
                                                <input type="text" name="phone" placeholder="Phone Number *" id="phone">
        <!--                                      <input type="date"  name="b_date" placeholder="Birth Day">-->
                                                <input placeholder="Date of Birth" type="text" onMouseOver="(this.type = 'date')" onMouseOut="(this.type = 'text')" name="b_date" id="date" class="form-control">
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" name="father_name" placeholder="Father name *" id="fatherName">
                                                <input type="text" name="mother_name" placeholder="Mother name *" id="motherName">
                                                <input type="email" name="email" placeholder="Your Email">
                                                <input type="text" name="address" placeholder="Address">
                                                <label>Gender</label>
                                                <label class="radio-inline"><input type="radio" name="gender" value="male" checked> Male</label>
                                                <label class="radio-inline"><input type="radio" name="gender" value="female"> Female</label>
                                                <label class="radio-inline"><input type="radio" name="gender" value="other"> Other</label>

                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend><span class="number ">2</span> Guardian Info</legend>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input id="guardian_name" type="text" name="guardian_name" placeholder="Guardian Name *" >
                                                <input id="guardian_phone" type="text" name="guardian_phone" placeholder="Phone Number *" >
                                                <select id="relationship" name="relationship" required="required">
                                                    <option value="">Select Relation Of Guardian</option>
                                                    <option value="Father">Father</option>
                                                    <option value="Mother">Mother</option>
                                                    <option value="Brother">Brother</option>
                                                    <option value="Sister">Sister</option>
                                                    <option value="Uncle">Uncle</option>
                                                    <option value="Aunt">Aunt</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <!--<input id="relationship" type="text" name="relationship" placeholder="Relationship *" >-->   </div>
                                            <div class="col-md-6">
                                                <input type="email" name="guardian_email" placeholder="Guardian Email">
                                                <input type="text" name="guardian_address" placeholder="Address">
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset>
                                        <legend><span class="number ">3</span> Background Info</legend>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input id="Pre_school" type="text" name="Pre_school" placeholder="Previous School name" >
                                                <input type="text" name="Pre_sch_address" placeholder="Previous school Address">
                                            </div>
                                            <div class="col-md-6">
                                                <input id="Pre_class" type="text" name="Pre_class" placeholder="Previous Class">
                                            </div>
                                        </div>
                                    </fieldset>

                                    <input onclick="javascript : validateParentInfo()" type="button" value="Apply" />
                                </form>
                            </div>
    <!--                        <p> {{ htmlspecialchars_decode($page->content) }} </p>-->
                        </div>
                    </div>
                    @if(count($admission_form) > 0)
                    <div class="col-md-2">

                        <a class="btn btn-info" href="<?= base_url('uploads/' . $admission_form[0]->admission_form) ?>"><i class="fa fa-download"></i> Download Admission From</a>

                    </div>
                    @endif
                </div>
            </div>
            @else
            <div class="col-md-6 col-md-push-6">
                <div class="content-img">
                    <img src="{{ base_url('uploads/gallery/'.$featured_image->file_name) }}" alt="$featured_image->file_alt_text" />
                </div>
            </div>
            <div class="col-md-6 col-md-pull-6">
                <div class="about-content">
                    <p> {{ htmlspecialchars_decode($page->content) }} </p>
                </div>
            </div>
            @endif
        </div>
    </div>
</section>

@endsection

<script>




    function validateParentInfo() {
        if ($('#applicant_name').val() == 0) {
            alert('Please fill the applicant name field');
            $('#applicant_name').focus();
            return false;
        }
        if ($('#class').val() == 0) {
            alert('Please Select a class');
            $('#class').focus();
            return false;
        }
        if ($('#phone').val() == 0) {
            alert('Please fill the phone number field');
            $('#phone').focus();
            return false;
        }
        if ($('#fatherName').val() == 0) {
            alert('Please fill the father name field');
            $('#fatherName').focus();
            return false;
        }
        if ($('#guardian_name').val() == 0) {
            alert('Please fill the guardian name field');
            $('#guardian_name').focus();
            return false;
        }
        if ($('#guardian_phone').val() == 0) {
            alert('Please fill the guardian phone field');
            $('#guardian_phone').focus();
            return false;
        }
        if ($('#relationship').val() == 0) {
            alert('Please fill the relationship field');
            $('#relationship').focus();
            return false;
        }
//        if ($('#Pre_school').val() == 0) {
//            alert('Please fill the previous school field');
//            $('#Pre_school').focus();
//            return false;
//        }
//        if ($('#Pre_class').val() == 0) {
//            alert('Please fill the previous class field');
//            $('#Pre_class').focus();
//            return false;
//        }
        $('#admissionSubmit').submit();
    }


</script>

