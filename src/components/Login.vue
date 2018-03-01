<template>
  <div class="container">
    <div cols="*">
    <b-form-group>
      <b-form-input type="email" placeholder="email" v-model="email"></b-form-input>
      <br>
       <b-form-input type="password" placeholder="password" v-model="password"></b-form-input>
    </b-form-group>
    <b-button variant="outline-warning" size="lg" @click="signup">Signup</b-button>
    <b-button variant="outline-warning" size="lg" v-if="show === true" @click="signin">Signin</b-button>
    <p class="pointer" @click="showUp">alredy have account</p>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
const baseUrl = 'http://neoal.xyz:3011/api'
export default {
  name: 'Login',
  data(){
    return{
      show:false,
      email:'',
      password: ''
    }
  },
  methods:{
    showUp(){
      this.show = !this.show
    },
    signup(){
      axios.post(`${baseUrl}/users/signup`, {
        email : this.email,
        password: this.password
      })
      .then(({data}) => {
        console.log('terdaftar',data.data)
      })
      .catch(err => console.error(err))
    },
    signin(){
      axios.post(`${baseUrl}/users/signin`, {
        email : this.email,
        password : this.password
      })
      .then(({data}) => {
        console.log('masuk',data.token)
        localStorage.setItem('token',data.token)
        this.$router.push({name : 'Home'})
      })
      .catch(err => console.error(err))
    }
  }
}
</script>

<style>
  .pointer{
    cursor: pointer;
  }
  .pointer:hover{
    color: orange
  }
</style>
