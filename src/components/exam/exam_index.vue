<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <!-- form start -->
          <div class="box-body">
            <div class="row">
              <div class="col-sm-12">
                <h5 class="page-header"></h5>
                <ul class="nav nav-tabs">
                  <li  :class="{ 'active' : !isHidden}" ><a  v-on:click="isHidden=false" data-toggle="tab" >Terminal Exam</a></li>
                  <li  :class="{ 'active' : isHidden}"><a v-on:click="isHidden=true"  data-toggle="tab" >Other Exam</a></li>
                </ul>
                <div class="tab-content">
                  <div v-if="!isHidden" id="terminal_exam" class="tab-pane fade in active">

                    <div class="col-sm-3 col-xs-12 exam_common_left">

                      <form @submit.prevent="update_exam">
                        <div class="form-group">
                          <h5>Add Terminal Exam</h5>
                          <hr>
                          <!-- <label>Select Terminal Exam Type </label>-->
                          <select v-model="terminal_exam.terminal_exam_type_id" name="terminal_exam_type_id" class="form-control" required="" >
                            <option value="" >Select Terminal Exam Type</option>
                            <option :value="terminal_dropdown.terminal_exam_type_id" v-for="terminal_dropdown in terminal_exam_dropdown" >{{terminal_dropdown.terminal_exam_type}}</option>
                          </select>
                          <br>
                          <datepicker  v-model="terminal_exam.exam_start_date" placeholder="Exam Start date" ></datepicker>
                          <!--  <label>Exam Start date</label>-->
                          <!--  <input type="text" name="exam_start_date" class="form-control" required="" id="start_date" placeholder="Exam Start date" autocomplete="off">-->
                          <br>
                          <!--   <label>Exam End date</label>-->
                          <!--<input type="text" name="exam_end_date" class="form-control" required="" id="end_date" placeholder="Exam End date" autocomplete="off">-->
                          <datepicker v-model="terminal_exam.exam_end_date" placeholder="Exam End date" ></datepicker>
                          <br>
                          <button type="submit" class="btn btn-default">Save</button>
                        </div>
                      </form>
                    </div>
                    <div class="col-sm-9 col-xs-12">
                      <div id="hide-table">

                        <table class="table table-striped table-bordered table-hover dataTable no-footer">
                          <thead>
                          <tr>
                            <th class="col-lg-1">#</th>
                            <th class="col-lg-3">Exam System</th>
                            <th class="col-lg-3">Start Date</th>
                            <th class="col-lg-3">End Date</th>
                            <th class="col-lg-2">Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="(exam_row,index) in exam" :key="exam.terminal_exam_id">
                            <td data-title="#">
                              {{index+1}}
                            </td>
                            <td data-title="Exam Name">
                              {{exam_row.terminal_exam_type}}
                            </td>
                            <td data-title="Exam Name">
                              {{exam_row.exam_start_date}}
                            </td>
                            <td data-title="Exam Name">
                              {{exam_row.exam_end_date}}
                            </td>

                            <td data-title="Action">
