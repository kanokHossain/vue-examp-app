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
                <!--<h3 class="page-title">Photo Gallery</h3>-->
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

<div class="page-search-box">
    <div class="row">
        <div class="col-md-12">
            <form class="form-inline">
                <input type="text" class="form-control col-sm-3 mb-2 mr-sm-2" id="category" name="category"
                       placeholder="Search Gallery">
                <input type="text" class="form-control col-sm-3 mb-2 mr-sm-2 datepicker" id="from_date" name="from_date"
                       placeholder="From Date">
                <input type="text" class="form-control col-sm-3 mb-2 mr-sm-2 datepicker" id="to_date"
                       placeholder="To Date">
                <button type="submit" class="btn btn-primary mb-2 event-submit-btn col-sm-2 gallerySubmit">Go</button>
            </form>
        </div>
    </div>
</div>

<div class="photo-gallery-cat margin-top60">
    <div class="row" id="category-row">

    </div>
</div>

<div class="pagination-section mt-5">
    <nav aria-label="Page navigation example" id="category-pagination">
    </nav>
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
