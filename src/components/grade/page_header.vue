<template>
  <h5 class="page-header">

    <router-link style="margin-right: 5px;" v-for="(menu, index) in menu_items" v-bind:key="index" :class="{'btn btn-default': current_url == menu.link,'btn btn-primary':current_url !== menu.link}"  :to="menu.link">
<!--      <i class="fa fa-plus"></i>-->
      {{ menu.title }}  </router-link>


<!--    <a class="btn btn-default">Grade</a>-->
<!--    <a class="btn btn-primary" href="/#/grade_setup">-->
<!--      Grade Basic                        </a>-->
<!--    <a class="btn btn-primary" href="/#/edit_grade">-->
<!--      Edit Grade-->
<!--    </a>-->
  </h5>
</template>
<script>
  export default {
    data(){
      return{
        menu_items:[
          {
            title: "Grade",
            link: "/grade_index"
          },
          {
            title: "Grade Basic",
            link: "/grade_setup"
          },
          {
            title: "Edit Grade",
            link: "/edit_grade"
          }
        ],
        selected:'/exam_type_index',
      }
    },
    computed: {
      current_url(){
        return this.$router.currentRoute.path;
      }
    },
    methods:{
      updateCurrentLink(link){
        console.log("Updating link ", link);
        this.selected = link;
      }
    },
    mounted() {
    }
  }
</script>
