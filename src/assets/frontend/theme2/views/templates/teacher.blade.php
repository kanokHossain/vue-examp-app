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

<div class="row" id="teacher-row">

</div>

<div class="pagination-section mt-5">
    <nav aria-label="Page navigation example" id="teacher-pagination">
    </nav>
</div> 

<script>
    $(document).ready(function () {
        function load_teachers_data(page) {
            $.ajax({
                url: "<?php echo base_url(); ?>ajax/get_teacher_data/" + page,
                method: "GET",
                dataType: "json",
                success: function (data) {
                    $('#teacher-row').html(data.all_teachers);
                    $('#teacher-pagination').html(data.pagination_link);
                }
            });
        }

        load_teachers_data(1);

        $(document).on("click", ".pagination li a", function (event) {
            event.preventDefault();
            var page = $(this).data("ci-pagination-page");
            load_teachers_data(page);
        });
    });
</script>

@endsection