<!--                              <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link></td>-->
                              <a @click="edit_exam(exam_row.terminal_exam_id)" class="btn btn-warning btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                              <a  @click="delete_exam(exam_row.terminal_exam_id)" class="btn btn-danger btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div id="other_exam" class="tab-pane fade in active" v-if="isHidden">
                    <div class="col-sm-3 col-xs-12 exam_common_left">
                      <form  @submit.prevent="update_other_exam" method="post">
                        <div class="form-group">
                          <h5>Add Other Exam</h5>
                          <hr>
                          <!--                        <label>Select Terminal Exam Type </label>-->
                          <select v-model="other_exam.exam_type_id" name="exam_type_id" id="exam_type_id" class="form-control select2">
                            <option value="">Select Exam Type</option>
                            <option :value="other_exam.exam_type_id" v-for="other_exam in other_exam_dropdown" >{{other_exam.exam_type}}</option>
                          </select>
                          <br>
                          <select v-model="other_exam.terminal_exam_type_id" name="terminal_exam_type_id" class="form-control select2">
                            <option value="">Select Terminal Exam Type</option>
                            <option :value="terminal_dropdown.terminal_exam_id+'-'+terminal_dropdown.terminal_exam_type_id" v-for="terminal_dropdown in terminal_exam_dropdown_other" >{{terminal_dropdown.terminal_exam_type}}</option>
                          </select>
                          <br>
                          <!--                        <label>Exam Start date</label>-->
                          <datepicker  v-model="other_exam.exam_start_date" placeholder="Exam Start date" ></datepicker>
                          <br>
                          <!--<label>Exam End date</label>-->
                          <!--<input type="text" name="exam_end_date" class="form-control" required="" id="end_date1" placeholder="Exam end date" autocomplete="off">-->
                          <datepicker v-model="other_exam.exam_end_date" placeholder="Exam End date" ></datepicker>
                          <br>
                          <button type="submit" class="btn btn-default">Save</button>
                        </div>
                      </form>
                    </div>
                    <div class="col-sm-9 col-xs-12">

                      <div id="hide-table">

                        <table class="table table-striped table-bordered table-hover dataTable no-footer" style="width:100%">
                          <thead>
                          <tr>
                            <th style="width: 5%">#</th>
                            <th style="width: 20%" class="col-lg-3">Exam</th>
                            <th style="width: 20%" class="col-lg-3">Terminal</th>
                            <th style="width: 20%" class="col-lg-3">Start Date</th>
                            <th style="width: 20%" class="col-lg-3">End Date</th>
                            <th style="width: 15%" class="col-lg-2">Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr v-for="(other_exam_row,index) in other" :key="other.other_exam_id" >
                            <td>{{index+1}}</td>
                            <td data-title="Terminal Exam Type">{{other_exam_row.exam_type}}</td>
                            <td data-title="Terminal Exam Type">{{other_exam_row.terminal_exam_type}}</td>
                            <td data-title="Terminal Exam Type">{{other_exam_row.exam_start_date}}</td>
                            <td data-title="Terminal Exam Type">{{other_exam_row.exam_end_date}}</td>
                            <td data-title="Action">
                              <a @click="edit_other_exam(other_exam_row.other_exam_id)" class="btn btn-warning btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                              <a @click="delete_other_exam(other_exam_row.other_exam_id)" onclick="return confirm('you are about to delete a record. This cannot be undone. are you sure?')" class="btn btn-danger btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                            </td>
                          </tr>

                          </tbody>
                        </table>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- col-sm-12 -->
            </div>
            <!-- row -->
          </div>
          <!-- Body -->
        </div>
        <!-- /.box -->

      </div>
    </div>
  </section>
