<nav class="navbar header-menu-area">
    <!-- Start container -->
    <div class="container">
        <!-- Logo and toggle  -->
        <div class="navbar-header">
            <button aria-expanded="false" data-target="#navbar-collaps" data-toggle="collapse" class="navbar-toggle collapsed" type="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!-- Start Logo -->
<!--            <div class="logo text-uppercase">
                <h1>
    <a href="{{ base_url('frontend/page/'.$homepage->url) }}"><img src="{{ base_url('uploads/images/'.frontendData::get_backend('photo')) }}" ></a>
                </h1>
            </div>-->
            <!-- End Logo -->
        </div>
        <!-- main menu start -->
        <div id="navbar-collaps" class="collapse navbar-collapse">
            <ul  class="nav navbar-nav navbar-left">
                {{ frontendData::get_frontent_topbar_menu() }}
            </ul>
        </div>   <!-- /.navbar-collapse -->
    </div>   <!-- End container -->
</nav>

