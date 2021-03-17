<template>

  <aside class="left-side sidebar-offcanvas" style="min-height: 900px;">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img style="display:block" src="http://localhost:8055/edus/uploads/images/b1f6494be86ef346562abae430ff3d7bb2e03e8126b4594607a224d90d258441dc1228dec03f28d5379285f28f3d89279d8b1899bb7cd0021edd552c7ba66629.png" class="img-circle" alt="">
        </div>

        <div class="pull-left info">
          <p>huda</p>
          <a href="http://localhost:8055/edus/profile/index">
            <i class="fa fa-hand-o-right color-green"></i> Admin </a>
        </div>
      </div>

      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="">
          <a href="http://localhost:8055/edus/student"><img src="http://localhost:8055/edus//uploads/icon/Information.png">
            <br><span>Information</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/student"><img src="http://localhost:8055/edus//uploads/icon/icon-student">
                <br><span>Student Info</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/parents"><img src="http://localhost:8055/edus//uploads/icon/fa-user">
                <br><span>Parents Info</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/teacher"><img src="http://localhost:8055/edus//uploads/icon/icon-teacher">
                <br><span>Teacher Info</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/user"><img src="http://localhost:8055/edus//uploads/icon/fa-users">
                <br><span>Stuff Info</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/admission"><img src="http://localhost:8055/edus//uploads/icon/Admission.png">
            <br><span>Admission</span> <b class="bgIcone"></b></a>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/sattendance"><img src="http://localhost:8055/edus//uploads/icon/Attendance.png">
            <br><span>Attendance</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/sattendance"><img src="http://localhost:8055/edus//uploads/icon/icon-sattendance">
                <br><span>Student Attendance</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/tattendance"><img src="http://localhost:8055/edus//uploads/icon/icon-tattendance">
                <br><span>Teacher Attendance</span> <b class="bgIcone"></b></a>
            </li>
            <li class=" lastmenuwidth">
              <a href="http://localhost:8055/edus/uattendance"><img src="http://localhost:8055/edus//uploads/icon/fa-user-secret">
                <br><span>Staff Attendance</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/routine"><img src="http://localhost:8055/edus//uploads/icon/Routine.png">
            <br><span>Routine</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/routine"><img src="http://localhost:8055/edus//uploads/icon/icon-routine">
                <br><span>Class Routine</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/troutine"><img src="http://localhost:8055/edus//uploads/icon/icon-teacher">
                <br><span>Teacher Routine</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/proxy"><img src="http://localhost:8055/edus//uploads/icon/fa-info-circle">
                <br><span>Proxy</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/routinereport"><img src="http://localhost:8055/edus//uploads/icon/fa-barcode">
                <br><span>Report</span> <b class="bgIcone"></b></a>
            </li>
            <li class=" lastmenuwidth">
              <a href="http://localhost:8055/edus/period"><img src="http://localhost:8055/edus//uploads/icon/icon-feetypes">
                <br><span>Period</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/classes"><img src="http://localhost:8055/edus//uploads/icon/Academic.png">
            <br><span>Academic</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/classes"><img src="http://localhost:8055/edus//uploads/icon/fa-sitemap">
                <br><span>Class</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/subject"><img src="http://localhost:8055/edus//uploads/icon/icon-subject">
                <br><span>Subject</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/section"><img src="http://localhost:8055/edus//uploads/icon/fa-star">
                <br><span>Section</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/shift"><img src="http://localhost:8055/edus//uploads/icon/fa-history">
                <br><span>Shift</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/campus"><img src="http://localhost:8055/edus//uploads/icon/fa-building">
                <br><span>Campus</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/versions"><img src="http://localhost:8055/edus//uploads/icon/fa-exchange">
                <br><span>Version</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/schoolyear"><img src="http://localhost:8055/edus//uploads/icon/fa fa-calendar-plus-o">
                <br><span>Academic Year</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/studentgroup"><img src="http://localhost:8055/edus//uploads/icon/fa-object-group">
                <br><span>Student Group</span> <b class="bgIcone"></b></a>
            </li>
            <li class=" lastmenuwidth">
              <a href="http://localhost:8055/edus/stucategory"><img src="http://localhost:8055/edus//uploads/icon/fa-tasks">
                <br><span>Student Category</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="active">
          <router-link    to="/"><img src="http://localhost:8055/edus//uploads/icon/Exam.png">
            <br><span>Exam</span> <b class="bgIcone"></b>
          </router-link>
