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
<div class="page-title-row">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
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

<div class="teacher-heading-div">
    <form class="form-inline search-teacher-form" action="" method="GET">
        <input type="text" class="form-control mb-2 mr-sm-2" id="notice" name="notice"
                       placeholder="Search Notice">
        <input type="text" class="form-control mb-2 mr-sm-2 datepicker" id="from_date" name="from_date"
                       placeholder="From">
        <input type="text" class="form-control mb-2 mr-sm-2 datepicker" id="to_date" name="to_date"
                       placeholder="To">
        <button type="button" class="btn btn-primary mb-2 teacher-submit-btn noticeBtn">Go</button>
    </form>
</div>

<div class="single-event-body">
    <div class="notice-table" id="notice_table">

    </div>

    <div class="pagination-section mt-5">
        <nav aria-label="Page navigation example" id="notice-pagination">

        </nav>
    </div>
</div>

<!-- Start About Content -->
<!--<section id="about" class="">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="main-about">
                    <p> {{ htmlspecialchars_decode($page->content) }} </p>
                </div>
            </div>
        </div>
    </div>
</section>-->
<!-- Close About Content -->

<script>
    $(document).ready(function () {
        var notice = '', from_date = '', to_date = '';
        function load_notices_data(page, notice, from_date, to_date) {
            $.ajax({
                url: "<?php echo base_url(); ?>ajax/get_notices_data/" + page + "?notice=" + notice + "&from_date=" + from_date + "&to_date=" + to_date,
                method: "GET",
                dataType: "json",
                success: function (data) {
                    $('#notice_table').html(data.all_notices);
                    $('#notice-pagination').html(data.pagination_link);
                }
            });
        }

        load_notices_data(1, notice, from_date, to_date);

        $(document).on("click", ".pagination li a", function (event) {
            event.preventDefault();
            var page = $(this).data("ci-pagination-page");
            load_notices_data(page, notice, from_date, to_date);
        });

        $(document).on("click", ".noticeBtn", function (event) {
            event.preventDefault();
            notice = $('#notice').val();
            from_date = $('#from_date').val();
            to_date = $('#to_date').val();
            load_notices_data(1, notice, from_date, to_date);
        });
    });
</script>

@endsection
