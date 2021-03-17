<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-12">

        <div class="box">

          <!-- form start -->
          <div class="box-body">
            <div class="row">
             <pageheader></pageheader>
              <div class="col-sm-3 col-xs-12 exam_common_left">
                <form @submit.prevent="update_grade_setup">
                  <div class="form-group">
                    <h5>Add Grade</h5>
                    <hr>
                    <input type="text" v-on:keyup="check_validation" v-model="grade_s.grading"  name="grading" class="form-control" required="" placeholder="Add Grade">

                    <br>
                    <button type="submit" class="btn btn-default">Save</button>
                  </div>
                </form>
              </div>
              <div class="col-sm-9 col-xs-12">

                <div id="hide-table">
                  <table id="example1" class="table table-striped table-bordered table-hover dataTable no-footer">
                    <thead>
                    <tr>
                      <th class="col-lg-1">#</th>
                      <th class="col-lg-3">Grade</th>

                      <th class="col-lg-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(grade_row,index) in grade" :key="grade.grading_id">
                      <td data-title="#">
                        {{index+1}}</td>
                      <td data-title="">
                        {{grade_row.grading}} </td>

                      <td data-title="Action" style="text-align: center">
                        <a @click="edit_grade_setup(grade_row.grading_id)" class="btn btn-warning btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                        <a @click="delete_grade_setup(grade_row.grading_id)"  class="btn btn-danger btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>

                      </td>
                    </tr>
                    </tbody>
                  </table>
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
  import pageheader from '@/components/grade/page_header'
  export default {
    data (){
      return {
        grade: [],
        grade_s:{
          grading:"",
          grading_id:"",
          flag:'1',
        },
        flag:'vue_request'
      }
    },
    components:{
      pageheader
    },
    methods:{
      get_grade_setup_list(){
        let loader = this.$loading.show({color:'#0000FF', width: 128, height: 128, loader: 'bars'});
        console.log('start')
        this.axios.get(this.$hostname+'/grade/grade_setup?'+this.flag).then((response)=>{
          console.log(response.data);
          this.grade=response.data.grading;
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      update_grade_setup(){
        if(this.grade_s.grading.length>4){
          this.$toasted.success('length exceed ! value not submitted !',{duration: 2000,position: 'top-center',theme: 'bubble',
            action: {
              text: 'Close',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
          });
          this.grade_s.grading='';
          return false;
        }
        this.axios.post(this.$hostname+'/grade/editGradeSetup',$.param(this.grade_s)).then((response)=>{
          this.$toasted.success('successfully done !',{duration: 2000,position: 'top-center',theme: 'bubble',
            action: {
              text: 'Close',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
          });
          this.grade_s.grading='';
          this.grade_s.grading_id='';
          this.get_grade_setup_list();
        });
      },
      edit_grade_setup(id){
        this.axios.get(this.$hostname+'/grade/editGradeSetup?id='+id).then((response)=>{
          console.log(response.data);
          this.grade_s.grading=response.data.grade[0].grading;
          this.grade_s.grading_id=response.data.grade[0].grading_id;
        });
      },
      delete_grade_setup(id){
        if(confirm("Do you really want to delete?")) {
          this.axios.get(this.$hostname + '/grade/deleteGradeSetup?id=' + id).then((response) => {
            this.$toasted.success('Deleted !',{duration: 2000,position: 'top-center',theme: 'bubble',
              action: {
                text: 'Close',
                onClick: (e, toastObject) => {
                  toastObject.goAway(0);
                }
              },
            });
            this.get_grade_setup_list();
          });
        }
      },
      check_validation(){
        if(this.grade_s.grading.length>4){
          this.$toasted.success('length exceed ! At most 4 charecter accepted !',{duration: 2000,position: 'top-center',theme: 'bubble',
            action: {
              text: 'Close',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              }
            },
          });
        }
      }
    },
    mounted() {
    this.get_grade_setup_list();
    }
  }
</script>
