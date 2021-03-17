import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import exam_index from '@/components/exam/exam_index'
import index_grade from '@/components/grade/grade_index'
import grade_setup from '@/components/grade/grade_setup'
import edit_grade from '@/components/grade/edit_grade'
import exam_type_index from '@/components/exam_setting/exam_type/exam_type_index'
import term_type_index from '@/components/exam_setting/terminal_exam_type/term_exam_type_index'
import exam_system_index from '@/components/exam_setting/exam_system/exam_system_index'
import exam_calculation_index from '@/components/exam_setting/exam_calculation/exam_calculation_index'
import exam_setup_index from '@/components/exam_setting/exam_setup/exam_setup_index'
import exam_routine_index from '@/components/exam_routine/exam_routine_index'
import mark_distribution_index from '@/components/mark/mark_distribution/mark_distribution_index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'exam_index',
      component: exam_index,

    }, {
      path: '/grade_index',
      name: 'index_grade',
      component: index_grade,
    }, {
      path: '/grade_setup',
      name: 'grade_setup',
      component: grade_setup,
    },{
      path: '/edit_grade',
      name: 'edit_grade',
      component: edit_grade,
    },{
      path: '/exam_type_index',
      name: 'exam_type_index',
      component: exam_type_index,
    },{
      path: '/term_type_index',
      name: 'term_type_index',
      component: term_type_index,
    },{
      path: '/exam_system_index',
      name: 'exam_system_index',
      component: exam_system_index,
    },{
      path: '/exam_calculation_index',
      name: 'exam_calculation_index',
      component: exam_calculation_index,
    },{
      path: '/exam_setup_index',
      name: 'exam_setup_index',
      component: exam_setup_index,
    },{
      path: '/exam_routine_index',
      name: 'exam_routine_index',
      component: exam_routine_index,
    },{
      path: '/mark_distribution_index',
      name: 'mark_distribution_index',
      component: mark_distribution_index,
    },

  ]
})
