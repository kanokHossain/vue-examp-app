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
    
	
    <section id="our-teacher" class="our-teacher-area area-padding text-center gray-bg">
        <div class="container">
            <div class="row">
            	@if(count($teachers))
                    @foreach($teachers as $teacher)
		                <div class="col-md-3 col-sm-4">
		                    <div class="single-teacher-list">
		                        <div class="thumb">
		                            <a href="#"><img src="{{ base_url('uploads/images/'.$teacher->photo) }}" alt=""></a>
		                        </div>
		                        <div class="teacher-info">
		                        	<h2><a href="#">{{ $teacher->name }}</a></h2>
		                            <p>{{ $teacher->designation }}</p>
		                            <div class="social-icons">
		                            	<a></a>
		                            </div>
		                        </div>
		                    </div>
		                </div>
                    @endforeach
                @endif
            </div>
        </div>
    </section>

    <!-- Start About Content -->
    <section id="about" class="">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="main-about">
                        <p> {{ htmlspecialchars_decode($page->content) }} </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Close About Content -->

@endsection
