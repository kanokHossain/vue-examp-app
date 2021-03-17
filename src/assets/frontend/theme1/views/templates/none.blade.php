
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
@else
<!--<h2 class="page-title">{{ $page->title }}</h2>-->
@if(count($page_setting) > 0)
@if($page_setting['show_page_title'] == "yes")
<h2 class="page-title">{{ $page->title }}</h2>
@endif
@else
<h2 class="page-title">{{ $page->title }}</h2>
@endif
@endif
{{ htmlspecialchars_decode($page->content) }}
@endsection