<!-- New Navbar -->
<div class="menu-container">
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand d-md-block d-lg-none" href="{{ base_url('frontend/page/'.$homepage->url) }}"><img class="mobile-logo" src="{{ base_url('uploads/images/'.$backend->photo) }}" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    {{ frontendData::get_frontent_topbar_menu3() }}
                </ul>
            </div>
        </nav>
    </div>
</div>