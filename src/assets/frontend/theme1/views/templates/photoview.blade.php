@layout('views/layouts/master')

@section('before_content')
<div class="page-title-row">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3 class="page-title">Single Gallery</h3>
            </div>
        </div>
    </div>
</div>
@endsection

@section('content')

<div class="single-image-gallery-box" style="margin-top: 40px;">

    <!--    <div class="row">
            <div class="col-md-12">
                <div class="gallery-header">
                    <h3 class="news_event_text">Our School Gallery</h3>
                    <p class="gallery-date">
                        {{ date('j F, Y', strtotime($photos[0]->create_date)) }}
                    </p>
                </div>
            </div>
    
        </div>-->
    <div class="row gallery" id="category-div">
        @foreach($photos as $photo)
        <div class="col-md-3 mb-4">
            <div class="single-gallery-image-list">
                <div class="thumb">
                    <a href="{{ base_url('uploads/gallery/'.$photo->photo) }}"><img class="img img-responsive" src="{{ base_url('uploads/gallery/'.$photo->photo) }}" alt=""></a>
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

@endsection