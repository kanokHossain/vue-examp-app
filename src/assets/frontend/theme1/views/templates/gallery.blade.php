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

<div class="teacher-heading-div pad-right-0 mb-40">
    <form class="form-inline search-teacher-form">
        <input type="text" class="form-control mb-2 mr-sm-2" id="category" name="category"
               placeholder="Search Gallery">
        <input type="text" class="form-control mb-2 mr-sm-2 datepicker" id="from_date" name="from_date"
               placeholder="From Date">
        <input type="text" class="form-control mb-2 mr-sm-2 datepicker" id="to_date"
               placeholder="To Date">
        <button type="submit" class="btn btn-primary mb-2 teacher-submit-btn gallerySubmit">Go</button>
    </form>
</div>



<div class="row" id="category-row">

</div>


<div class="row">
    <div class="col-md-12">
        <nav aria-label="Page navigation example" id="category-pagination">
            
        </nav>
    </div>
</div>


<script>
    $(document).ready(function () {
        var category = '', from_date = '', to_date = '';
        function load_galleries_data(page, category, from_date, to_date) {
            $.ajax({
                url: "<?php echo base_url(); ?>ajax/get_photo_category_data/" + page + "?category=" + category + "&from_date=" + from_date + "&to_date=" + to_date,
                method: "GET",
                dataType: "json",
                success: function (data) {
                    $('#category-row').html(data.all_categories);
                    $('#category-pagination').html(data.pagination_link);
                }
            });
        }

        load_galleries_data(1, category, from_date, to_date);

        $(document).on("click", ".pagination li a", function (event) {
            event.preventDefault();
            var page = $(this).data("ci-pagination-page");
            load_galleries_data(page, category, from_date, to_date);
        });

        $(document).on("click", ".gallerySubmit", function (event) {
            event.preventDefault();
            category = $('#category').val();
            from_date = $('#from_date').val();
            to_date = $('#to_date').val();
            load_galleries_data(1, category, from_date, to_date);
        });
    });
</script>

@endsection