<!--          <a href="/#/"><img src="http://localhost:8055/edus//uploads/icon/Exam.png">-->
<!--            <br><span>Exam</span> <b class="bgIcone"></b></a>-->

          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/exam_common"><img src="http://localhost:8055/edus//uploads/icon/fa-book">
                <br><span>Exam Setting</span> <b class="bgIcone"></b></a>
            </li>
            <li class="active">
              <a href="http://localhost:8055/edus/exam"><img src="http://localhost:8055/edus//uploads/icon/fa-pencil">
                <br><span>Exam</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/grade"><img src="http://localhost:8055/edus//uploads/icon/fa-signal">
                <br><span>Grade</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/exam_routine"><img src="http://localhost:8055/edus//uploads/icon/fa-home">
                <br><span>Exam Routine</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/seat_plan"><img src="http://localhost:8055/edus//uploads/icon/icon-exam">
                <br><span>Seat Plan</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/mark_distribution"><img src="http://localhost:8055/edus//uploads/icon/icon-exam">
                <br><span>Mark</span> <b class="bgIcone"></b></a>
              <ul class="treeview-menu">
                <li class=" lastmenuwidth">
                  <a href="http://localhost:8055/edus/mark"><img src="http://localhost:8055/edus//uploads/icon/fa-flask">
                    <br><span>Mark</span> <b class="bgIcone"></b></a>
                </li>
              </ul>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/result"><img src="http://localhost:8055/edus//uploads/icon/fa-history">
                <br><span>Result</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/promotion"><img src="http://localhost:8055/edus//uploads/icon/icon-promotion">
                <br><span>Promotion</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/question_bank"><img src="http://localhost:8055/edus//uploads/icon/fa-qrcode">
                <br><span>Question Bank</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/admitcard"><img src="http://localhost:8055/edus//uploads/icon/icon-exam">
                <br><span>Admit Card</span> <b class="bgIcone"></b></a>
            </li>
            <li class=" lastmenuwidth">
              <a href="http://localhost:8055/edus/tabulation_sheet"><img src="http://localhost:8055/edus//uploads/icon/icon-exam">
                <br><span>Tabulation Sheet</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/feetypes"><img src="http://localhost:8055/edus//uploads/icon/Payment.png">
            <br><span>Account</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/feetypes"><img src="http://localhost:8055/edus//uploads/icon/icon-feetypes">
                <br><span>Fee Collection</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/accountreport"><img src="http://localhost:8055/edus//uploads/icon/fa-barcode">
                <br><span>Account Report</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/transaction"><img src="http://localhost:8055/edus//uploads/icon/fa fa-exchange">
                <br><span>Transaction</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/accounts/chart_of_account/summary"><img src="http://localhost:8055/edus//uploads/icon/fa fa-area-chart">
                <br><span>Chart Of Accounts</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/expensetypes"><img src="http://localhost:8055/edus//uploads/icon/fa-tasks">
                <br><span>Expense</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/waiver"><img src="http://localhost:8055/edus//uploads/icon/icon-student">
                <br><span>Waiver</span> <b class="bgIcone"></b></a>
              <ul class="treeview-menu">
                <li class="">
                  <a href="http://localhost:8055/edus/waiver_student"><img src="http://localhost:8055/edus//uploads/icon/fa-users">
                    <br><span>student_wise_waiver</span> <b class="bgIcone"></b></a>
                </li>
                <li class="">
                  <a href="http://localhost:8055/edus/waiver_member"><img src="http://localhost:8055/edus//uploads/icon/icon-student">
                    <br><span>waiver_member</span> <b class="bgIcone"></b></a>
                </li>
              </ul>
            </li>
            <li class=" lastmenuwidth">
              <a href="http://localhost:8055/edus/manage_salary"><img src="http://localhost:8055/edus//uploads/icon/fa-usd">
                <br><span>Payroll</span> <b class="bgIcone"></b></a>
              <ul class="treeview-menu">
                <li class="">
                  <a href="http://localhost:8055/edus/hourly_template"><img src="http://localhost:8055/edus//uploads/icon/fa fa-clock-o">
                    <br><span>Hourly Template</span> <b class="bgIcone"></b></a>
                </li>
                <li class="">
                  <a href="http://localhost:8055/edus/manage_salary"><img src="http://localhost:8055/edus//uploads/icon/fa-beer">
                    <br><span>Manage Salary</span> <b class="bgIcone"></b></a>
                </li>
                <li class=" lastmenuwidth">
                  <a href="http://localhost:8055/edus/make_payment"><img src="http://localhost:8055/edus//uploads/icon/fa-money">
                    <br><span>Make Payment</span> <b class="bgIcone"></b></a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/notice"><img src="http://localhost:8055/edus//uploads/icon/Communication.png">
            <br><span>Communication</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/notice"><img src="http://localhost:8055/edus//uploads/icon/fa-calendar">
                <br><span>Notice</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/event"><img src="http://localhost:8055/edus//uploads/icon/fa-calendar-check-o">
                <br><span>Event</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/holiday"><img src="http://localhost:8055/edus//uploads/icon/icon-holiday">
                <br><span>Holiday</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/mailandsmstemplate"><img src="http://localhost:8055/edus//uploads/icon/icon-template">
                <br><span>Mail / SMS Template</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/conversation"><img src="http://localhost:8055/edus//uploads/icon/fa-envelope">
                <br><span>Message</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/mailandsms"><img src="http://localhost:8055/edus//uploads/icon/icon-mailandsms">
                <br><span>Mail / SMS</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/study_materials"><img src="http://localhost:8055/edus//uploads/icon/Study-Materials.png">
            <br><span>Study Materials</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/syllabus"><img src="http://localhost:8055/edus//uploads/icon/icon-syllabus">
                <br><span>Syllabus</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/study_materials"><img src="http://localhost:8055/edus//uploads/icon/fa-book">
                <br><span>Study Materials</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/usertype"><img src="http://localhost:8055/edus//uploads/icon/Administrator.png">
            <br><span>Administrator</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/resetpassword"><img src="http://localhost:8055/edus//uploads/icon/icon-reset_password">
                <br><span>Reset Password</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/bulkimport"><img src="http://localhost:8055/edus//uploads/icon/fa-upload">
                <br><span>Import</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/usertype"><img src="http://localhost:8055/edus//uploads/icon/icon-role">
                <br><span>Role</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/permission"><img src="http://localhost:8055/edus//uploads/icon/icon-permission">
                <br><span>Permission</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/book"><img src="http://localhost:8055/edus//uploads/icon/library.png">
            <br><span>Library</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/book"><img src="http://localhost:8055/edus//uploads/icon/icon-lbooks">
                <br><span>Books</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/lmember"><img src="http://localhost:8055/edus//uploads/icon/icon-member">
                <br><span>Member</span> <b class="bgIcone"></b></a>
            </li>
            <li class=" lastmenuwidth">
              <a href="http://localhost:8055/edus/issue"><img src="http://localhost:8055/edus//uploads/icon/icon-issue">
                <br><span>Transaction</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/transport"><img src="http://localhost:8055/edus//uploads/icon/Transport.png">
            <br><span>Transport</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/transport"><img src="http://localhost:8055/edus//uploads/icon/icon-sbus">
                <br><span>Route</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/vehicle"><img src="http://localhost:8055/edus//uploads/icon/icon-bus">
                <br><span>Vehicle</span> <b class="bgIcone"></b></a>
            </li>
            <li class=" lastmenuwidth">
              <a href="http://localhost:8055/edus/tmember"><img src="http://localhost:8055/edus//uploads/icon/icon-member">
                <br><span>Member</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/asset"><img src="http://localhost:8055/edus//uploads/icon/inventory.png">
            <br><span>Asset/Inventory</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/asset"><img src="http://localhost:8055/edus//uploads/icon/fa-fax">
                <br><span>Asset</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/vendor"><img src="http://localhost:8055/edus//uploads/icon/fa-rss">
                <br><span>Vendor</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/location"><img src="http://localhost:8055/edus//uploads/icon/fa-newspaper-o">
                <br><span>Location</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/asset_category"><img src="http://localhost:8055/edus//uploads/icon/fa-life-ring">
                <br><span>Asset Category</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/asset_assignment"><img src="http://localhost:8055/edus//uploads/icon/fa-plug">
                <br><span>Asset Assignment</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/purchase"><img src="http://localhost:8055/edus//uploads/icon/fa-cart-plus">
                <br><span>Stock-in</span> <b class="bgIcone"></b></a>
            </li>
            <li class=" lastmenuwidth">
              <a href="http://localhost:8055/edus/damage"><img src="http://localhost:8055/edus//uploads/icon/fa-archive">
                <br><span>Damage</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class="">
          <a href="http://localhost:8055/edus/frontend_setting"><img src="http://localhost:8055/edus//uploads/icon/frontend.png">
            <br><span>Frontend</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/photo_gallery"><img src="http://localhost:8055/edus//uploads/icon/fa-photo">
                <br><span>Photo Gallery</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/pages"><img src="http://localhost:8055/edus//uploads/icon/fa-connectdevelop">
                <br><span>Pages</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/frontend_setting"><img src="http://localhost:8055/edus//uploads/icon/fa-asterisk">
                <br><span>Frontend Settings</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/dresscode"><img src="http://localhost:8055/edus//uploads/icon/fa-calendar-plus-o">
                <br><span>Dres Code</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/resultsummary"><img src="http://localhost:8055/edus//uploads/icon/fa-bar-chart">
                <br><span>Result Summary</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/classschedule"><img src="http://localhost:8055/edus//uploads/icon/fa-calendar">
                <br><span>Class Schedule</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/admissioninformation"><img src="http://localhost:8055/edus//uploads/icon/fa-info">
                <br><span>Admission Information</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/sidebarsetting"><img src="http://localhost:8055/edus//uploads/icon/fa-gear">
                <br><span>Sidebar Setting</span> <b class="bgIcone"></b></a>
            </li>
            <li class=" lastmenuwidth">
              <a href="http://localhost:8055/edus/frontend_features"><img src="http://localhost:8055/edus//uploads/icon/fa-gears">
                <br><span>Frontend Features</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
        <li class=" lastmenuwidth">
          <a href="http://localhost:8055/edus/setting"><img src="http://localhost:8055/edus//uploads/icon/Setting.png">
            <br><span>Settings</span> <b class="bgIcone"></b></a>
          <ul class="treeview-menu">
            <li class="">
              <a href="http://localhost:8055/edus/setting"><img src="http://localhost:8055/edus//uploads/icon/fa-gears">
                <br><span>General Setting</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/smssettings"><img src="http://localhost:8055/edus//uploads/icon/fa-wrench">
                <br><span>SMS Settings</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/apisetting"><img src="http://localhost:8055/edus//uploads/icon/fa-gear">
                <br><span>API Settings</span> <b class="bgIcone"></b></a>
            </li>
            <li class="">
              <a href="http://localhost:8055/edus/templatesettings"><img src="http://localhost:8055/edus//uploads/icon/fa-gears">
                <br><span>Template Settings</span> <b class="bgIcone"></b></a>
            </li>
          </ul>
        </li>
      </ul>

    </section>
    <!-- /.sidebar -->
  </aside>

</template>


<script>

</script>

<style>

</style>
