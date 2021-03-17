<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Type" content="text/html">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

        <link rel="SHORTCUT ICON" href="{{ base_url('uploads/images/'.frontendData::get_backend('photo')) }}">
        <title> {{ frontendData::get_backend('sname') }}  </title>

        @include('views/partials/headerAssets')

        <style>
            span.logo-text {
                position: relative;
                display: inline-block;
            }
            span.moto-text {
                position: absolute;
                top: 100%;
                width: 100%;
                left: 0;
                font-size: 16px;
                text-align: center;
                margin-top: 5px;
                color: #777;
                font-weight: normal;
            }
        </style>
    </head>
    <body>
        <div class="main-header">

            <div class="logo text-uppercase text-left">
                <h1>
                    <a href="{{ base_url('frontend/page/'.$homepage->url) }}"><img src="{{ base_url('uploads/images/'.frontendData::get_backend('photo')) }}" >
                    <span class="logo-text" style="{{ frontendData::get_title_size() ? 'font-size:'.frontendData::get_title_size().'px;' : '' }}">{{namesorting($backend->sname, 100) }} <span class="moto-text" style="{{ frontendData::get_moto_color() ? 'color:'.frontendData::get_moto_color().';' : '' }}">{{ $setting->site_moto }}</span></span></a>
                </h1>
                @if($setting->is_visible_emis == 'yes')
                <h6 style="padding: 0px 15px">EMIS NO - {{ $setting->emis }}</h6>
                @endif
            </div>

        </div>
        <header id="home" style="margin-top: 15px;box-shadow: 0px 2px 1px 0px #eee;background-image: linear-gradient(to right, #078CD2, #0094C3,#019DBA,#02A5AF, #00AEA5, #00B39E);">
            <!--       @include('views/partials/topbar') -->
            @include('views/partials/navbar')
        </header>

        @yield('content')
        @include('views/partials/footer')
        @include('views/partials/footerAssets')

    </body>
</html>
