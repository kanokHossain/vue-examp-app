<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Type" content="text/html">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

        <link rel="SHORTCUT ICON" href="{{ base_url('uploads/images/'.frontendData::get_backend('photo')) }}">
        <title>{{ $page->title ? $page->title.' | ': '' }}{{ $backend->sname }}  </title>

        @include('views/partials/headerAssets')
    </head>
    <body class="body-container {{ $menu_flot }}">

        <div class="header-container">
            @include('views/partials/topbar')
            @include('views/partials/navbar')
        </div>

        <!-- Start Main content -->
        <div class="main-content">
            @yield('before_content')
            
            @if(count($page_setting) > 0)
                @if($page_setting['page_style'] == "full page")
                    @yield('content')
                @elseif($page_setting['page_style'] == "default")
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                @yield('content')
                            </div>
                        </div>
                    </div>
                @else
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                @yield('content')
                            </div>

                            <div class="col-md-4 pos-relative">
                                @include('views/partials/sidebar')
                            </div>
                        </div>
                    </div>
                @endif
            @else
                @if(isset($sidebar))
                    @if($sidebar == 'no')
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    @yield('content')
                                </div>
                            </div>
                        </div>
                    @endif
                @else
                    <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    @yield('content')
                                </div>
                            </div>
                    </div>
                @endif
            @endif

            @include('views/partials/footer')
        </div>
        @include('views/partials/footerAssets')
    </body>
</html>
