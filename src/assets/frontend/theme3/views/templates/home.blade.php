@layout('views/layouts/master')

@section('before_content')
@if(count($sliders))
<!-- Slide area start -->
<div class="container-fluid">
    <div class="row">
        <!-- Slide area start -->
        <div class="col-md-12 banner pad-left-0 pad-right-0">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="false" data-interval="1000000">
                <ol class="carousel-indicators">
                    <?php $i = 0; ?>
                    @foreach($sliders as $slider)
                    @if($i==0)
                    <li data-target="#carouselExampleIndicators" data-slide-to="{{ $i }}" class="active"></li>
                    @else
                    <li data-target="#carouselExampleIndicators" data-slide-to="{{ $i }}"></li>
                    @endif
                    <?php $i++; ?>
                    @endforeach
                </ol>
                <div class="carousel-inner">
                    <?php $sl = 0; ?>
                    @foreach($sliders as $slider)
                    @if($sl==0)
                    <div class="carousel-item active">
                        @else
                        <div class="carousel-item">
                            @endif
                            <img class="d-block w-100" src="{{ base_url('uploads/gallery/'.$slider->file_name) }}" alt="First slide" style="height: 100%">
                        </div>
                        <?php $sl++; ?>
                        @endforeach
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <!-- Slide area end -->

        </div>
    </div>
    <!-- Slide area end -->
    @endif
    @endsection


    @section('content')
    {{  $page->content }}
    @endsection