</template>
<script>
  import Datepicker from 'vuejs-datepicker'
  export default {
    data() {
      return {
        url: '/edus',
        exam: [],
        other: [],
        isHidden:false,
        terminal_exam_dropdown:[],
        terminal_exam_dropdown_other:[],
        terminal_exam:{
          terminal_exam_type_id:'',
          terminal_exam_id:'',
          exam_start_date:'',
          exam_end_date:'',
          flag:'1',
        },
        other_exam_dropdown:[],
        other_exam: {
          terminal_exam_id:'',
          exam_type_id:'',
          terminal_exam_type_id:'',
          other_exam_id:'',
          exam_start_date:'',
          exam_end_date:'',
          flag:'1',
        },
       flag:'vue_request'
      }
    },
    components: {
      Datepicker
    },
    computed: {
    },
    methods: {
      formatDate(date){
        if(typeof date == "string") return date;
        var output = "";
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        output += y + "-";
        output += (m< 10) ? "0"+m+"-" : m+"-";
        output += (d< 10) ? "0"+d : d;
        return output;
      },
      terminal_exam_formatted(request_name){
        console.log(request_name.exam_start_date);
        request_name.exam_start_date_formatted = this.formatDate(request_name.exam_start_date);
        request_name.exam_end_date_formatted = this.formatDate(request_name.exam_end_date);
        return request_name;
      },
      get_exam() {
        let loader = this.$loading.show({color:'#0000FF', width: 128, height: 128, loader: 'bars'});
        let vue = true;
        this.axios.get(this.$hostname +'/exam' + '?' + this.flag).then((response) => {
          this.data = response.data;
          if (this.data) {
            console.log(this.data);
            this.exam = this.data.term_exam;
            this.terminal_exam_dropdown=this.data.Term_exam_type;
            this.terminal_exam_dropdown_other=this.data.term_exam;
            this.other=this.data.other_exam;
            this.other_exam_dropdown=this.data.e_type;
            console.log()
          } else {
            console.log('NO DATA');
          }
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      edit_exam(term_id){
        this.axios.get(this.$hostname+'/exam/editTermianlExam'+'?id='+term_id).then((response)=>{
        this.data= response.data;
        if(this.data){
          this.terminal_exam.terminal_exam_type_id=this.data.termexam[0].terminal_exam_type_id;
          this.terminal_exam.exam_start_date=this.data.termexam[0].exam_start_date;
          this.terminal_exam.exam_end_date=this.data.termexam[0].exam_end_date;
          this.terminal_exam.terminal_exam_id=this.data.termexam[0].terminal_exam_id;
        }else{
          console.log('Not found');
        }
        });
      },
      edit_other_exam(id){
        this.axios.get(this.$hostname+'/exam/editOtherExam'+'?id='+id).then((response)=>{
          this.data= response.data;
          console.log(this.data)
          if(this.data){
            this.other_exam.other_exam_id=this.data.exam[0].other_exam_id;
            this.other_exam.exam_type_id=this.data.exam[0].exam_type_id;
            this.other_exam.terminal_exam_type_id=this.data.exam[0].terminal_exam_id+'-'+this.data.exam[0].terminal_exam_type_id
            // this.other_exam.terminal_exam_type_id=this.data.exam[0].terminal_exam_type_id;
            this.other_exam.exam_start_date=this.data.exam[0].exam_start_date;
            this.other_exam.exam_end_date=this.data.exam[0].exam_end_date;
            this.other_exam.terminal_exam_id=this.data.exam[0].terminal_exam_id;
          }else{
            console.log('Not found');
          }
        });
      },
      update_exam(){
        var data = this.terminal_exam_formatted(this.terminal_exam);
        this.axios.post(this.$hostname+'/exam/editTermianlExam',$.param(data)).then((response)=>{
          this.$toasted.success('successfully done', {
            duration: 4000,
            position: 'top-center',
            theme: 'bubble',
            action: {
              text: 'Close',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
          });
          this.terminal_exam.terminal_exam_type_id='';
          this.terminal_exam.exam_start_date='';
          this.terminal_exam.exam_end_date='';
          this.get_exam();
        });
      },
      update_other_exam(){
        var data = this.terminal_exam_formatted(this.other_exam);
        this.axios.post(this.$hostname+'/exam/editOtherExam',$.param(data)).then((response)=>{
          console.log('click')
          this.$toasted.success('successfully done', {
            duration: 4000,
            position: 'top-center',
            theme: 'bubble',
            action: {
              text: 'Close',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
          });
          this.other_exam.exam_type_id='';
          this.other_exam.terminal_exam_type_id='';
          this.other_exam.exam_start_date='';
          this.other_exam.exam_end_date='';
          this.other_exam.terminal_exam_id='';
          this.other_exam.other_exam_id='';
          this.get_exam();
          // location.reload()
        })
      },
      delete_exam(id){
        if(confirm("Do you really want to delete?")){
          this.axios.get(this.$hostname+'/exam/deleteTermianlExam?id='+id).then((response)=>{
            if(response.data.length>1){
              this.$toasted.success('data can not be deleted! exist in exam!',{
                position: 'top-center',
                theme: 'bubble',
                duration: 4000,
                action: {
                  text: 'Close',
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  }
                },
              });
              console.log(response.data);
              console.log('not delete');
            }else{
              console.log(response.data);
              console.log('delete');
              this.$toasted.success('Deleted!', {
                duration: 4000,
                position: 'top-center',
                theme: 'bubble',
                action: {
                  text: 'Close',
                  onClick: (e, toastObject) => {
                    toastObject.goAway(0);
                  }
                },
              });
              this.get_exam();
            }
          });
        }
      },
      delete_other_exam(id){
        this.axios.get(this.$hostname+'/exam/deleteOtherExam?id='+id).then((response)=>{
          if(response.data.length>1){
            this.$toasted.success('data can not be deleted! exist in exam !',{
              position: 'top-center',
              theme: 'bubble',
              duration: 4000,
              action: {
                text: 'Close',
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              },
            });
            console.log('not delete');
          }else{
            this.$toasted.success('deleted !',{
              position: 'top-center',
              theme: 'bubble',
              duration: 4000,
              action: {
                text: 'Close',
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              },
            });
          }
          this.get_exam();
        });
      },
    },
    mounted() {
      this.get_exam();
    }
  }
</script>
<style>
  input[type='text'] {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #555;
    vertical-align: middle;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .vdp-datepicker__calendar {
    position: fixed !important;
  }
</style>
