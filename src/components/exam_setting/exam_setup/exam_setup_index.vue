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
              <div class="col-sm-10">
                <form @submit.prevent="exam_settings_search" class="form-horizontal" role="form" method="post">
                  <div class="form-group">
                    <label for="exam" class="col-sm-2 control-label">
                      Select Class
                    </label>
                    <div class="col-sm-4">
                      <select  v-model="exam_settings_form_post.classesID" name="classesID" id="classesID" class="form-control select2 select2-offscreen" tabindex="-1">
                        <option value="0">Select Class</option>
                        <option v-for="(classes_row,index) in classes" :key="index"  :value="classes_row.classesID">{{classes_row.classes}}</option>
                      </select>
                    </div>
                    <label for="exam" class="col-sm-2 control-label">
                      Select Exam Type
                    </label>
                    <div class="col-sm-4">
                      <select @change="hide_unhide_dropdown($event)" v-model="exam_settings_form_post.type_id" name="classesID" id="classesID" class="form-control select2 select2-offscreen" tabindex="-1">
                        <option value="0">Select Type</option>
                        <option value="terminal">Term Final</option>
                        <option value="other">Other Exam</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exam" class="col-sm-2 control-label">
                      Select Terminal
                    </label>
                    <div class="col-sm-4">
                      <select @change="terminal_exam_to_other_exam($event)" v-model="exam_settings_form_post.terminal_id" name="exam_type_id" id="exam_type_id" class="form-control select2 select2-offscreen" tabindex="-1">
                        <option value="0">Select Terminal Exam</option>
                        <option v-for="(t_exam_row,index) in t_exam" :key="index" :value="t_exam_row.terminal_exam_id"  selected="selected">{{t_exam_row.terminal_exam_type}}</option>
                      </select>
                    </div>
                    <label v-show="dropdown_hide=='other'" for="exam" class="col-sm-2 control-label">
                      Select Exam
                    </label>
                    <div class="col-sm-4" v-show="dropdown_hide=='other'">
                      <select  v-model="exam_settings_form_post.exam_type_id" name="exam_type_id" id="exam_type_id" class="form-control select2 select2-offscreen" tabindex="-1">
                        <option value="0">Select Exam</option>
                        <option v-for="(exam_type_row,index) in exam_type" :key="index" :value="exam_type_row.exam_type_id"  selected="selected">{{exam_type_row.exam_type}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                      <div class="col-sm-12">
                        <input style="float: right" type="submit" class="btn btn-success" value="Search">
                      </div>
                  </div>
                </form>
                <form  class="form-horizontal" role="form" method="post"  @submit.prevent="save_exam_settings">
                  <input type="hidden" name="exam_type_id" value="1">
                  <input type="hidden" name="classesID" value="37">
                  <table class="table table-responsive table-striped table-bordered" style="width: 100%">
                    <tbody>
                    <tr>
                      <th style="width: 30%">Subject Name</th>
                      <th v-for="(exam_system_row,index) in exam_system" :key="index">{{exam_system_row.exam_system}}</th>
                    </tr>

                    <tr v-for="(subjects_row,index) in subjects" :key="index">
                      <td>
                        <input type="hidden" v-model="subjects_row.subjectID" name="subject[]" value="188">{{subjects_row.subject}}
                        <input @click="hide_show_mark_fields(subjects_row.subjectID,$event)" type="checkbox" @mouseover="showByIndex = subjects_row.subjectID" @mouseout="showByIndex = null"> <span style='font-size:15px;'>(&#10003;)</span><p  style="border-style: solid;text-align: center;color: #0A75AF" v-show="showByIndex === subjects_row.subjectID">give pass mark and total mark (subject wise)</p>
                      </td>
                      <td v-for="(exam_system_row,index2) in exam_system" :key="index2">
                        <input  type="checkbox" :checked="chec_v.includes(subjects_row.subjectID+'_'+exam_system_row.exam_system_id)?true:false"    @click="add_exam_system(subjects_row,exam_system_row,index2,$event),readonly_mark_fields(subjects_row.subjectID,exam_system_row.exam_system_id,$event)" >
                        <br/>
                        <input :readonly="!chec_v.includes(subjects_row.subjectID+'_'+exam_system_row.exam_system_id)" v-show="show_hide.includes(subjects_row.subjectID)" v-on:keyup="get_total_mark_array(subjects_row,exam_system_row,index2,$event)" :value="exam_system_post.total_mark_array[subjects_row.subjectID]?exam_system_post.total_mark_array[subjects_row.subjectID][exam_system_row.exam_system_id]:''" placeholder="Total Mark"  type="number">
                        <input :readonly="!chec_v.includes(subjects_row.subjectID+'_'+exam_system_row.exam_system_id)" v-show="show_hide.includes(subjects_row.subjectID)" v-on:keyup="get_pass_mark_array(subjects_row,exam_system_row,index2,$event)" :value="exam_system_post.pass_mark_array[subjects_row.subjectID]?exam_system_post.pass_mark_array[subjects_row.subjectID][exam_system_row.exam_system_id]:''" placeholder="Pass Mark" type="number">
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <br>
                  <div class="col-sm-2 pull-right" v-if="!message">
                    <input style="width: 100%" type="submit" class="btn btn-success" value="Save">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
        chec_v:[],
        showByIndex: null,
        show_hide:[],
        checkboxObj:[],
        classes:[],
        exam_type:[],
        t_exam:[],
        dropdown_hide:'',
        exam_settings_form_post:{
          classesID:'0',
          exam_type_id:'0',
          terminal_id:'0',
          type_id:'0',
          flag:'1',
        },
        exam_system_post:{
          exam_system:{},
          total_mark_array:{},
          pass_mark_array:{},
        },
        exam_system:[],
        subjects:[],
        exam_type_id:'',
        classesID:'',
        terminal_id:'',
        post_data:[],
        message:'default'
      }
    },
    methods:{
      hide_unhide_dropdown(event){
        this.dropdown_hide=event.target.value;
      },
      terminal_exam_to_other_exam(event){
        let t_id=event.target.value;
        this.axios.get(this.$hostname+'/exam_common/get_terminal_exam_to_other_exam?id='+t_id).then((response)=>{
          this.exam_type=response.data;
        });
      },
      hide_show_mark_fields(id,event){
        if(event.target.checked==true){
          this.show_hide.push(id);
        }else{
          var index = this.show_hide.indexOf(id);
          if (index !== -1) this.show_hide.splice(index, 1);
          console.log(index)
        }
      },
      readonly_mark_fields(sub_id,id,event){
        var check_key=sub_id+'_'+id;
        if(event.target.checked==true){
          this.chec_v.push(check_key);
        }else{
          var index = this.chec_v.indexOf(check_key);
          if (index !== -1) this.chec_v.splice(index, 1);
        }
      },
      get_total_mark_array(item,event,index,property){
        if( !this.exam_system_post.total_mark_array.hasOwnProperty(item.subjectID))
          this.exam_system_post.total_mark_array[item.subjectID] ={};
        if( !this.exam_system_post.total_mark_array[item.subjectID].hasOwnProperty(event.exam_system_id))
          this.exam_system_post.total_mark_array[item.subjectID][event.exam_system_id] ={};
        console.log(event);
        this.exam_system_post.total_mark_array[item.subjectID][event.exam_system_id] =property.target.value;
        if(property.target.value!=null){
          console.log('yes')
        }else{
          delete this.exam_system_post.total_mark_array[item.subjectID][event.exam_system_id];
        }
        console.log(property)
      },
      get_pass_mark_array(item,event,index,property){
        if( !this.exam_system_post.pass_mark_array.hasOwnProperty(item.subjectID))
          this.exam_system_post.pass_mark_array[item.subjectID] ={};
        if( !this.exam_system_post.pass_mark_array[item.subjectID].hasOwnProperty(event.exam_system_id))
          this.exam_system_post.pass_mark_array[item.subjectID][event.exam_system_id] ={};
        console.log(event);
        this.exam_system_post.pass_mark_array[item.subjectID][event.exam_system_id] =property.target.value;
        if(property.target.value!=null){
          console.log('yes')
        }else{
          delete this.exam_system_post.pass_mark_array[item.subjectID][event.exam_system_id];
        }
        console.log(property)
      },
      get_dropdown_value(){
        let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});
        this.axios.get(this.$hostname+'/exam_common/exam_settings?'+this.$flag).then((response)=>{
          this.classes=response.data.classes;
          // this.exam_type=response.data.exam_type;
          this.exam_system=response.data.exam_system;
          this.t_exam=response.data.t_exams;
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      add_exam_system(item,event,index,property){
        //console.log(event.exam_system_id);
       // let id=index;\
        if( !this.exam_system_post.exam_system.hasOwnProperty(item.subjectID))
          this.exam_system_post.exam_system[item.subjectID] ={};
         if( !this.exam_system_post.exam_system[item.subjectID].hasOwnProperty(index))
          this.exam_system_post.exam_system[item.subjectID][index] ={};
        console.log(event);
        this.exam_system_post.exam_system[item.subjectID][index] =event.exam_system_id;
       // this.exam_system[item.subjectID]=event.exam_system_id;
        console.log(index);
        console.log([item.subjectID])
        if(property.target.checked==true){
          console.log('yes')
        }else{
         delete this.exam_system_post.exam_system[item.subjectID][index];

         console.log(Object.keys(this.exam_system_post.exam_system[item.subjectID]).length);
         //if(this.exam_system_post.exam_system[item.subjectID])
          console.log('flase')
          console.log(property);
        }
      },
      exam_settings_search(){
        let loader = this.$loading.show({color:'#0E66B7', width: 128, height: 128, loader: 'bars'});
        this.axios({
          method: 'post',
          url: this.$hostname+'/exam_common/exam_settings',
          data: qs.stringify(this.exam_settings_form_post),
          headers: {'Content-Type': 'application/x-www-form-urlencoded' }}).then((response)=>{
          this.exam_system=response.data.exam_system;
          this.subjects=response.data.subjects;
          this.exam_system_post.exam_system=response.data.arrays_for_check_system?response.data.arrays_for_check_system:[];
          this.exam_system_post.total_mark_array=response.data.arrays_for_t_mark?response.data.arrays_for_t_mark:[];
          this.exam_system_post.pass_mark_array=response.data.arrays_for_pass_mark?response.data.arrays_for_pass_mark:[];
          //checked readonly
          this.chec_v=response.data.checked_system?response.data.checked_system:[];
          //end checked readonly
          this.classesID=response.data.classesID;
          this.exam_type_id=response.data.exam_type_id;
          this.terminal_id=response.data.terminal_id;
          console.log(response.data);
          if(response.data.message){
            this.message=response.data.message;
            this.$toasted.success(response.data.message, this.$message1);
          }else{
            this.message='';
          }
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
      save_exam_settings(){
        this.post_data.exam_system=this.exam_system_post.exam_system;
        this.post_data.total_mark_array=this.exam_system_post.total_mark_array;
        this.post_data.pass_mark_array=this.exam_system_post.pass_mark_array;
        this.post_data.subjects=this.subjects;
        this.post_data.classesID=this.classesID;
        this.post_data.exam_type_id=this.exam_type_id;
        this.post_data.terminal_id=this.terminal_id;
        this.post_data.flag='1';
        console.log(this.post_data);
        this.axios({
          method: 'post',
          url: this.$hostname+'/exam_common/save_exam_settings',
          data: qs.stringify(this.post_data),
          headers: {'Content-Type': 'application/x-www-form-urlencoded' }}).then((response)=>{
            this.$toasted.success('successfully done !', this.$message1);
            this.get_dropdown_value();
        });
      }
    },

    components:{
      pageheader
    },
    mounted() {
      this.get_dropdown_value();
    }


  }
</script>
