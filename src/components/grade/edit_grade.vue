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
                <form @submit.prevent="update_grade_setup_record"  method="post" class="edit_form">
                  <input type="hidden" name="class_id" value="31">
                  <div class="col-md-3 ui-tabs ui-corner-all ui-widget ui-widget-content ui-tabs-vertical ui-helper-clearfix" id="tabs">
                    <ul style="width:100%" role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                      <li role="tab" tabindex="0" v-for="(class_row,index) in classes" :key="classes.classesID"  @click="selected = class_row.classesID" :class="{'ui-tabs-active ui-state-active':selected == class_row.classesID}" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="31" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true">
                        <div class="dash_box">
                          <div class="dash_count">
                          <a @click="get_class_grade_edit_byclass_id(class_row.classesID)" role="presentation" tabindex="-1" class="ui-tabs-anchor" id="ui-id-1">{{class_row.classes}}</a>
                          </div>
                        </div>
                      </li>

                    </ul>
                  </div>
                  <div class="col-md-9" v-if="selected != ''">
                    <label class="form-control another_lbl"><strong style="color: #777">Grade Base Mark</strong></label>
                    <input type="number" step="any" class="form-control" v-model="add.grade_base_mark" name="grade_base_mark" placeholder="Grade Base Mark"   style="margin-bottom: 10px;width: 50%;">
                    <input type="hidden" v-model="add.grade_based_id"  >
                    <table class="table" style="width:100%;">
                      <tbody>
                      <tr>
                        <th>Grade</th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Grade Point</th>
                        <th>Remark</th>
                        <th>Action</th>
                      </tr>
                      <tr  :id="'tr_' + (index+1)"  v-for="(result_row,index) in editclass_grade_result" :key="editclass_grade_result.exam_grading_id">
                        <td>
                          <select class="from-control" name="grade[]" v-model="result_row.grading_id">
                            <option v-for="(grade_row,index) in grade_dropdown" :key="grade_dropdown.grading_id" :value="grade_row.grading_id"  >{{grade_row.grading}}</option>
                          </select>
                          <input type="hidden"  name="existing_id[]" :value="result_row.exam_grading_id">
                        </td>
                        <td>
                          <input type="text" v-model="result_row.min_mark"    class="form-control" placeholder="Enter Min Mark">
                        </td>
                        <td>
                          <input type="text" v-model="result_row.max_mark" required="" class="form-control" placeholder="Enter Max Mark">
                        </td>
                        <td>
                          <input type="text" v-model="result_row.grade_point" required="" class="form-control" placeholder="Enter Grade Point">
                        </td>
                        <td>
                          <input type="text" v-model="result_row.remarks"  value="Best" class="form-control" placeholder="Enter Remarks">
                        </td>
                        <td>
                          <a  class="btn btn-danger pull-right" @click="removeGrade((index),result_row.exam_grading_id)"><i class="fa fa-minus"></i></a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <input type="hidden" id="row" :value="i">
                    <a href="javascript:" class="btn btn-primary pull-right" @click="addGrade"><i class="fa fa-plus"></i> Add Grade</a>
                    <input type="submit" class="btn btn-info pull-left " value="Save Grade">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- col-sm-12 -->
    </div>
    <!-- row -->
  </section>
</template>
<script>
  import pageheader from '@/components/grade/page_header'
  export default {
    data(){
      return{
        selected:'',
        flag:'vue_request',
        classes:[],
        grade_dropdown:[],
        editclass_grade_result:[],
        add:{
          deleted_id:[],
          editclass_grade_result:[],
          grade_based_id:'',
          grade_base_mark:'',
          class_id:'',
        },
        grade_base_mark:{},
      }
    },
    components:{
      pageheader
    },
    computed: {
      i: function(){
        return this.editclass_grade_result.length;
        }
    },
    methods:{
      getclasses(){
        let loader = this.$loading.show({color:'#0000FF', width: 128, height: 128, loader: 'bars'});
        this.axios.get(this.$hostname+'/grade/edit_grade?'+this.flag).then((response)=>{
          console.log(response.data);
          this.classes=response.data.classes;
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      addGrade() {
        this.editclass_grade_result.push({
          grading_id: '',
          exam_grading_id: '' ,
          min_mark: '' ,
          max_mark: '' ,
          grade_point: '' ,
          remarks: '' ,
        })
      },
      update_grade_setup_record(){
        let loader = this.$loading.show({color:'#0000FF', width: 128, height: 128, loader: 'bars'});
        console.log(this.editclass_grade_result)
        var qs = require('qs');
         this.add.editclass_grade_result=this.editclass_grade_result;
         this.add.class_id=this.selected;
        // data.push(this.add);
        // console.log(data);
        this.axios({
          method: 'post',
          url: this.$hostname+'/grade/update_grade_setup_record',
          data: qs.stringify(this.add),
          headers: {'Content-Type': 'application/x-www-form-urlencoded' }}).then((response)=>{
          console.log('ok')
        });
        this.$toasted.success('successfully done !',{duration: 2000,position: 'top-center',theme: 'bubble',
          action: {
            text: 'Close',
            onClick: (e, toastObject) => {
              toastObject.goAway(0);
            }
          },
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      removeGrade(row, isDelete) {
        if(isDelete){
          this.add.deleted_id.push(isDelete);
        }
        this.editclass_grade_result.splice(row,1)
      },
      get_class_grade_edit_byclass_id(id){
        this.axios.get(this.$hostname+'/grade/edit_grade_setup?id='+id).then((response)=>{
          this.editclass_grade_result=response.data.results;
          this.grade_dropdown=response.data.grade_setup;
          this.grade_base_mark=response.data.base_mark_array;
          for(let i=0;i<response.data.classes.length; i++){
            if (this.grade_base_mark[response.data.classes[i].classesID]===undefined)
            {
              this.grade_base_mark[response.data.classes[i].classesID]={
                base_mark:'',
                class_id:response.data.classes[i].classesID,
                id:'',
              };
            }
          }
          this.add.grade_based_id=this.grade_base_mark[this.selected].id
          this.add.grade_base_mark=this.grade_base_mark[this.selected].base_mark
          console.log(response.data);
        })
      }
    },
    mounted() {
      this.getclasses();
      console.log('start');
    }
  }
</script>
