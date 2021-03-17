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
            title: "Mark",
            icon: "fa fa-plus",
            link: "/"
          },
          {
            title: "Mark Distribution",
            icon: "fa fa-plus",
            link: "/mark_distribution_index"
          },
        ],
        selected:'/exam_routine_index',
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
