
@layout('views/layouts/master')


@section('content')

	<section id="notice" class="notice-area area-padding gray-bg">
	    <div class="container">
	        <div class="row">
	            <div class="col-md-12">
	                <div class="recen-single-notice">
	                    <div class="recen-notice-content">
	                        <h3>{{ $noticeView->title }}</h3>
	                        <div class="notice-meta">
	                            <span class="published-date">
	                                <i class="fa fa-calendar"></i>
	                                {{ date('d M Y', strtotime($noticeView->date)) }}
	                            </span>
	                        </div>
	                        <p>{{ htmlspecialchars_decode($noticeView->notice) }}</p>
                                <img src="{{ base_url('uploads/images/'.$noticeView->photo) }}" alt="">
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</section>

@endsection