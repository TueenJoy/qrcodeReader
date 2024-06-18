<script>
import { ref } from 'vue';
import api from '../../api/axios.js';
import router from '../../router';
export default {
  setup(){
    const userLogname=ref('');
    const userPassword=ref('');
    const userLogin=async()=>{
        try{
          var response=await api.get("/User/userLogin",{
            params:{
                 userLogname: userLogname.value,
                 userPassword: userPassword.value
            }
          });
          if(response.data.status===200){
            
            console.log('登录成功！')
           
            router.push('/home')
          }else{
            console.log('登录失败!')
          }

          // 登录
        }catch(error){
          
          console.log(userLogname)
        }
    
    }
    return {
      userLogname,
      userPassword,
      userLogin
    };

  }


}

</script>

<template>
  <div>
    <h1>登录</h1>
   <br> 
   账号: <input placeholder="请输入账号" v-model="userLogname"><br>
    密码: <input placeholder="请输入密码" v-model="userPassword">
<br>
<router-link to="register">没有账号？去注册</router-link><br>  
 <button @click="userLogin">登录</button>

  </div>
</template>
<style scoped>

</style>
