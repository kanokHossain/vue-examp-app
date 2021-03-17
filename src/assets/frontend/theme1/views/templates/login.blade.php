@layout('views/layouts/master')


@section('content')
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

    <section id="about" class="about-area area-padding">
    	<div class="container">
    		<div class="row">
                @if(!count($featured_image))
                    <div class="col-md-12">
                        <div class="about-content">
                            <p> {{ htmlspecialchars_decode($page->content) }} </p>
                        </div>
                    </div>
                @else
                    <div class="col-md-6 col-md-push-6">
                        <div class="content-img">
                            <img src="{{ base_url('uploads/gallery/'.$featured_image->file_name) }}" alt="$featured_image->file_alt_text" />
                        </div>
                    </div>
                    <div class="col-md-6 col-md-pull-6">
                        <div class="about-content">
                            <form action="" method="POST">
                                <input type="text" name="username">
                                <input type="text" name="password">
                                <input type="submit" name="submit" value="submit">
                            </form>
                        </div>
                    </div>
                @endif
            </div>
    	</div>
    </section>

@endsection
