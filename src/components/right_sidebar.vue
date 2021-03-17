<template>
  <aside class="right-side">
    <div class="quicklink">
      <nav class="navbar">


        <ul class="nav navbar-nav" id="quinsertLink">

          <li class="active"><label onclick="closeLink('1', 'dashboard')"><i class="fa fa-close"></i></label><a href="http://localhost:8055/edus/dashboard">Dashboard</a></li>



          <li class="active"><label onclick="closeLink('1', 'teacher')"><i class="fa fa-close"></i></label><a href="http://localhost:8055/edus/teacher">Teacher Info</a></li>



          <li class="active"><label onclick="closeLink('1', 'parents')"><i class="fa fa-close"></i></label><a href="http://localhost:8055/edus/parents">Parents Info</a></li>



          <li class="active"><label onclick="closeLink('1', 'sattendance')"><i class="fa fa-close"></i></label><a href="http://localhost:8055/edus/sattendance">Student Attendance</a></li>



          <li class="active"><label onclick="closeLink('1', 'tattendance')"><i class="fa fa-close"></i></label><a href="http://localhost:8055/edus/tattendance">Teacher Attendance</a></li>



          <li class="active"><label onclick="closeLink('1', 'routine')"><i class="fa fa-close"></i></label><a href="http://localhost:8055/edus/routine">Routine</a></li>



          <li class="active"><label onclick="closeLink('1', 'notice')"><i class="fa fa-close"></i></label><a href="http://localhost:8055/edus/notice">Notice</a></li>



          <li class="active"><label onclick="closeLink('1', 'event')"><i class="fa fa-close"></i></label><a href="http://localhost:8055/edus/event">Event</a></li>



          <li class="active"><label onclick="closeLink('1', 'holiday')"><i class="fa fa-close"></i></label><a href="http://localhost:8055/edus/holiday">Holiday</a></li>



          <li class="active"><label onclick="closeLink('1', 'exam')"><i class="fa fa-close"></i></label><a href="/#/">Exam</a></li>




        </ul>
        <!--               <button type="button" class="btn-primary pull-right" data-toggle="modal" data-target="#myModal"><i class="fa fa-plus"></i> Add Quick Link</button>-->

        <div class="dropdown  pull-right">
          <button id="quLink" onclick="myFunction()" class="dropbtn btn-primary"><i class="fa fa-plus"></i></button>
          <span class="qu_arrow" style="display:none;"></span>
          <div id="myDropdown" class="dropdown-content mCustomScrollbar _mCS_2 mCS_no_scrollbar" style=""><div id="mCSB_2" class="mCustomScrollBox mCS-light-3 mCSB_vertical mCSB_inside" style="max-height: 378px;" tabindex="0"><div id="mCSB_2_container" class="mCSB_container mCS_y_hidden mCS_no_scrollbar_y" style="position:relative; top:0; left:0;" dir="ltr">

            <div id="imaginary_container" style="margin-bottom:15px;">
              <div class="input-group stylish-input-group">
                <input name="keyword" type="text" class="form-control" id="myInput" onkeyup="filterFunction()">
                <span class="input-group-addon" style="background-color:#f6f6f7;">
                                <button type="">
                                    <span class="glyphicon glyphicon-search"></span>
                                </button>
                            </span>
              </div>
            </div>
            <!--     <span class="qu_arrow"></span>-->
            <!--     <input type="text" placeholder="Search...." id="myInput" onkeyup="filterFunction()">-->



            <h5 class="main_menu_information" onclick="qulinkmenu('information')">Information</h5>
            <div class="excontent" id="open_information">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/student/1" onclick="submit_quling('student','1')"><i class="fa fa-plus-circle"></i> Student Info</a> -->
              <a class="" onclick="submit_quling('student', '1')"><i class="fa fa-plus-circle"></i> Student Info</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/parents/1" onclick="submit_quling('parents','1')"><i class="fa fa-plus-circle"></i> Parents Info</a> -->
              <a class="fqactive" onclick="submit_quling('parents', '1')"><i class="fa fa-plus-circle"></i> Parents Info</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/teacher/1" onclick="submit_quling('teacher','1')"><i class="fa fa-plus-circle"></i> Teacher Info</a> -->
              <a class="fqactive" onclick="submit_quling('teacher', '1')"><i class="fa fa-plus-circle"></i> Teacher Info</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/user/1" onclick="submit_quling('user','1')"><i class="fa fa-plus-circle"></i> Stuff Info</a> -->
              <a class="" onclick="submit_quling('user', '1')"><i class="fa fa-plus-circle"></i> Stuff Info</a>
            </div>





            <h5 class="main_menu_admission" onclick="qulinkmenu('admission')">Admission</h5>
            <div class="excontent" id="open_admission">
            </div>





            <h5 class="main_menu_main_attendance" onclick="qulinkmenu('main_attendance')">Attendance</h5>
            <div class="excontent" id="open_main_attendance">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/sattendance/1" onclick="submit_quling('sattendance','1')"><i class="fa fa-plus-circle"></i> Student Attendance</a> -->
              <a class="fqactive" onclick="submit_quling('sattendance', '1')"><i class="fa fa-plus-circle"></i> Student Attendance</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/tattendance/1" onclick="submit_quling('tattendance','1')"><i class="fa fa-plus-circle"></i> Teacher Attendance</a> -->
              <a class="fqactive" onclick="submit_quling('tattendance', '1')"><i class="fa fa-plus-circle"></i> Teacher Attendance</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/uattendance/1" onclick="submit_quling('uattendance','1')"><i class="fa fa-plus-circle"></i> Staff Attendance</a> -->
              <a class="" onclick="submit_quling('uattendance', '1')"><i class="fa fa-plus-circle"></i> Staff Attendance</a>
            </div>





            <h5 class="main_menu_routine" onclick="qulinkmenu('routine')">Routine</h5>
            <div class="excontent" id="open_routine">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/routine/1" onclick="submit_quling('routine','1')"><i class="fa fa-plus-circle"></i> Class Routine</a> -->
              <a class="fqactive" onclick="submit_quling('routine', '1')"><i class="fa fa-plus-circle"></i> Class Routine</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/troutine/1" onclick="submit_quling('troutine','1')"><i class="fa fa-plus-circle"></i> Teacher Routine</a> -->
              <a class="" onclick="submit_quling('troutine', '1')"><i class="fa fa-plus-circle"></i> Teacher Routine</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/proxy/1" onclick="submit_quling('proxy','1')"><i class="fa fa-plus-circle"></i> Proxy</a> -->
              <a class="" onclick="submit_quling('proxy', '1')"><i class="fa fa-plus-circle"></i> Proxy</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/routinereport/1" onclick="submit_quling('routinereport','1')"><i class="fa fa-plus-circle"></i> Report</a> -->
              <a class="" onclick="submit_quling('routinereport', '1')"><i class="fa fa-plus-circle"></i> Report</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/period/1" onclick="submit_quling('period','1')"><i class="fa fa-plus-circle"></i> Period</a> -->
              <a class="" onclick="submit_quling('period', '1')"><i class="fa fa-plus-circle"></i> Period</a>
            </div>





            <h5 class="main_menu_main_academic" onclick="qulinkmenu('main_academic')">Academic</h5>
            <div class="excontent" id="open_main_academic">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/classes/1" onclick="submit_quling('classes','1')"><i class="fa fa-plus-circle"></i> Class</a> -->
              <a class="" onclick="submit_quling('classes', '1')"><i class="fa fa-plus-circle"></i> Class</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/subject/1" onclick="submit_quling('subject','1')"><i class="fa fa-plus-circle"></i> Subject</a> -->
              <a class="" onclick="submit_quling('subject', '1')"><i class="fa fa-plus-circle"></i> Subject</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/section/1" onclick="submit_quling('section','1')"><i class="fa fa-plus-circle"></i> Section</a> -->
              <a class="" onclick="submit_quling('section', '1')"><i class="fa fa-plus-circle"></i> Section</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/shift/1" onclick="submit_quling('shift','1')"><i class="fa fa-plus-circle"></i> Shift</a> -->
              <a class="" onclick="submit_quling('shift', '1')"><i class="fa fa-plus-circle"></i> Shift</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/campus/1" onclick="submit_quling('campus','1')"><i class="fa fa-plus-circle"></i> Campus</a> -->
              <a class="" onclick="submit_quling('campus', '1')"><i class="fa fa-plus-circle"></i> Campus</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/versions/1" onclick="submit_quling('versions','1')"><i class="fa fa-plus-circle"></i> Version</a> -->
              <a class="" onclick="submit_quling('versions', '1')"><i class="fa fa-plus-circle"></i> Version</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/schoolyear/1" onclick="submit_quling('schoolyear','1')"><i class="fa fa-plus-circle"></i> Academic Year</a> -->
              <a class="" onclick="submit_quling('schoolyear', '1')"><i class="fa fa-plus-circle"></i> Academic Year</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/studentgroup/1" onclick="submit_quling('studentgroup','1')"><i class="fa fa-plus-circle"></i> Student Group</a> -->
              <a class="" onclick="submit_quling('studentgroup', '1')"><i class="fa fa-plus-circle"></i> Student Group</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/stucategory/1" onclick="submit_quling('stucategory','1')"><i class="fa fa-plus-circle"></i> Student Category</a> -->
              <a class="" onclick="submit_quling('stucategory', '1')"><i class="fa fa-plus-circle"></i> Student Category</a>
            </div>





            <h5 class="main_menu_main_exam" onclick="qulinkmenu('main_exam')">Exam</h5>
            <div class="excontent" id="open_main_exam">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/exam_common/1" onclick="submit_quling('exam_common','1')"><i class="fa fa-plus-circle"></i> Exam Setting</a> -->
              <a class="" onclick="submit_quling('exam_common', '1')"><i class="fa fa-plus-circle"></i> Exam Setting</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/exam/1" onclick="submit_quling('exam','1')"><i class="fa fa-plus-circle"></i> Exam</a> -->
              <a class="fqactive" onclick="submit_quling('exam', '1')"><i class="fa fa-plus-circle"></i> Exam</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/grade/1" onclick="submit_quling('grade','1')"><i class="fa fa-plus-circle"></i> Grade</a> -->
              <a class="" onclick="submit_quling('grade', '1')"><i class="fa fa-plus-circle"></i> Grade</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/exam_routine/1" onclick="submit_quling('exam_routine','1')"><i class="fa fa-plus-circle"></i> Exam Routine</a> -->
              <a class="" onclick="submit_quling('exam_routine', '1')"><i class="fa fa-plus-circle"></i> Exam Routine</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/seat_plan/1" onclick="submit_quling('seat_plan','1')"><i class="fa fa-plus-circle"></i> Seat Plan</a> -->
              <a class="" onclick="submit_quling('seat_plan', '1')"><i class="fa fa-plus-circle"></i> Seat Plan</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/mark_distribution/1" onclick="submit_quling('mark_distribution','1')"><i class="fa fa-plus-circle"></i> Mark</a> -->
              <a class="" onclick="submit_quling('mark_distribution', '1')"><i class="fa fa-plus-circle"></i> Mark</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/result/1" onclick="submit_quling('result','1')"><i class="fa fa-plus-circle"></i> Result</a> -->
              <a class="" onclick="submit_quling('result', '1')"><i class="fa fa-plus-circle"></i> Result</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/promotion/1" onclick="submit_quling('promotion','1')"><i class="fa fa-plus-circle"></i> Promotion</a> -->
              <a class="" onclick="submit_quling('promotion', '1')"><i class="fa fa-plus-circle"></i> Promotion</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/question_bank/1" onclick="submit_quling('question_bank','1')"><i class="fa fa-plus-circle"></i> Question Bank</a> -->
              <a class="" onclick="submit_quling('question_bank', '1')"><i class="fa fa-plus-circle"></i> Question Bank</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/admitcard/1" onclick="submit_quling('admitcard','1')"><i class="fa fa-plus-circle"></i> Admit Card</a> -->
              <a class="" onclick="submit_quling('admitcard', '1')"><i class="fa fa-plus-circle"></i> Admit Card</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/tabulation_sheet/1" onclick="submit_quling('tabulation_sheet','1')"><i class="fa fa-plus-circle"></i> Tabulation Sheet</a> -->
              <a class="" onclick="submit_quling('tabulation_sheet', '1')"><i class="fa fa-plus-circle"></i> Tabulation Sheet</a>
            </div>





            <h5 class="main_menu_main_account" onclick="qulinkmenu('main_account')">Account</h5>
            <div class="excontent" id="open_main_account">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/feetypes/1" onclick="submit_quling('feetypes','1')"><i class="fa fa-plus-circle"></i> Fee Collection</a> -->
              <a class="" onclick="submit_quling('feetypes', '1')"><i class="fa fa-plus-circle"></i> Fee Collection</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/accountreport/1" onclick="submit_quling('accountreport','1')"><i class="fa fa-plus-circle"></i> Account Report</a> -->
              <a class="" onclick="submit_quling('accountreport', '1')"><i class="fa fa-plus-circle"></i> Account Report</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/transaction/1" onclick="submit_quling('transaction','1')"><i class="fa fa-plus-circle"></i> Transaction</a> -->
              <a class="" onclick="submit_quling('transaction', '1')"><i class="fa fa-plus-circle"></i> Transaction</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/accounts/chart_of_account/summary/1" onclick="submit_quling('accounts/chart_of_account/summary','1')"><i class="fa fa-plus-circle"></i> Chart Of Accounts</a> -->
              <a class="" onclick="submit_quling('accounts/chart_of_account/summary', '1')"><i class="fa fa-plus-circle"></i> Chart Of Accounts</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/expensetypes/1" onclick="submit_quling('expensetypes','1')"><i class="fa fa-plus-circle"></i> Expense</a> -->
              <a class="" onclick="submit_quling('expensetypes', '1')"><i class="fa fa-plus-circle"></i> Expense</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/waiver/1" onclick="submit_quling('waiver','1')"><i class="fa fa-plus-circle"></i> Waiver</a> -->
              <a class="" onclick="submit_quling('waiver', '1')"><i class="fa fa-plus-circle"></i> Waiver</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/manage_salary/1" onclick="submit_quling('manage_salary','1')"><i class="fa fa-plus-circle"></i> Payroll</a> -->
              <a class="" onclick="submit_quling('manage_salary', '1')"><i class="fa fa-plus-circle"></i> Payroll</a>
            </div>





            <h5 class="main_menu_main_announcement" onclick="qulinkmenu('main_announcement')">Communication</h5>
            <div class="excontent" id="open_main_announcement">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/notice/1" onclick="submit_quling('notice','1')"><i class="fa fa-plus-circle"></i> Notice</a> -->
              <a class="fqactive" onclick="submit_quling('notice', '1')"><i class="fa fa-plus-circle"></i> Notice</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/event/1" onclick="submit_quling('event','1')"><i class="fa fa-plus-circle"></i> Event</a> -->
              <a class="fqactive" onclick="submit_quling('event', '1')"><i class="fa fa-plus-circle"></i> Event</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/holiday/1" onclick="submit_quling('holiday','1')"><i class="fa fa-plus-circle"></i> Holiday</a> -->
              <a class="fqactive" onclick="submit_quling('holiday', '1')"><i class="fa fa-plus-circle"></i> Holiday</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/mailandsmstemplate/1" onclick="submit_quling('mailandsmstemplate','1')"><i class="fa fa-plus-circle"></i> Mail / SMS Template</a> -->
              <a class="" onclick="submit_quling('mailandsmstemplate', '1')"><i class="fa fa-plus-circle"></i> Mail / SMS Template</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/conversation/1" onclick="submit_quling('conversation','1')"><i class="fa fa-plus-circle"></i> Message</a> -->
              <a class="" onclick="submit_quling('conversation', '1')"><i class="fa fa-plus-circle"></i> Message</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/mailandsms/1" onclick="submit_quling('mailandsms','1')"><i class="fa fa-plus-circle"></i> Mail / SMS</a> -->
              <a class="" onclick="submit_quling('mailandsms', '1')"><i class="fa fa-plus-circle"></i> Mail / SMS</a>
            </div>





            <h5 class="main_menu_study_materials" onclick="qulinkmenu('study_materials')">Study Materials</h5>
            <div class="excontent" id="open_study_materials">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/syllabus/1" onclick="submit_quling('syllabus','1')"><i class="fa fa-plus-circle"></i> Syllabus</a> -->
              <a class="" onclick="submit_quling('syllabus', '1')"><i class="fa fa-plus-circle"></i> Syllabus</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/study_materials/1" onclick="submit_quling('study_materials','1')"><i class="fa fa-plus-circle"></i> Study Materials</a> -->
              <a class="" onclick="submit_quling('study_materials', '1')"><i class="fa fa-plus-circle"></i> Study Materials</a>
            </div>





            <h5 class="main_menu_main_administrator" onclick="qulinkmenu('main_administrator')">Administrator</h5>
            <div class="excontent" id="open_main_administrator">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/resetpassword/1" onclick="submit_quling('resetpassword','1')"><i class="fa fa-plus-circle"></i> Reset Password</a> -->
              <a class="" onclick="submit_quling('resetpassword', '1')"><i class="fa fa-plus-circle"></i> Reset Password</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/bulkimport/1" onclick="submit_quling('bulkimport','1')"><i class="fa fa-plus-circle"></i> Import</a> -->
              <a class="" onclick="submit_quling('bulkimport', '1')"><i class="fa fa-plus-circle"></i> Import</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/usertype/1" onclick="submit_quling('usertype','1')"><i class="fa fa-plus-circle"></i> Role</a> -->
              <a class="" onclick="submit_quling('usertype', '1')"><i class="fa fa-plus-circle"></i> Role</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/permission/1" onclick="submit_quling('permission','1')"><i class="fa fa-plus-circle"></i> Permission</a> -->
              <a class="" onclick="submit_quling('permission', '1')"><i class="fa fa-plus-circle"></i> Permission</a>
            </div>





            <h5 class="main_menu_main_library" onclick="qulinkmenu('main_library')">Library</h5>
            <div class="excontent" id="open_main_library">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/book/1" onclick="submit_quling('book','1')"><i class="fa fa-plus-circle"></i> Books</a> -->
              <a class="" onclick="submit_quling('book', '1')"><i class="fa fa-plus-circle"></i> Books</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/lmember/1" onclick="submit_quling('lmember','1')"><i class="fa fa-plus-circle"></i> Member</a> -->
              <a class="" onclick="submit_quling('lmember', '1')"><i class="fa fa-plus-circle"></i> Member</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/issue/1" onclick="submit_quling('issue','1')"><i class="fa fa-plus-circle"></i> Transaction</a> -->
              <a class="" onclick="submit_quling('issue', '1')"><i class="fa fa-plus-circle"></i> Transaction</a>
            </div>





            <h5 class="main_menu_main_transport" onclick="qulinkmenu('main_transport')">Transport</h5>
            <div class="excontent" id="open_main_transport">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/transport/1" onclick="submit_quling('transport','1')"><i class="fa fa-plus-circle"></i> Route</a> -->
              <a class="" onclick="submit_quling('transport', '1')"><i class="fa fa-plus-circle"></i> Route</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/vehicle/1" onclick="submit_quling('vehicle','1')"><i class="fa fa-plus-circle"></i> Vehicle</a> -->
              <a class="" onclick="submit_quling('vehicle', '1')"><i class="fa fa-plus-circle"></i> Vehicle</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/tmember/1" onclick="submit_quling('tmember','1')"><i class="fa fa-plus-circle"></i> Member</a> -->
              <a class="" onclick="submit_quling('tmember', '1')"><i class="fa fa-plus-circle"></i> Member</a>
            </div>





            <h5 class="main_menu_main_asset_management" onclick="qulinkmenu('main_asset_management')">Asset/Inventory</h5>
            <div class="excontent" id="open_main_asset_management">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/asset/1" onclick="submit_quling('asset','1')"><i class="fa fa-plus-circle"></i> Asset</a> -->
              <a class="" onclick="submit_quling('asset', '1')"><i class="fa fa-plus-circle"></i> Asset</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/vendor/1" onclick="submit_quling('vendor','1')"><i class="fa fa-plus-circle"></i> Vendor</a> -->
              <a class="" onclick="submit_quling('vendor', '1')"><i class="fa fa-plus-circle"></i> Vendor</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/location/1" onclick="submit_quling('location','1')"><i class="fa fa-plus-circle"></i> Location</a> -->
              <a class="" onclick="submit_quling('location', '1')"><i class="fa fa-plus-circle"></i> Location</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/asset_category/1" onclick="submit_quling('asset_category','1')"><i class="fa fa-plus-circle"></i> Asset Category</a> -->
              <a class="" onclick="submit_quling('asset_category', '1')"><i class="fa fa-plus-circle"></i> Asset Category</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/asset_assignment/1" onclick="submit_quling('asset_assignment','1')"><i class="fa fa-plus-circle"></i> Asset Assignment</a> -->
              <a class="" onclick="submit_quling('asset_assignment', '1')"><i class="fa fa-plus-circle"></i> Asset Assignment</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/purchase/1" onclick="submit_quling('purchase','1')"><i class="fa fa-plus-circle"></i> Stock-in</a> -->
              <a class="" onclick="submit_quling('purchase', '1')"><i class="fa fa-plus-circle"></i> Stock-in</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/damage/1" onclick="submit_quling('damage','1')"><i class="fa fa-plus-circle"></i> Damage</a> -->
              <a class="" onclick="submit_quling('damage', '1')"><i class="fa fa-plus-circle"></i> Damage</a>
            </div>





            <h5 class="main_menu_main_frontend" onclick="qulinkmenu('main_frontend')">Frontend</h5>
            <div class="excontent" id="open_main_frontend">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/photo_gallery/1" onclick="submit_quling('photo_gallery','1')"><i class="fa fa-plus-circle"></i> Photo Gallery</a> -->
              <a class="" onclick="submit_quling('photo_gallery', '1')"><i class="fa fa-plus-circle"></i> Photo Gallery</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/pages/1" onclick="submit_quling('pages','1')"><i class="fa fa-plus-circle"></i> Pages</a> -->
              <a class="" onclick="submit_quling('pages', '1')"><i class="fa fa-plus-circle"></i> Pages</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/frontend_setting/1" onclick="submit_quling('frontend_setting','1')"><i class="fa fa-plus-circle"></i> Frontend Settings</a> -->
              <a class="" onclick="submit_quling('frontend_setting', '1')"><i class="fa fa-plus-circle"></i> Frontend Settings</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/dresscode/1" onclick="submit_quling('dresscode','1')"><i class="fa fa-plus-circle"></i> Dres Code</a> -->
              <a class="" onclick="submit_quling('dresscode', '1')"><i class="fa fa-plus-circle"></i> Dres Code</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/resultsummary/1" onclick="submit_quling('resultsummary','1')"><i class="fa fa-plus-circle"></i> Result Summary</a> -->
              <a class="" onclick="submit_quling('resultsummary', '1')"><i class="fa fa-plus-circle"></i> Result Summary</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/classschedule/1" onclick="submit_quling('classschedule','1')"><i class="fa fa-plus-circle"></i> Class Schedule</a> -->
              <a class="" onclick="submit_quling('classschedule', '1')"><i class="fa fa-plus-circle"></i> Class Schedule</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/admissioninformation/1" onclick="submit_quling('admissioninformation','1')"><i class="fa fa-plus-circle"></i> Admission Information</a> -->
              <a class="" onclick="submit_quling('admissioninformation', '1')"><i class="fa fa-plus-circle"></i> Admission Information</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/sidebarsetting/1" onclick="submit_quling('sidebarsetting','1')"><i class="fa fa-plus-circle"></i> Sidebar Setting</a> -->
              <a class="" onclick="submit_quling('sidebarsetting', '1')"><i class="fa fa-plus-circle"></i> Sidebar Setting</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/frontend_features/1" onclick="submit_quling('frontend_features','1')"><i class="fa fa-plus-circle"></i> Frontend Features</a> -->
              <a class="" onclick="submit_quling('frontend_features', '1')"><i class="fa fa-plus-circle"></i> Frontend Features</a>
            </div>





            <h5 class="main_menu_main_settings" onclick="qulinkmenu('main_settings')">Settings</h5>
            <div class="excontent" id="open_main_settings">
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/setting/1" onclick="submit_quling('setting','1')"><i class="fa fa-plus-circle"></i> General Setting</a> -->
              <a class="" onclick="submit_quling('setting', '1')"><i class="fa fa-plus-circle"></i> General Setting</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/smssettings/1" onclick="submit_quling('smssettings','1')"><i class="fa fa-plus-circle"></i> SMS Settings</a> -->
              <a class="" onclick="submit_quling('smssettings', '1')"><i class="fa fa-plus-circle"></i> SMS Settings</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/apisetting/1" onclick="submit_quling('apisetting','1')"><i class="fa fa-plus-circle"></i> API Settings</a> -->
              <a class="" onclick="submit_quling('apisetting', '1')"><i class="fa fa-plus-circle"></i> API Settings</a>
              <!--        <a  href="http://localhost:8055/edus/dashboard/frequently_menu_new/templatesettings/1" onclick="submit_quling('templatesettings','1')"><i class="fa fa-plus-circle"></i> Template Settings</a> -->
              <a class="" onclick="submit_quling('templatesettings', '1')"><i class="fa fa-plus-circle"></i> Template Settings</a>
            </div>





          </div><div id="mCSB_2_scrollbar_vertical" class="mCSB_scrollTools mCSB_2_scrollbar mCS-light-3 mCSB_scrollTools_vertical" style="display: none;"><div class="mCSB_draggerContainer"><div id="mCSB_2_dragger_vertical" class="mCSB_dragger" style="position: absolute; min-height: 30px; top: 0px;"><div class="mCSB_dragger_bar" style="line-height: 30px;"></div></div><div class="mCSB_draggerRail"></div></div></div></div></div>
        </div>
      </nav>
    </div>

    <div class="os-tabs-w menu-shad">
      <div class="os-tabs-controls mCustomScrollbar _mCS_1 mCS_no_scrollbar"><div id="mCSB_1" class="mCustomScrollBox mCS-light-3 mCSB_horizontal mCSB_inside" style="max-height: none;" tabindex="0"><div id="mCSB_1_container" class="mCSB_container mCS_x_hidden mCS_no_scrollbar_x" style="position: relative; top: 0px; left: 0px; width: 1255px; min-width: 100%; overflow-x: inherit;" dir="ltr">
        <ul class="nav nav-tabs upper">
          <li class="nav-item"  v-for="(menu, index) in menu_items" v-bind:key="index" >
            <router-link class="nav-link "  :class="{'active': current_url == menu.link}" @click="sdsd"  :to="menu.link">
              <i :class="menu.class"></i>
              <br><span>{{ menu.title }}</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="http://localhost:8055/edus/seat_plan"><i class="fa icon-exam"></i><br><span>Seat Plan</span></a>

          </li>
