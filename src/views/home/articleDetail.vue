<script>
import { onMounted , reactive } from 'vue';
import { useRoute } from 'vue-router';
import api from '../../api/axios.js';
export default {
    setup(){
        const route=useRoute()
        const state = reactive({
            articleArray:[],
            articleIds:null
            
        });
        const getArticleDetail=async()=>{
            try{
                
                var response=await api.get("/Home/showArticleDetail/"+state.articleIds,{})
                if(response.data.status===200){
                   
                    state.articleArray=response.data.data;
                    console.log(state.articleArray)
                    
                }else{
                    console.log(response.data)

                }

            }catch(error){
                    console.error(error);
                }
    }
      onMounted(() => {
        state.articleIds=route.query.articleIds
        getArticleDetail();
        
    });
    return{
        state
      }
      
    
},



}
</script>

<template>
  <div class="article">
    <div class="detailBox">
        <div class="articleHeader"> 
            <h1>{{ state.articleArray.articleTitle }}</h1>
            <p>{{ state.articleArray.articleAuthor }}</p>
            <p>{{ state.articleArray.articleTime }}</p>
        </div>
        <div class="articleContent"> 
             <p>{{ state.articleArray.articleContent }}</p>
        </div>
      
        
    </div>
   
    
  
  </div>
</template>

<style scoped>
    .article{
        
    }
   
</style>
