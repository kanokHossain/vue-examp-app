@layout('views/layouts/master')

@section('before_content')

<?php
if (isset($this->session->lang_data)) {
    if ($this->session->lang_data == "ban") {
        if ($page->title_bangla) {
            $page->title = $page->title_bangla;
        }
    }
}
?>

<div class="page-heading">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="page-title"><?= $page->title; ?></h3>
                <form action="" class="form-inline search-teacher-form search-form teacher-form">
                    <input type="text" class="form-control mb-2 mr-sm-2" id="name" name="name"
                           placeholder="Search Teacher">

                    <select class="form-control mb-2 mr-sm-2" id="designation" name="designation">
                        <option value="">--Select Designation--</option>
                        @foreach($designations as $designation)
                        <option value="{{ $designation->designation }}">{{ $designation->designation }}</option>
                        @endforeach
                    </select>
                    <button type="button" class="btn btn-primary mb-2 event-submit-btn teacherBtn">Go</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@section('content')

<div class="container">
    <div class="row" id="teacher-row">

    </div>

    <div class="row" style="margin-top: 60px;margin-bottom: 60px;">
        <div class="col-md-12">
            <nav aria-label="Page navigation example" id="teacher-pagination">

            </nav>
        </div>
    </div>
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

        $(document).on("submit", ".teacher-form", function (event) {
            event.preventDefault();
            name = $('#name').val();
            designation = $('#designation').val();
            load_teachers_data(1, name, designation);
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
