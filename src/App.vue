<script>
import Nav from './components/home/nav.vue'
// import Mod from './components/home/mod.vue'
// import Article from './components/home/article.vue'
import {onMounted,ref } from 'vue'
export default{
    setup(){
      const isNavVisible=ref(true)
      const navHeight=ref(0)
      
      onMounted(()=>{
        // window.addEventListener('scroll',()=>{
        //   if(window.scrollY>=160){
        //     isNavVisible.value=false
        //   }else{
        //     isNavVisible.value=true
        //   }
        // })
        // navHeight.value=document.querySelector('.com_nav').offsetHeight
        const com_nav=document.querySelector('.com_nav')
      
        window.addEventListener('scroll',()=>{
          let prevScrollPos=window.scrollY
          const currentScrollPos = window.scrollY;
          // console.log(parseInt(currentScrollPos))
          // console.log(parseInt(prevScrollPos))
          if (prevScrollPos > currentScrollPos) {
            com_nav.classList.remove('hide'); // 显示导航栏
          } else {
            if (currentScrollPos < 60) { // 根据需要调整阈值
              com_nav.classList.remove('hide'); // 显示导航栏
            } else {
              com_nav.classList.add('hide'); // 隐藏导航栏
            }
          }
          prevScrollPos = currentScrollPos;
        })
       
       
      })

      


      return{
        isNavVisible,
        navHeight
    }
    
    },
    components:{
      Nav
      
   
    }
    
}

</script>

<template>
  <div id="app">
    <div class="placeholder" :style="{height:navHeight}"></div>
    <Nav class="com_nav" v-show="isNavVisible"></Nav>
    <div class="hide"></div>
    <router-view class="content" />
  </div>
</template>

<style scoped>

#app{
  /* height: 1200px; */
  
  margin: 0;
  padding: 0;
}
.hide{
  margin-top: 60px;
}
.placeholder{
  display: block;
}

 .com_nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    z-index: 10;
    background-color: #282c34;
    transition: all 0.3s ease-in-out;
  }
  .com_nav.hide{
    top:-60px;
  }
 
  
</style>
