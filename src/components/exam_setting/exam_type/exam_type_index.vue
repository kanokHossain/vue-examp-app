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
                <form @submit.prevent="updateExamType">
                  <div class="form-group">
                    <h5> Add Exam Type</h5>
                    <hr>
                    <input v-model="exam_post.exam_type" type="text" name="exam_type" class="form-control" value="" required="" placeholder="Enter Exam Type">
                    <span class="col-sm-4 control-label" style="color: red">
                                                    </span>
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
                      <th class="col-lg-3">Exam Type</th>
                      <th class="col-lg-3">Is Terminal</th>

                      <th class="col-lg-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(exam,index) in exam_type" :key="exam_type.exam_type_id">
                      <td data-title="#">
                        {{index+1}} </td>
                      <td data-title="Exam Name">
                        {{exam.exam_type}} </td>
                      <td data-title="Exam Name">
                        {{exam.is_terminal==1?'Terminal':'other'}} </td>

                      <td data-title="Action">
                        <a @click="editExamType(exam.exam_type_id)" class="btn btn-warning btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                        <a @click="deleteExamType(exam.exam_type_id)"  class="btn btn-danger btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>

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
        flag:'ve_request',
        exam_type:{},
        exam_post:{
          exam_type:'',
          exam_tpe_id:'',
          post_flag:'1',
        }
      }
    },
    components: {
      pageheader
    },
    methods:{
      get_exam_type_list(){
        let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});
        this.axios.get(this.$hostname+'/exam_common?'+this.flag).then((response)=>{
          console.log(response.data);
          this.exam_type=response.data.exam_type;
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      editExamType(id){
        console.log(id)
        this.axios.get(this.$hostname+'/exam_common/editExamType?id='+id).then((response)=> {
          console.log(response.data);
          this.exam_post.exam_type=response.data.type[0].exam_type;
          this.exam_post.exam_tpe_id=response.data.type[0].exam_type_id;
        });
      },
      updateExamType(){
        this.axios.post(this.$hostname+'/exam_common/editExamType?',$.param(this.exam_post)).then((response)=>{
          this.$toasted.success('successfully done !', this.$message1);
          this.exam_post.exam_type='';
          this.exam_post.exam_tpe_id='';
          this.get_exam_type_list();
        });
      },
      deleteExamType(id){
        if(confirm("Do you really want to delete?")) {
          this.axios.get(this.$hostname + '/exam_common/deleteExamType?id=' +id).then((response) => {
            this.$toasted.success('delete successfully !', this.$message1);
            this.get_exam_type_list();
          });
        }
      },
    },
    mounted() {
      this.get_exam_type_list();
    }
  }

</script>

<style>

</style>
