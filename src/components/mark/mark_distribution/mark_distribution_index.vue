<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <!-- form start -->
          <div class="box-body">
            <div class="row">
              <pageheader></pageheader>
              <div class="col-sm-12">
                <label>
                  Select Exam
                </label>
                <select @change="mark_distribution_list_with_exam_type($event)" class="form-control" name="exam_id" id="exam_id">
                  <option value="0">Select Exam</option>
                  <option  v-for="(exam_dropdown_row,index) in exam_dropdown" :key="index" :value="exam_dropdown_row.terminal_exam_id+'-'+exam_dropdown_row.terminal_exam_type_id">{{exam_dropdown_row.terminal_exam_type}}</option>
                </select>
                <div id="load_data">
                  <form id="mark_setup_form" method="post" @submit.prevent="save_mark_distribution">
                    <br>
                    <br>
                    <table class="table table-responsive table-bordered" style="width:100%">
                      <thead>
                      <tr>
                        <th rowspan="2">Class</th>
                        <th :colspan="exam_type.length" style="text-align:center;">Marking Base %</th>
                      </tr>
                      <tr>
                        <th v-for="(exam_type_row,index) in exam_type" :key="index" style="text-align:center;">{{exam_type_row.exam_type}}</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(classes_row,index) in classes" :key="index">
                        <td>{{classes_row.classes}}</td>
                        <td v-for="(exam_type_row,index2) in exam_type" :key="index2">
                          <input v-model="mark[classes_row.class_exam_type_id][exam_type_row.exam_type_id]" type="number" class="form-control mark-percentage" placeholder="Enter Mark %" value="80" name="mark[1][1]" min="0" max="100">
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <input type="submit" id="mark_save_button" value="Save" class="pull-right btn btn-primary">
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  import pageheader from '@/components/mark/page_header'
  var qs = require('qs');
  export default {
    data(){
      return{
        flag:'ve_request',
        exam_dropdown:{},
        classes:{},
        exam_type:{},
        mark: {},
        post_data:{},
        terminal_id:'',
      }
    },
    methods:{
      load_dropdown_value(){
        let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});
        this.axios.get(this.$hostname+'/mark_distribution?'+this.flag).then((response)=>{
          console.log(response.data);
          this.exam_dropdown=response.data.exams;
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      mark_distribution_list_with_exam_type(event){
        let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});
        let id=event.target.value;
        console.log(id)
        this.axios.get(this.$hostname+'/mark_distribution/mark_distribution_list_with_exam_type?id='+id).then((response)=>{
          console.log(response.data);
          this.exam_type=response.data.exam_type;
          this.classes=response.data.classes;
          this.mark=response.data.exists;
          this.terminal_id=response.data.t_id;
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      save_mark_distribution(){
        this.post_data.mark=this.mark;
        this.post_data.flag='vue_request'
        this.post_data.t_id=this.terminal_id;
        console.log(this.post_data);
        this.axios({
          method: 'post',
          url: this.$hostname+'/Mark_distribution/save_mark_distribution',
          data: qs.stringify(this.post_data),
          headers: {'Content-Type': 'application/x-www-form-urlencoded' }}).then((response)=>{
          let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});
          this.$toasted.success('successfully done !', this.$message1);
          setTimeout(() => {
            loader.hide()
          },400)
        });
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
