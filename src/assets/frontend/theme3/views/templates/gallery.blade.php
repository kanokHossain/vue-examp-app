@layout('views/layouts/master')

@section('before_content')
<div class="page-heading">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="page-title">Photo Galleries</h3>
                <form action="" class="form-inline search-teacher-form search-form" method="GET">
                    <input type="text" class="form-control mb-2 mr-sm-2" id="category" name="category"
                           placeholder="Search Gallery">

                    <input type="text" class="form-control mb-2 mr-sm-2 datepicker" id="from_date" name="from_date"
                           placeholder="From Date">

                    <input type="text" class="form-control mb-2 mr-sm-2 datepicker" id="to_date"
                           placeholder="To Date">

                    <button type="submit" class="btn btn-primary mb-2 event-submit-btn gallerySubmit">Go</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@section('content')

<div class="container">           
    <div class="row" id="category-row">
        <?php
//        $colors = array("bg-cl1", "bg-cl2", "bg-cl3", "bg-cl4", "bg-cl5", "bg-cl6", "bg-cl7", "bg-cl8");
//        $text_colors = array("txt-cl-1", "txt-cl-2", "txt-cl-3", "txt-cl-4", "txt-cl-5", "txt-cl-6", "txt-cl-7", "txt-cl-8");
        ?>

    </div>

    <div class="row" style="margin-top: 60px;margin-bottom: 60px;">
        <div class="col-md-12">
            <nav aria-label="Page navigation example" id="category-pagination">
            </nav>
        </div>
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
