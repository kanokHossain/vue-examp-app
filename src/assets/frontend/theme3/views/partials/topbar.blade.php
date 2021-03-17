<div class="top-header-container">
    <div class="container-fluid header-top pr-0 pl-0">
        <div class="container">
            <div class="d-flex bd-highlight mb-3 header-top-row">
                <div class="header-top-container d-inline-flex justify-content-center align-self-center mr-auto p-2 bd-highlight">
                    <p class="top-header-text"><i class="fa fa-map-marker custom-font-awesome-class"></i>{{ $backend->saddress }}</p>
                    <p class="top-header-text"><i class="fa fa-phone custom-font-awesome-class"></i>{{ $backend->phone }}</p>
                </div>
                <div class="d-none d-lg-inline-flex p-2 bd-highlight">
                    <div class="custom-language-div dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="languageDropdown" role="button" data-toggle="dropdown">
                            <?php
                            if (isset($this->session->lang_data)) {
                                if ($this->session->lang_data != "ban") {
                                    echo 'English';
                                } else {
                                    echo "Bangla";
                                }
                            } else {
                                echo 'Bangla';
                            }
                            ?>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="languageDropdown">
                            <?php
                            if (isset($this->session->lang_data)) {
                                if ($this->session->lang_data != "ban") { ?>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="changeLang('ban')">Bangla</a>
                                <?php } else { ?>
                                    <a class="dropdown-item" href="javascript:void(0)" onclick="changeLang('eng')">English</a>
                                <?php }
                            } else { ?>
                                <a class="dropdown-item" href="javascript:void(0)" onclick="changeLang('eng')">English</a>
                            <?php }
                            ?>
                        </div>
                    </div>
                    <div class="custom-login">
                        <a href="{{ base_url('signin/index') }}" class="top-header-text custom-header-login-link"><i class="fa fa-lock custom-font-awesome-class"></i><?php
                                                                                                                                                                        if ($this->session->userdata("loggedin")) {
                                                                                                                                                                            echo $this->session->userdata('name');
                                                                                                                                                                        } else {
                                                                                                                                                                            echo 'Login';
                                                                                                                                                                        }
                                                                                                                                                                        ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        .emis-line-break {
            content: '\A';
            white-space: pre;
        }
    </style>
    <div class="container justify-content-center align-items-center header-school-text d-none d-lg-block">
        <div class="d-inline-flex align-items-center">
            <img class="header-logo" src="{{ base_url('uploads/images/'.$backend->photo) }}">
            <h3 class="site-title">
                <span class="emis-line-break" style="font-size: 20px">{{namesorting($backend->sname, 100) }}</span>
                 @if($setting->is_visible_emis == 'yes')
                 <span class="emis-line-break" style="font-size: 15px">
                    EMIS NO - {{ $setting->emis }}
                 </span>
                 @endif
            </h3>
        </div>
    </div>
</div>