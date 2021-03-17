@layout('views/layouts/master')


@section('content')

@if(count($sliders))
<div id="main-slider" class="slider-area">
    @foreach($sliders as $slider)
    <div class="single-slide">
        <img src="{{ base_url('uploads/gallery/'.$slider->file_name) }}" alt="">
        <div class="banner-overlay">
            <div class="container">
                <div class="caption style-2">
                    <h2>{{ sentenceMap(htmlspecialchars_decode($slider->file_title), 17, '<span>', '</span>') }}</h2>
                    <p>{{ htmlspecialchars_decode($slider->file_description) }}</p>
                </div>
            </div>
        </div>
    </div>
    @endforeach
</div>
@endif

@if(count($featured_image))
<div class="featured-slider">
    <img src="{{ base_url('uploads/gallery/'.$featured_image->file_name) }}" alt="{{ $featured_image->file_alt_text }}">
</div>
@endif

<!-- bradcame area  -->
<div class="bradcam-area area-padding">
    <div class="container">
        <div class="row">
            <div class=" col-md-8">
                <div class="section-title white-title bradcam-title text-uppercase text-left">
                    <h2> {{ $page->title }} </h2>

                </div>
            </div>
            <div class="bradcam-wrap col-md-4 text-right">
                <nav class="bradcam-inner">
                    <a class="bradcam-item text-uppercase" href="{{ base_url('frontend/page/'.$homepage->url) }}">{{ $homepage->menu_label }}</a>
                    <span class="brd-separetor">/</span>
                    <span class="bradcam-item active text-uppercase">{{ $page->title }}</span>
                </nav>
            </div>
        </div>
    </div>
</div>
<!-- bradcame area  -->

<style>
    .desc {
        padding: 5px;
        text-align: center;
        font-size: 90%;
        background:black;
        color:hotpink
    }
    .thumb{
        margin-top: 0;
        margin-bottom: 0;
    }
    .single-teacher-list .teacher-info{
        height: 0;
    }
    .single-teacher-list:hover .teacher-info {
        height: auto;
    }
</style>

<section id="about" class="about-area area-padding">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <!--                    {{ htmlspecialchars_decode($page->content) }}-->
                <div class="row gallery" id="category-div">
                    @foreach($categories as $category)
                    <div class="col-md-3 col-sm-4">
                        <div class="single-teacher-list">
                            <div class="thumb">
                                <a href="{{ base_url('uploads/gallery/' . $category->featured_image) }}"><img src="{{ base_url('uploads/gallery/' . $category->featured_image) }}" alt=""></a>
                            </div>
                            <div class="teacher-info">
                                <h2><button style="border: none; background: none" class="myClass" id="{{ $category->id }}">{{ $category->title }}</button></h2>
                                <div class="social-icons">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>

                <div class="row pgallery">
                    <h5 class="page-header" id="display-back" style="display: none">
                        <button class="btn btn-primary" id="gallery-back" type="button">Back</button>
                    </h5>
                    <div class="row" id="photo-div" style="display: none"></div>
                </div>
            </div> 
        </div>
    </div>
</section>

@endsection
