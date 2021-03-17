<template>
<body>
    <header class="header">
      <a href="http://localhost:8055/edus/dashboard/index" class="logo">
        Central Labo..    </a>
      <nav class="navbar navbar-static-top" role="navigation">
        <a href="#" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>


        <div class="navbar-right">
          <ul class="nav navbar-nav">
            <li class=" top-search hidden-xs hidden-sm" style="border-left:none;border-right: none;">
              <form method="post" action="http://localhost:8055/edus/student/search_student" role="search">
                <div id="imaginary_container">
                  <div class="input-group stylish-input-group">
                    <input name="keyword" type="text" class="form-control" required="" placeholder="Search By student">
                    <span class="input-group-addon">
                        <button type="submit">
                            <span class="glyphicon glyphicon-search"></span>
                        </button>
                    </span>
                  </div>
                </div>
              </form>
            </li>

            <li class="dropdown user user-menu hidden-xs menu-dropdown" style="padding:12px 0px; min-width:120px;">
              <b>Campus</b><br>
              <div class="btn-group">
                <button id="city" style="background: transparent;padding:2px 10px;min-width:120px;" class="btn" data-toggle="dropdown">
                  little flower kinder garden
                </button><br>
                <button style="background: transparent;padding:0px;width:100%;" class="btn" data-toggle="dropdown">
                  <span class="fa fa-angle-down"></span>
                </button>
                <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                  <li><a style="white-space: normal;" tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolcampus/3">little flower kinder garden</a></li>
                  <li><a style="white-space: normal;" tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolcampus/4">little flower  girls</a></li>
                  <li><a style="white-space: normal;" tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolcampus/5">little flower  boys</a></li>
                  <li><a style="white-space: normal;" tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolcampus/6">little flower college</a></li>
                  <li><a style="white-space: normal;" tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolcampus/7">little flower maddrasha</a></li>
                  <li><a style="white-space: normal;" tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolcampus/8">Test Campus</a></li>
                  <li><a style="white-space: normal;" tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolcampus/9">Cantonment Board High School Gazipur</a></li>
                </ul>
              </div>
            </li>
            <li class="dropdown user user-menu hidden-xs dropdown-toggle menu-dropdown" style="padding:12px 0px;">
              <b>Sessions</b><br>
              <div class="btn-group">
                <button id="year" style="background: transparent;padding:2px 10px;" class="btn" data-toggle="dropdown">
                  2019-2020
                </button><br>
                <button style="background: transparent;padding:0px;width:100%;" class="btn" data-toggle="dropdown">
                  <span class="fa fa-angle-down"></span>
                </button>
                <ul id="dropdown-menu" class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/7">2021</a></li>
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/10">2020/2021</a></li>
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/8">2020-2021</a></li>
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/6">2020</a></li>
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/4">2019-2020</a></li>
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/9">2019-2020</a></li>
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/3">2018-2019</a></li>
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/1">2017-2018</a></li>
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/5">2017</a></li>
                  <li><a tabindex="-1" href="http://localhost:8055/edus/schoolyear/toggleschoolyear/11">2004-2005</a></li>
                </ul>
              </div>
            </li>
            <li class="dropdown messages-menu hidden-md menu-dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i style="font-size: 28px;" class="fa fa-bell-o"></i>
              </a>
              <ul class="dropdown-menu"><li class="header">You have 0 notifications</li><li style="padding:0;border: none;"><div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 200px;"><ul class="menu" style="overflow: hidden; width: 100%; height: 200px;"><li style="padding:0"><a href="http://localhost:8055/edus/notice/view/2"><div class="pull-left"><img class="img-circle" src="http://localhost:8055/edus/uploads/images/01054750bcb3564d3e6277bd68560f03a41577f542682fcb6593c88f6a2908d1a2ad0447117efb55e93636eddb6a4c8abe6b3a0905510e37a97bedd97d65c130.png"></div><h4>Admission<small><i class="fa fa-clock-o"></i> 5 months</small></h4><p>jkljkljljkljkljkljkljk</p></a></li><li style="padding:0"><a href="http://localhost:8055/edus/notice/view/1"><div class="pull-left"><img class="img-circle" src="http://localhost:8055/edus/uploads/images/01054750bcb3564d3e6277bd68560f03a41577f542682fcb6593c88f6a2908d1a2ad0447117efb55e93636eddb6a4c8abe6b3a0905510e37a97bedd97d65c130.png"></div><h4>Final Exam<small><i class="fa fa-clock-o"></i> 6 months</small></h4><p>Final Exam routine have been p..</p></a></li></ul><div class="slimScrollBar" style="background: rgb(0, 0, 0); width: 3px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 0px; z-index: 99; right: 1px;"></div><div class="slimScrollRail" style="width: 3px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 0px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div></li><li class="footer" style="padding:0px"><a href="http://localhost:8055/edus/notice/index">See All Notifications</a></li></ul>                    </li>
            <li>
              <div class="language">
                <a href="http://localhost:8055/edus/language/index/english" style="color:#22A3DF;padding:0 3px;;"> ENG</a><br>
                <a href="http://localhost:8055/edus/language/index/bengali"> BAN</a>
              </div>

            </li>
            <li class="dropdown user user-menu menu-dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="http://localhost:8055/edus/uploads/images/b1f6494be86ef346562abae430ff3d7bb2e03e8126b4594607a224d90d258441dc1228dec03f28d5379285f28f3d89279d8b1899bb7cd0021edd552c7ba66629.png" class="user-logo" alt=""><br>
              </a>
              <ul class="dropdown-menu">
                <li class="">
                  <p>huda <br>(Admin)</p>
                </li>
                <li>
                  <a href="http://localhost:8055/edus/profile/index">Profile </a>
                </li>
                <li class="">
                  <a href="http://localhost:8055/edus/signin/signout">
                    Log out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
</body>
</template>

<script>

</script>

<style>

</style>
