<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <!-- form start -->
          <div class="box-body">
            <div class="row">
              <template>
                <pageheader></pageheader>
              </template>
              <div class="col-sm-12">
                <form class="form-horizontal" role="form" method="post" onsubmit="javascript: return validate_routine()">
                  <div class="col-md-12">
                    <div class="col-sm-3">
                      <label for="exam" class="control-label">
                        Select Exam Type
                      </label>
                      <select id="exam_type" name="exam_type" class="form-control select2" required="required">
                        <option value="terminal">Term Final</option>
                        <option value="other">Other Exam</option>
                      </select>
                    </div>

                    <div class="col-sm-3">
                      <label for="exam" class="control-label">
                        Select Terminal Exam
                      </label>
                      <select name="terminal_exam_id" id="terminal_exam_id" class="form-control select2" required="required">
                        <option value="0">Select Terminal Exam</option>
                        <option value="1">1st Terminal</option>
                        <option value="2">2nd Terminal</option>
                        <option value="4" selected="selected">3rd Terminal</option>
                      </select>
                    </div>
                    <div class="col-sm-3" id="other_exam_div" style="display: none;">
                      <label for="exam" class="control-label">
                        Select Other Exam
                      </label>
                      <select name="other_exam_id" id="other_exam_id" class="form-control select2">
                        <option value="0">Select Exam</option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <label for="exam" class="control-label">
                        Select Class
                      </label>
                      <select name="classesID" id="classesID" class="form-control select2">
                        <option value="0">Select Class</option>
                        <option value="31">Play</option>
                        <option value="32">Nursary</option>
                        <option value="37" selected="selected">One</option>
                        <option value="38">Two</option>
                        <option value="39">Three</option>
                        <option value="40">Four</option>
                        <option value="57">Five</option>
                        <option value="58">six</option>
                        <option value="59">Class six</option>
                        <option value="67">Five</option>
                        <option value="68">Five</option>
                        <option value="69">Two</option>
                        <option value="70">Class Six</option>
                        <option value="71">eight</option>
                        <option value="72">nine</option>
                      </select>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="col-md-12">
                    <div class="col-sm-3">
                      <label for="exam" class="control-label">
                        Select Version
                      </label>
                      <select name="versionID" id="versionID" class="form-control select2">
                        <option value="1" selected="selected">Bangla Version</option>
                        <option value="2">English Version</option>
                      </select>
                    </div>

                    <div class="col-sm-3">
                      <label for="exam" class="control-label">
                        Select Shift
                      </label>
                      <select name="shiftID" id="shiftID" class="form-control select2">
                        <option value="2" selected="selected">Morning</option>
                        <option value="3">Day</option>
                        <option value="10">Morning</option>
                      </select>
                    </div>

                    <div class="col-sm-3">
                      <label for="exam" class="control-label">
                        Select Group
                      </label>
                      <select name="studentgroupID" id="studentgroupID" class="form-control select2">
                        <option value="0">Select Group</option>
                        <option value="1">Science</option>
                        <option value="2">Arts</option>
                        <option value="3">Commerce</option>
                        <option value="4" selected="selected">General</option>
                        <option value="5">Pre School</option>
                        <option value="6">Technical Education</option>
                      </select>
                    </div>
                    <div class="col-sm-3">
                      <label for="exam" class="control-label">

                      </label>
                      <input type="submit" style="width:100%;" class="btn btn-success" value="Search">
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="clearfix"></div>
                </form>
                <br>
                <br>

                <form class="form-horizontal" role="form" method="post" action="http://localhost:8055/edus/exam_routine/save_exam_routine">
                  <input type="hidden" name="terminal_exam_id" id="terminal_exam_id_save" value="4">
                  <input type="hidden" name="classesID" value="37">
                  <input type="hidden" name="sectionID" value="">
                  <input type="hidden" name="studentgroupID" value="4">
                  <input type="hidden" name="shiftID" value="2">
                  <input type="hidden" name="versionID" value="1">
                  <input type="hidden" name="other_exam_id" value="">
                  <input type="hidden" name="exam_type_other" value="terminal">
                  <table class="table table-responsive table-striped table-bordered" style="width: 100%">
                    <tbody>
                    <tr>
                      <th>Subject Name</th>
                      <th>Date</th>
                      <th>Strart Time</th>
                      <th>End Time</th>

                    </tr>
                    <tr>
                      <td>
                        <input type="hidden" name="subject[]" value="188">Bangla</td>
                      <td>
                        <input type="text" required="required" checked="" name="date[]" class="form-control datepicker" autocomplete="off">
                      </td>
                      <td>
                        <input type="text" required="required" checked="" name="start_time[]" class="form-control timepicker">
                      </td>
                      <td>
                        <input type="text" required="required" checked="" name="end_time[]" class="form-control timepicker">
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="hidden" name="subject[]" value="189">English</td>
                      <td>
                        <input type="text" required="required" checked="" name="date[]" class="form-control datepicker" autocomplete="off">
                      </td>
                      <td>
                        <input type="text" required="required" checked="" name="start_time[]" class="form-control timepicker">
                      </td>
                      <td>
                        <input type="text" required="required" checked="" name="end_time[]" class="form-control timepicker">
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <br>
                  <div class="col-sm-2 pull-right">
                    <input style="width: 100%" type="submit" class="btn btn-success" value="Save">
                  </div>

                </form>
                <div class="clearfix"></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import pageheader from '@/components/exam_routine/page_header'
  export default {
    data(){
      return{
      }
    },
    methods:{
      load_dropdown_value(){
        let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});

        setTimeout(() => {
          loader.hide()
        },400)
      }
    },
    components:{
        pageheader
    },
    mounted() {
      this.load_dropdown_value();
    }
  }

</script>
<style>

</style>
