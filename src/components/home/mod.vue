<script>
import { ref, onMounted,onBeforeUnmount,computed} from 'vue'

export default {
    setup(){
      

      return{
       
      }


    }

}

</script>

<template>
  <div class="message">
    <div class="mod1">
        <div class="mod_box mod_box1">必看精选</div>
        <div class="mod_box mod_box2">热门文章</div>
        <div class="mod_box mod_box2">实用工具</div>
        <div class="mod_box mod_box2">主站</div>
    </div>
  
  </div>
</template>

<style scoped>
    .message{
      /* background-color: black; */
      /* overflow: hidden; */
    
     
    }
    .mod1{
      display: flex;
      justify-content: flex-start;
      
    }
    .mod_box{
      margin: 0 5px;
      height:60px;
      width: 150px;
      color: white;
      font-size: 22px;
      font-weight: bold;
      line-height: 60px;
      border-radius: 10px;
      cursor: pointer;
    
    }
    .mod_box1{
    
      background-color: #157fd2;
      color: white;
      
      background: linear-gradient(to bottom right, #0755b9, #1a8dda);
    }
    .mod_box2{
     
      background-color: #df5912;
      color: white;
      
      
      background:linear-gradient(to bottom right,#e22c16,#de5f11)
    }
   
</style>
