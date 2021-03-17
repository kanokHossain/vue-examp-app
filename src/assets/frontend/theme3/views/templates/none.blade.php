
@layout('views/layouts/master')

@section('before_content')
<div class="page-heading">
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
                <h3 class="page-title">{{ $page->title }}</h3>
            </div>
        </div>
    </div>
</div>
@endsection

@section('content')

{{ htmlspecialchars_decode($page->content) }}

@endsection