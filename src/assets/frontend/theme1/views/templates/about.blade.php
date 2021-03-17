@layout('views/layouts/master')

@section('before_content')
    <style>
        .img-responsive{
            width: 100%;
        }
    </style>


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

    <div class="page-title-row" @if( count($featured_image) ) style="margin-bottom: 0;"@endif>
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
                    <!--<h2> {{ $page->title }} </h2>-->
                    @if(count($page_setting) > 0)
                    @if($page_setting['show_page_title'] == "yes")
                    <h3 class="page-title">{{ $page->title }}</h3>
                    @endif
                    @else
                    <h3 class="page-title">{{ $page->title }}</h3>
                    @endif
                    <!--<h3 class="page-title">Contact Us</h3>-->
                </div>
            </div>
        </div>
    </div>

    @if(count($featured_image))
        <div class="content-img" style="margin-bottom: 40px;">
            <img class="img img-responsive" src="{{ base_url('uploads/gallery/'.$featured_image->file_name) }}" alt="{{ $featured_image->file_alt_text }}" />
        </div>
    @endif
@endsection


@section('content')
    {{ $page->content }}
@endsection
