<div class="top-header-container">
    <div class="container">
        <div class="row row-eq-height header-top-div">
            <div class="col-md-6 pad-left-0 pad-right-0 mar-right-0 mar-left-0">
                <div class="logo-container">
                    <div class="logo">
                        <a href="{{ base_url('frontend/page/'.$homepage->url) }}"><img class="logo-img img img-responsive" width="175" src="{{ base_url('uploads/images/'.$backend->photo) }}" alt=""></a>
                        <h3 class="site-title d-inline-block" style="font-size: 22px">{{namesorting($backend->sname, 100) }}</h3>
                        @if($setting->is_visible_emis == 'yes')
                        <h6>EMIS NO - {{ $setting->emis }}</h6>
                        @endif
                    </div>
                </div>
            </div>
            <div class="col-md-6 pad-left-0 pad-right-0 mar-right-0 mar-left-0 login-container profile-container text-right d-none d-sm-none d-lg-block">
                <div class="lang-container d-inline-block">
                    <div class="lang-switch d-inline-block">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" onclick="changeLang('eng')" class="btn btn-lang text-uppercase <?php
                            if (isset($this->session->lang_data)) {
                                if ($this->session->lang_data != "ban") {
                                    echo 'active';
                                }
                            } else {
                                echo 'active';
                            }
                            ?>">eng</button>
                            <button type="button" onclick="changeLang('ban')" class="btn btn-lang text-uppercase <?php
                            if (isset($this->session->lang_data)) {
                                if ($this->session->lang_data != "eng") {
                                    echo 'active';
                                }
                            }
                            ?>">ban</button>
                        </div>
                    </div>
                </div>
                <a href="{{ base_url('signin/index') }}" class="login-link">
                    <?php
                    if ($this->session->userdata("loggedin")) {
                        echo $this->session->userdata('name');
                    } else {
                        echo 'Log In';
                    }
                    ?> <i class="login-icon fa fa-lock"></i>
                </a>
            </div>
        </div>
    </div>
</div>