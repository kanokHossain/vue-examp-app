<template>
  <h5 class="page-header">
    <router-link style="margin-right: 5px;" v-for="(menu, index) in menu_items" v-bind:key="index" :class="{'btn btn-default': current_url == menu.link,'btn btn-primary':current_url !== menu.link}"  :to="menu.link">
      <i class="fa fa-plus"></i>
      {{ menu.title }}
    </router-link>
  </h5>
</template>
<script>
  export default {
    data(){
      return{
        menu_items:[
          {
            title: "Exam Type",
            icon: "fa fa-plus",
            link: "/exam_type_index"
          },
          {
            title: "Terminal Exam Type ",
            icon: "fa fa-plus",
            link: "/term_type_index"
          },
          {
            title: "Exam System",
            icon: "fa fa-plus",
            link: "/exam_system_index"
          },
          {
            title: "Exam Calculation",
            icon: "fa fa-plus",
            link: "/exam_calculation_index"
          },
          {
            title: "Exam Setup",
            icon: "fa fa-plus",
            link: "/exam_setup_index"
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
      // $(document.body).on("click", "a[data-toggle]", function(event) {
      //   location.hash = this.getAttribute("href");
      // });
      // let href = location.hash.split("#").pop(-1);
      // this.selected=href;
      // console.log(this.selected)
    }
  }
</script>
