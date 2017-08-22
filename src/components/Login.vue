<template>
<div>
<el-row type="flex" class="row-bg" justify="center">
  <el-col :span="6"><h1 class="center">后台管理系统</h1></el-col>
</el-row>
<el-row type="flex" justify="center">
  <el-col :span="6">  
  <el-form :model="loginForm" :rules="rulesLogin" ref="loginForm">
  <el-form-item label="用户名" prop="user_name">
    <el-input type="text" v-model="loginForm.user_name" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="user_pass">
    <el-input type="password" v-model="loginForm.user_pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
    <el-button @click="resetForm('loginForm')">重置</el-button>
  </el-form-item>
</el-form></el-col>
</el-row>
</div>
  
</template>

<script>
  export default {
    data() {
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        }
		  callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
          callback();
      };
      return {
        loginForm: {
          user_name: '',
          user_pass: '',
        },
        rulesLogin: {
          user_name: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          user_pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post("api/login.php",{'user_name': this.loginForm.user_name,'user_pass':this.loginForm.user_pass})
            .then(function(res){
              if(res.data.code == '10000'){
                window.location.href ="/";
              }
            })
            .catch(function(err){
                console.log(err);
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>

body{
  background-color: #7e57c2;
}
.center{
	text-align: center;
}
.row-bg{
	margin-top: 200px;
}
</style>
