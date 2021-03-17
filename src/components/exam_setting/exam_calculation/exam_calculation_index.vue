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
              <div class="col-sm-12 col-xs-12">

                <div id="hide-table">
                  <table class="table table-striped table-bordered table-hover dataTable no-footer">
                    <thead>
                    <tr>
                      <th class="col-lg-1">#</th>
                      <th class="col-lg-3">Exam Type</th>
                      <th class="col-lg-3">Exam Method</th>
                      <!--  <th class="col-lg-3">Percentage</th> -->
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(exam_calculation_row,index) in exam_calculation" :key="index" >
                      <td data-title="#">
                        {{index+1}} </td>
                      <td data-title="Exam Name">
                        {{exam_calculation_row.exam_type}} </td>
                      <td data-title="Exam Name">
                        <select v-on:change="save_exam_calculation($event)" v-model="exam_calculation_row.calculation_method" class="calculation_method form-control" name="calculation_method" rel="1" :id="exam_calculation_row.exam_type_id">
                          <option value="Best One">Best One</option>
                          <option value="Average">Average</option>
                          <option value="Last One">Last One</option>
                          <option v-if="exam_calculation_row.exam_type=='Term Final'" value="Moderate">Moderate</option>
                        </select>

                        <form  @submit.prevent="save_result_mark_distribution" role="form" method="post">
                          <table class="table table-striped table-bordered table-hover dataTable no-footer" style="display: block"  v-if="exam_calculation_row.calculation_method=='Moderate'">
                            <tbody>
                            <tr v-for="(term_exam_row,index) in term_exam" :key="index">
                              <td data-title="Exam Name">
                                <input type="hidden" name="terminal_exam[];" v-model="term_exam_row.terminal_exam_type_id"> {{term_exam_row.terminal_exam_type}} ( in % )</td>
                              <td>
                                <input type="number" name="mark[1][]" v-model="term_exam_row.mark_to_count">
                              </td>
                              <input type="hidden" name="exam_type_id"  v-model="exam_calculation_row.exam_type_id">
                              <input type="hidden" name="method" value="Moderate">
                            </tr>
                            <tr>
                              <td colspan="2">
                                <input style="width: 25%" type="submit" class="btn btn-success pull-right" value="Save">
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </form>
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
  var qs = require('qs');
  export default {
    data(){
      return{
        exam_calculation:[],
        term_exam: [],
        post_term_exam:[],
        exam_type_id:'',
        post_for_non_term:[],
      }
    },
    methods:{
      exam_calculation_list(){
        let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});
        this.axios.get(this.$hostname+'/exam_common/examCalculationSetup?'+this.$flag).then((response)=>{
          console.log(response.data)
          this.exam_calculation=response.data.exam_calculation;
          this.term_exam=response.data.term_exam;
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      save_result_mark_distribution(){
        for (let i=0;i<this.exam_calculation.length;i++ ){
          if(this.exam_calculation[i].exam_type=='Term Final') {
            this.post_term_exam.exam_type_id = this.exam_calculation[i].exam_type_id;
            this.post_term_exam.method='Moderate';
            this.post_term_exam.post_flag='1';
          }
        }
        this.post_term_exam.terminal_exam=this.term_exam;
        this.axios({
          method: 'post',
          url: this.$hostname+'/exam_common/save_result_mark_distribution',
          data: qs.stringify(this.post_term_exam),
          headers: {'Content-Type': 'application/x-www-form-urlencoded' }}).then((response)=>{
            this.$toasted.success('successfully done !', this.$message1);
            this.exam_calculation_list();
        });
      },
      save_exam_calculation(event){
        this.post_for_non_term.method=event.target.value;
        this.post_for_non_term.exam_type_id=event.target.id;
        this.post_for_non_term.post_flag='1';
        console.log(event)
        this.axios({
          method: 'post',
          url: this.$hostname+'/exam_common/save_exam_calculation',
          data: qs.stringify(this.post_for_non_term),
          headers: {'Content-Type': 'application/x-www-form-urlencoded' }}).then((response)=>{
          this.$toasted.success('successfully done !', this.$message1);
          this.exam_calculation_list();
        });
      }
    },
    components:{
      pageheader
    },
    mounted(){
      this.exam_calculation_list()
    },
  }

</script>