<!--          <li class="nav-item">-->
<!--            <a class="nav-link " href="http://localhost:8055/edus/mark_distribution"><i class="fa icon-exam"></i><br><span>Mark</span></a>-->

<!--          </li>-->
          <li class="nav-item">
            <a class="nav-link " href="http://localhost:8055/edus/result"><i class="fa fa-history"></i><br><span>Result</span></a>

          </li>
          <li class="nav-item">
            <a class="nav-link " href="http://localhost:8055/edus/promotion"><i class="fa icon-promotion"></i><br><span>Promotion</span></a>

          </li>
          <li class="nav-item">
            <a class="nav-link " href="http://localhost:8055/edus/question_bank"><i class="fa fa-qrcode"></i><br><span>Question Bank</span></a>

          </li>
          <li class="nav-item">
            <a class="nav-link " href="http://localhost:8055/edus/admitcard"><i class="fa icon-exam"></i><br><span>Admit Card</span></a>

          </li>
          <li class="nav-item">
            <a class="nav-link " href="http://localhost:8055/edus/tabulation_sheet"><i class="fa icon-exam"></i><br><span>Tabulation Sheet</span></a>

          </li>

        </ul>
      </div><div id="mCSB_1_scrollbar_horizontal" class="mCSB_scrollTools mCSB_1_scrollbar mCS-light-3 mCSB_scrollTools_horizontal" style="display: none;"><div class="mCSB_draggerContainer"><div id="mCSB_1_dragger_horizontal" class="mCSB_dragger" style="position: absolute; min-width: 30px; width: 0px; left: 0px;"><div class="mCSB_dragger_bar"></div></div><div class="mCSB_draggerRail"></div></div></div></div></div>
    </div>
    <div>
      <router-view />
    </div>

  </aside>
</template>
<script>
  export default {
    data () {
      return {
        selected: '',
        menu_items:[
          {
            title: "Exam Setting",
            class: "fa fa-book",
            link: "/exam_type_index"
          },{
            title: "Exam",
            class: "fa fa-pencil",
            link: "/"
          },{
            title: "Grade",
            class: "fa fa-signal",
            link: "/grade_index"
          },{
            title: "Exam Routine",
            class: "fa fa-home",
            link: "/exam_routine_index"
          },{
            title: "Mark",
            class: "fa icon-exam",
            link: "/mark_distribution_index"
          },
        ],
      }
    },
    methods:{
      sdsd(){
        location.reload();
      }
    },
    computed: {
      current_url(){
        return this.$router.currentRoute.path;
      }
    },
  }

</script>
<style>

</style>
