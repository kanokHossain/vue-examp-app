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
                <!--<h3 class="page-title">{{ $page->title }}</h3>-->
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
<style>
    .result-search .form-control {
        width: 100% !important;
    }
    .result-div-class {
        background-color: #ddd;
        padding-bottom: 20px;
        padding-top: 20px;
        display: block;
        margin: auto;
    }
    .result-div-class .result-body {
        text-align: center;
    }
</style>
<?php
$shifts = frontendData::get_shifts();
$versions = frontendData::get_versions();
$classes = frontendData::classes();
$exam_types = frontendData::exam_types();
$exams = frontendData::exams();
$campuses = frontendData::campuses();
?>

<div class="container">
    <div class="row ov-h">
        <div class="col-md-12">
            <!-- Events start -->
            <div class="page-content">
                <div class="page-search-box mb-2">
                    <div class="container">
                        <div class="row" style="margin-bottom: 40px;">
                            <form action="" class="form-inline result-search" method="POST">
                                <div class="col-md-3 col-sm-6">
                                    <select name="campusID" id="campusID" class="form-control mb-4" required="required">    
                                        <option value="0">Select Campus</option>
                                        <?php foreach ($campuses as $campus): ?>
                                            <option value="<?= $campus['cam_id']; ?>"><?= $campus['cam_name']; ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <select name="classesID" id="classesID" onchange="change_param()" class="form-control form-control mb-4" required="required">
                                        <option value="0">Select Class</option>
                                        <?php foreach ($classes as $class): ?>
                                            <option value="<?= $class['classesID']; ?>"><?= $class['classes']; ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <select name="versionID" id="versionID" class="form-control mb-4" onchange="change_param()">
                                        <option value="0">Select Version</option>
                                        <?php foreach ($versions as $version): ?>
                                            <option value="<?= $version->versionID; ?>"><?= $version->version_name; ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <select name="shiftID" class="form-control mb-4" id="shiftID" onchange="change_param()">
                                        <option value="0">Select Shift</option>
                                        <?php foreach ($shifts as $shift): ?>
                                            <option value="<?= $shift['shiftID']; ?>"><?= $shift['shift_name']; ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>

                                <div class="col-md-3 col-sm-6">
                                    <select name="sectionID" id="sectionID" class="form-control mb-4">    
                                        <option value="0">Select Section</option>
                                    </select>
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <select name="terminal_exam_id" id="terminal_exam_id" class="form-control mb-4" required="required">
                                        <option value="0">Select Terminal Exam</option>
                                        <?php foreach ($exams as $exam): ?>
                                            <option value="<?= $exam['terminal_exam_type_id']; ?>"><?= $exam['terminal_exam_type']; ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                </div>
                                <!--                                <div class="col-md-3 col-sm-6">
                                                                    <select id="exam_type_id" name="exam_type_id" class="form-control mb-4" required="required">
                                                                        <option vaule="0">Select Exam Type</option>
                                <?php foreach ($exam_types as $type): ?>
                                                                                                                <option value="<?php echo $type['exam_type_id']; ?>" rel="<?php echo $type['is_terminal']; ?>"><?php echo $type['exam_type']; ?></option>
                                <?php endforeach; ?>
                                                                    </select>
                                                                </div>-->
                                <div class="col-md-3 col-sm-6">
                                    <input name="student_roll" id="student_roll" placeholder="Student Roll" class="form-control mb-4">
                                </div>
                                <div class="col-md-3 col-sm-6">
                                    <button type="submit" class="btn btn-primary mb-4" id="inlineFormInputName2"
                                            name="searchResultBtn">Search</button>
                                </div>

                            </form>

                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <a href="#" class="btn btn-print" onclick="printDiv('printableArea')" style="width: 25% !important;"><i class="fa fa-print ml-1"></i>Print</a>
                            </div>
                        </div>

                    </div>

                </div>
                <?php if (count($search_results) > 0) { ?>
                    <div class="result-view result-div-class" id="printableArea">
                    <?php } else { ?>
                        <div class="result-view d-none" id="printableArea">
                        <?php } ?>
                        <div class="container">
                            <div class="result-school-header">


                                <div class="row">
                                    <div class="col-md-12">
                                        <h3>{{namesorting($backend->sname, 100) }}</h3>
                                        <p>{{ $backend->saddress }}</p>
                                        <h3>Merit List: {{ $exam_record }} </h3>
                                    </div>
                                </div>

                            </div>
                            <div class="result-body">
                                <div class="row">
                                    <div class="col-md-2">
                                        <p><span class="result-title">#</span></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p><span class="result-title">Student ID</span></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p><span class="result-title">Total Marks</span></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p><span class="result-title">GPA</span></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p><span class="result-title">Grade</span></p>
                                    </div>
                                    <div class="col-md-2">
                                        <p><span class="result-title">Remarks</span></p>
                                    </div>
                                </div>
                                <?php
                                $i = 1;
                                foreach ($search_results as $sr):
                                    ?>
                                    <div class="row">
                                        <div class="col-md-2">
                                            <p> <?php echo $i++; ?></p>
                                        </div>
                                        <div class="col-md-2">
                                            <p> <?php echo $sr->student_id; ?></p>
                                        </div>
                                        <div class="col-md-2">
                                            <p> <?= $sr->total_marks; ?></p>
                                        </div>
                                        <div class="col-md-2">
                                            <p><?= $sr->gpa; ?></p>
                                        </div>
                                        <div class="col-md-2">
                                            <p> <?= $sr->grade; ?></p>
                                        </div>
                                        <div class="col-md-2">
                                            <p><?= $sr->remarks; ?></p>
                                        </div>
                                    </div>
                                <?php endforeach; ?>
                            </div>

                        </div>

                    </div>
                </div>
                <!-- Events End -->
            </div>
        </div>
    </div>

    <script>
        $('#exam_type_id').change(function (event) {
            if ($(this).find('option:selected').attr('rel') == 1) {
                $('#subject_container').hide();
            } else {
                $('#subject_container').show();
            }
        });
        $('#campusID').change(function () {
            var cam_id = $(this).val();
            $.ajax({
                async: false,
                type: 'POST',
                url: "<?= base_url('classes/get_classes_by_cam_id') ?>",
                data: "id=" + cam_id,
                dataType: "html",
                success: function (data2) {
                    $('#classesID').html(data2);
                    $('.loader').hide();
                }
            });
        });
        $('#classesID').change(function (event) {
            var classesID = $(this).val();
            if (classesID === '0') {
                $('#sectionID').val(0);
            } else {
                $('.loader').show();
                $.ajax({
                    async: false,
                    type: 'POST',
                    url: "<?= base_url('student/sectioncall') ?>",
                    data: "id=" + classesID,
                    dataType: "html",
                    success: function (data) {
                        $('#sectionID').html(data);

                    }
                });

                $.ajax({
                    async: false,
                    type: 'POST',
                    url: "<?= base_url('mark/subjectcall') ?>",
                    data: "id=" + classesID,
                    dataType: "html",
                    success: function (data2) {
                        $('#subjectID').html(data2);
                        $('.loader').hide();
                    }
                });

                $.ajax({
                    async: false,
                    type: 'POST',
                    url: "<?= base_url('versions/get_version_by_class_id') ?>",
                    data: {'id': classesID},
                    dataType: "html",
                    success: function (data) {
                        $('#versionID').html(data);
                        $('.loader').hide();
                    }
                });

                $.ajax({
                    async: false,
                    type: 'POST',
                    url: "<?= base_url('shift/get_shift_by_class_id') ?>",
                    data: {'id': classesID},
                    dataType: "html",
                    success: function (data) {
                        $('#shiftID').html(data);
                        $('.loader').hide();
                    }
                });

                $.ajax({
                    async: false,
                    type: 'POST',
                    url: "<?= base_url('studentgroup/get_groups_by_class_id') ?>",
                    data: {'id': classesID},
                    dataType: "html",
                    success: function (data) {
                        $('#studentgroupID').html(data);
                        $('.loader').hide();
                    }
                });

            }
        });

        function printDiv(divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var originalContents = document.body.innerHTML;

            document.body.innerHTML = printContents;

            window.print();

            document.body.innerHTML = originalContents;
        }
    </script>

    @endsection