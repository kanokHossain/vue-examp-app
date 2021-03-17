<div class="menu-container">
    <div class="container" id="menu_container_div">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand d-md-block d-lg-none" href="{{ base_url('frontend/page/'.$homepage->url) }}"><img class="mobile-logo" src="{{ base_url('uploads/images/'.$backend->photo) }}" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    {{ frontendData::get_frontent_topbar_menu2() }}
                </ul>
            </div>
        </nav>
    </div>
</div>