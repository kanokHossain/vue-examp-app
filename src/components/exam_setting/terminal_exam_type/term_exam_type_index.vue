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
              <div class="col-sm-3 col-xs-12 exam_common_left">
                <form @submit.prevent="update_term_exam">
                  <div class="form-group">
                    <h5> Add Terminal Exam Type</h5>
                    <hr>
                    <input v-model="terminal_post.terminal_exam_type" type="text" name="terminal_exam_type"  class="form-control" required="" placeholder="Entry Terminal Exam Type">
                    <span class="col-sm-4 control-label" style="color: red">
                                                    </span>
                    <br> Final ? :
                    <input v-model="terminal_post.is_final"  type="checkbox" name="is_final">
                    <br>
                    <br> Active ? :
                    <input  v-model="terminal_post.is_active"  type="checkbox" name="is_active">
                    <br>
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
                      <th class="col-lg-3">Terminal Exam Type</th>
                      <th class="col-lg-2">Final ?</th>
                      <th class="col-lg-2">Active ?</th>

                      <th class="col-lg-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(exam,index) in tremExamtype" :key="tremExamtype.terminal_exam_type_id">
                      <td data-title="#">
                        {{index+1}} </td>
                      <td data-title="Exam Name">
                        {{exam.terminal_exam_type}} </td>
                      <td data-title="Exam Name">
                        {{exam.is_final==0?'No':'Yes'}} </td>
                      <td data-title="Exam Name">
                        {{exam.is_active==0?'Inactive':'Active'}} </td>

                      <td data-title="Action">
                        <a @click="editTremExamtype(exam.terminal_exam_type_id)" class="btn btn-warning btn-xs mrg" data-placement="top" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                        <a @click="delete_exam_terminal(exam.terminal_exam_type_id)"  class="btn btn-danger btn-xs mrg" data-placement="top" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
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
  import pageheader from '@/components/exam_setting/page_header'
  export default {
    data(){
      return{
        terminal_post:{
          terminal_exam_type:'',
          is_final:'',
          is_active:'',
          exam_type_id:'',
          flag:'1',
        },
        tremExamtype:{},
      }
    },
    methods:{
      update_term_exam(){
        console.log('hello');
        this.axios.post(this.$hostname+'/exam_common/editTremExamtype',$.param(this.terminal_post)).then((response)=>{
          this.$toasted.success('successfully done !', this.$message1);
          this.get_terminal_exam_list();
        });
        this.terminal_post.terminal_exam_type='';
        this.terminal_post.is_final='';
        this.terminal_post.is_active='';
        this.terminal_post.exam_type_id='';
      },
      editTremExamtype(id){
        this.axios.get(this.$hostname+'/exam_common/editTremExamtype?id='+id).then((response)=>{
          console.log(response.data);
          this.terminal_post.terminal_exam_type=response.data.type[0].terminal_exam_type;
          this.terminal_post.is_final=(response.data.type[0].is_final==0)?false:true;
          this.terminal_post.is_active=(response.data.type[0].is_active==0)?false:true;
          this.terminal_post.exam_type_id=response.data.type[0].terminal_exam_type_id;
        });
      },
      get_terminal_exam_list(){
        let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});
        this.axios.get(this.$hostname+'/exam_common/tremExamtype?'+this.$flag).then((response)=>{
          console.log(response.data);
          this.tremExamtype=response.data.term_exam_type;
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      delete_exam_terminal(id){
        if(confirm("Do you really want to delete?")) {
          this.axios.get(this.$hostname + '/exam_common/deleteTremExamtype?id='+ id).then((response) => {
            this.get_terminal_exam_list();
          });
        }
      }
    },
    components: {
      pageheader
    },
    mounted() {
      this.get_terminal_exam_list();
    }
  }

</script>
<style>

</style>
