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
                <form  @submit.prevent="updateExamSystem">
                  <div class="form-group">
                    <h5> Add Exam System</h5>
                    <hr>
                    <input v-model="exam_system_post.exam_system" type="text" name="exam_system" class="form-control" required="" placeholder="Exam System">
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

                      <th class="col-lg-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(exam,index) in exam_system" :key="index">
                      <td data-title="#">
                        {{index+1}} </td>
                      <td data-title="Exam Name">
                       {{exam.exam_system}} </td>

                      <!--?php// if (permissionChecker('exam_edit') || permissionChecker('exam_delete')) { ?-->
                      <td data-title="Action">
                        <a @click="editexamSystem(exam.exam_system_id)" class="btn btn-warning btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Edit"><i class="fa fa-edit"></i></a>
                        <a  @click="deleteExamSystem(exam.exam_system_id)" class="btn btn-danger btn-xs mrg" data-placement="top" data-toggle="tooltip" data-original-title="Delete"><i class="fa fa-trash-o"></i></a>
                        <!--?php// echo btn_edit('exam/editExamType/' . $exam['exam_type_id'] ?-->

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
        exam_system:{},
        exam_system_post:{
          exam_system:'',
          exam_system_id:'',
          post_flag:'1',
        }
      }
    },
    methods:{
      exam_system_list(){
        let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});
        this.axios.get(this.$hostname+'/exam_common/examSystem?'+this.$flag).then((response)=>{
          this.exam_system=response.data.exam_system;
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      editexamSystem(id){
        this.axios.get(this.$hostname+'/exam_common/editexamSystem?id='+id).then((response)=> {
          this.exam_system_post.exam_system=response.data.type[0].exam_system;
          this.exam_system_post.exam_system_id=response.data.type[0].exam_system_id;
        });
      },
      updateExamSystem(){
        this.axios.post(this.$hostname+'/exam_common/editexamSystem',$.param(this.exam_system_post)).then((response)=> {
          this.$toasted.success('successfully done !', this.$message1);
          this.exam_system_post.exam_system='';
          this.exam_system_post.exam_system_id='';
          this.exam_system_list();
        });
      },
      deleteExamSystem(id){
        if(confirm("Do you really want to delete?")) {
          this.axios.get(this.$hostname+'/exam_common/deleteExamSystem?id='+id).then((response)=> {
            this.$toasted.success('delete successfully done !', this.$message1);
            this.exam_system_list();
          });
        }
      }
    },
    mounted() {
      this.exam_system_list();
    },
    components:{
      pageheader
    }
  }
</script>
