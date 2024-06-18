<script>
import Mod from '../../components/home/mod.vue'

import Article from '../../components/home/article.vue'
import Footer from '../../components/footer/footer.vue'

export default {
  setup(){
     
      return{
        
    }
    
    },
    components:{
        Mod,
        Article,
        Footer
      
   
    }
 
}

</script>

<template>
  <div class="home">
    <div class="mod">
      <Mod></Mod>
    </div>
   <Article></Article>
   <Footer></Footer>
  </div>
</template>

<style scoped>
    .home{
      /* background-color: aliceblue; */
     /* margin-top: 60px; */
      
    }
</style>
