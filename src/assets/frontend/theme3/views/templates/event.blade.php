@layout('views/layouts/master')

@section('before_content')
<div class="page-heading">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="page-title">Events</h3>
                <form action="" class="form-inline search-teacher-form search-form" method="GET">
                    <input type="text" class="form-control mb-2 mr-sm-2" id="event" name="event"
                           placeholder="Search Event">

                    <input type="text" class="form-control mb-2 mr-sm-2 datepicker" id="from_date" name="from_date"
                           placeholder="From">

                    <input type="text" class="form-control mb-2 mr-sm-2 datepicker" id="to_date" name="to_date"
                           placeholder="To">

                    <button type="button" class="btn btn-primary mb-2 event-submit-btn searchBtn">Go</button>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@section('content')

<div class="container">
    <div class="row" id="event-row">

    </div>

    <div class="row" style="margin-top: 60px;margin-bottom: 60px;">
        <div class="col-md-12">
            <nav aria-label="Page navigation example" id="event-pagination"></nav>
        </div>
    </div>
</div>

<script>
    $(document).ready(function () {
        var title = '', from_date = '', to_date = '';
        function load_events_data(page, title, from_date, to_date) {
            console.log(title);
            $.ajax({
                url: "<?php echo base_url(); ?>ajax/get_events_data/" + page + "?title=" + title + "&from_date=" + from_date + "&to_date=" + to_date,
                method: "GET",
                dataType: "json",
                success: function (data) {
                    $('#event-row').html(data.all_events);
                    $('#event-pagination').html(data.pagination_link);
                }
            });
        }

        load_events_data(1, title, from_date, to_date);

        $(document).on("click", ".pagination li a", function (event) {
            event.preventDefault();
            var page = $(this).data("ci-pagination-page");
            load_events_data(page, title, from_date, to_date);
        });

        $(document).on("click", ".searchBtn", function (event) {
            event.preventDefault();
            title = $('#event').val();
            from_date = $('#from_date').val();
            to_date = $('#to_date').val();
            load_events_data(1, title, from_date, to_date);
        });
    });
</script>

@endsection

@section('footerAssetPush')
<script type="text/javascript">
    $(document).on('click', '.going-event', function (e) {
        e.preventDefault();
        var id = $(this).attr('id');
        if (id) {
            $.ajax({
                dataType: 'json',
                type: 'POST',
                url: "<?= base_url('frontend/eventGoing') ?>",
                data: {'id': id},
                dataType: "html",
                success: function (data) {
                    var response = jQuery.parseJSON(data);
                    if (response.status == true) {
                        toastr["success"](response.message)
                        toastr.options = {
                            "closeButton": true,
                            "debug": false,
                            "newestOnTop": false,
                            "progressBar": false,
                            "positionClass": "toast-top-right",
                            "preventDuplicates": false,
                            "onclick": null,
                            "showDuration": "500",
                            "hideDuration": "500",
                            "timeOut": "5000",
                            "extendedTimeOut": "1000",
                            "showEasing": "swing",
                            "hideEasing": "linear",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }

                    } else {
                        toastr["error"](response.message)
                        toastr.options = {
                            "closeButton": true,
                            "debug": false,
                            "newestOnTop": false,
                            "progressBar": false,
                            "positionClass": "toast-top-right",
                            "preventDuplicates": false,
                            "onclick": null,
                            "showDuration": "500",
                            "hideDuration": "500",
                            "timeOut": "5000",
                            "extendedTimeOut": "1000",
                            "showEasing": "swing",
                            "hideEasing": "linear",
                            "showMethod": "fadeIn",
                            "hideMethod": "fadeOut"
                        }
                    }
                }
            });
        }
    });

</script>
@endsection
