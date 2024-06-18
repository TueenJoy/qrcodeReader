<script setup>

</script>

<template>
  <div class="nav">
    <div class="logo">
        
    </div>
    <router-link to="/"><h2 class="sitename">Qm</h2></router-link>
    
    <div class="nav_login">
        <!-- <router-link to="/login">Sign in</router-link> -->
   <!-- <router-link to="/register">Sign up</router-link> -->
    </div>
  </div>
</template>

<style scoped>
    .nav{
        color: white;
      
    }
    .logo{
        /* border: 1px solid black; */
        width:60px ;
        height: 60px;
       float: left;
        display: flex;
        align-items: center;
    }
    .sitename{
        /* border: 1px solid black; */
        line-height: 60px;
        margin: 0;
        float: left;
        color: white;
    }
    .nav_login{
        float: right;
        width:80px ;
        height: 60px;
        display: flex;
        align-items: center;
    }
    /* .nav_login p{
        margin-left: 10px;
        margin-right: 10px;
    } */
</style>
