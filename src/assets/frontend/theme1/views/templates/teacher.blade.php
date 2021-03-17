@layout('views/layouts/master')

@section('before_content')
<div class="page-title-row">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                @if(count($page_setting) > 0)
                @if($page_setting['show_page_title'] == "yes")
                <?php
                if (isset($this->session->lang_data)) {
                    if ($this->session->lang_data == "ban") {
                        if ($page->title_bangla) {
                            ?>
                            <h3 class="page-title">{{ $page->title_bangla }}</h3>
                        <?php } else { ?>
                            <h3 class="page-title">{{ $page->title }}</h3>
                        <?php } ?>
                    <?php } else { ?>
                        <h3 class="page-title">{{ $page->title }}</h3>
                    <?php } ?>
                <?php } else { ?>
                    <h3 class="page-title">{{ $page->title }}</h3>
                <?php } ?>
                @endif
                @else
                <?php
                if (isset($this->session->lang_data)) {
                    if ($this->session->lang_data == "ban") {
                        if ($page->title_bangla) {
                            ?>
                            <h3 class="page-title">{{ $page->title_bangla }}</h3>
                        <?php } else { ?>
                            <h3 class="page-title">{{ $page->title }}</h3>
                        <?php } ?>
                    <?php } else { ?>
                        <h3 class="page-title">{{ $page->title }}</h3>
                    <?php } ?>
                <?php } else { ?>
                    <h3 class="page-title">{{ $page->title }}</h3>
                <?php } ?>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection

@section('content')
<div class="row ov-h custom-row">
    <div class="col-md-12">
        <div class="teacher-heading-div">         
            <form class="form-inline search-teacher-form">
                <input type="text" class="form-control mb-2 mr-sm-2" id="name" name="name"
                       placeholder="Search Teacher">

                <select class="form-control mb-2 mr-sm-2" id="designation" name="designation">
                    <option value="">--Select Department--</option>
                    @foreach($designations as $designation)
                    <option value="{{ $designation->designation }}">{{ $designation->designation }}</option>
                    @endforeach
                </select>
                <button type="button" class="btn btn-primary mb-2 teacher-submit-btn teacherBtn">Go</button>
            </form>
        </div>
    </div>
</div>

<div class="row" id="teacher-row">

</div>

<div class="pagination-section mt-5">
    <nav aria-label="Page navigation example" id="teacher-pagination"></nav>
</div>

<script>
    $(document).ready(function () {
        var name = '', designation = '';
        function load_teachers_data(page, name, designation) {
            $.ajax({
                url: "<?php echo base_url(); ?>ajax/get_teacher_data/" + page + "?name=" + name + "&designation=" + designation,
                method: "GET",
                dataType: "json",
                success: function (data) {
                    $('#teacher-row').html(data.all_teachers);
                    $('#teacher-pagination').html(data.pagination_link);
                }
            });
        }

        load_teachers_data(1, name, designation);

        $(document).on("click", ".pagination li a", function (event) {
            event.preventDefault();
            var page = $(this).data("ci-pagination-page");
            load_teachers_data(page, name, designation);
        });

        $(document).on("click", ".teacherBtn", function (event) {
            event.preventDefault();
            name = $('#name').val();
            designation = $('#designation').val();
            load_teachers_data(1, name, designation);
        });
    });
</script>

@endsection
