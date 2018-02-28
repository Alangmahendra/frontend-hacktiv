<template>
  <div class="container rapihin">
    <b-card>
      <form @submit.prevent="submitPost()">
        <b-form-input placeholder="Ask something" type="text" v-model="formAsk.ask"></b-form-input>
        <b-button type="submit" variant="warning">POST</b-button>
      </form>
    </b-card>
      <b-card-group deck>
      <myitem v-for="(question,index) in myQuestions" :key="index" :question="question"></myitem>
    </b-card-group>
  </div>
</template>

<script>
import myitem from './Myitem'
import {mapState,mapActions} from 'vuex'
export default {
  components:{myitem},
  name:'Mypage',
  data(){
    return{
      formAsk:{
        ask:''
      }
    }
  },
  computed:{
    ...mapState([
      'myQuestions'
    ])
  },
  mounted(){
    this.getAllMine()
  },
  methods:{
    ...mapActions([
      'addPost',
      'updatePost',
      'removePost',
      'getAllMine'
    ]),
    submitPost(){
      this.addPost(this.formAsk).then(()=>{
        this.formAsk.ask = ''
      })
    }
  }
}
</script>

<style>
  .rapihin{
    margin-top:30px
  }
</style>
