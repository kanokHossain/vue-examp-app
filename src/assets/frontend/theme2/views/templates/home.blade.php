@layout('views/layouts/master')

@section('before_content')
    @if(count($sliders))
        <!-- Slide area start -->
        <div class="col-md-12 banner pad-left-0 pad-right-0">
            <div class="slider-images owl-carousel owl-theme" id="owl-carousel-slider">
                @foreach($sliders as $slider)
                    <div class="item slider-div">
                        <figure>
                            <img class="img img-responsive img-fluid" style="position: relative" src="{{ base_url('uploads/gallery/'.$slider->file_name) }}" alt="Image">
                            <div class="slider-div-content">
                                <div class="slider-content-text d-inline-block boxshadow">
                                    <a class="btn btn-dafult boxshadow-effect" href="{{  base_url('frontend/page') }}">School Visit</a>
                                </div>
                                <div class="slider-content-text d-inline-block boxshadow">
                                    <a class="btn btn-dafult boxshadow-effect" href="{{  base_url('frontend/page/admission') }}">Online Admission</a>
                                </div>
                            </div>
                        </figure>
                    </div>
                @endforeach
            </div>
        </div>
        <!-- Slide area end -->
    @endif
@endsection


@section('content')
    {{  $page->content }}
@endsection
