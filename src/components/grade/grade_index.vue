<template>
  <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box">
          <loading :active.sync="isLoading"
                   :can-cancel="true"
                   :on-cancel="onCancel"
                   :is-full-page="fullPage"></loading>
          <!-- form start -->
          <div class="box-body">
            <div class="row">
              <div class="col-sm-12">
                <template>
                  <pageheader></pageheader>
                </template>
                <div id="tabs" class="ui-tabs ui-corner-all ui-widget ui-widget-content ui-tabs-vertical ui-helper-clearfix">
                  <ul role="tablist" class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header">
                    <li v-for="(class_row,index) in classes_data" :key="classes_data.classesID" role="tab" tabindex="0" :class="{'ui-tabs-active ui-state-active':selected == class_row.classesID}" @click="selected = class_row.classesID" class="ui-tabs-tab ui-corner-top ui-state-default ui-tab" aria-controls="31" aria-labelledby="ui-id-1" aria-selected="true" aria-expanded="true">
                      <div class="dash_box">
                        <div class="dash_count">
                          <a  @click="hide_show(class_row.classesID)" role="presentation" tabindex="-1" class="ui-tabs-anchor" id="ui-id-1">{{class_row.classes}}</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div  v-if="un_hide==class_row.classesID"  v-for="(class_row,index) in classes_data" :key="classes_data.classesID" id="31" aria-labelledby="ui-id-1" role="tabpanel" class="ui-tabs-panel ui-corner-bottom ui-widget-content" aria-hidden="false" style="display: block;">
                    <table class="table table-responsives table-striped table-bordered" style="width:100%;margin-bottom: 10px">
                      <tbody>
                      <tr>
                        <td><strong style="font-size: 14px">Base Mark</strong></td>
                        <td style="text-align: center"><strong style="font-size: 14px">{{grade_base_mark[class_row.classesID]}}</strong></td>
                      </tr>
                      </tbody>
                    </table>
                    <table  class="table table-responsives table-striped table-bordered" style="width:100%;">
                      <tbody>
                      <tr>
                        <th>Grade</th>
                        <th>Min</th>
                        <th>Max</th>
                        <th>Grade Point</th>
                        <th>Remark</th>
                      </tr>
                      <tr v-for="(class_grade,index) in class_row.grades" id="tr_">
                        <td>{{class_grade.grading}}</td>
                        <td>{{class_grade.min_mark}}</td>
                        <td>{{class_grade.max_mark}}</td>
                        <td>{{class_grade.grade_point}}</td>
                        <td>{{class_grade.remarks}}</td>
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
  </section>
</template>
<script>
  import pageheader from '@/components/grade/page_header'
  export default {
    data () {
      return {
        isLoading: false,
        fullPage: true,
        selected:'',
        un_hide:'',
        flag:'vue_request',
        url:'/edus',
        classes_data:[],
        grade_base_mark:[],
      }
    },
    components:{
      pageheader
    },
    methods:{
      hide_show(id){
        console.log(id);
        this.un_hide=id;
      },
      get_class_list(){
        let loader = this.$loading.show({color:'#0000FF', width: 128, height: 128, loader: 'bars'});
        this.axios.get(this.$hostname+ '/grade' + '?' + this.flag).then((response)=>{
          this.classes_data=response.data.classes;
          this.selected=response.data.classes[0].classesID;
          this.un_hide=response.data.classes[0].classesID;
          this.grade_base_mark=response.data.base_mark_array;
          console.log(this.grade_base_mark);
        });
        setTimeout(() => {
          loader.hide()
        },400)
      },
    },
    mounted(){
      this.get_class_list();
    }
  }
</script>

<style>

</style>
