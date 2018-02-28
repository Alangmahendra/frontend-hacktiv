<template>
  <div class="container rapihin">
    <b-card>
      <form @submit.prevent="submitUpdate()">
        <b-form-input placeholder="Ask something" type="text" v-model="formUpdate.ask"></b-form-input>
        <b-button type="submit" variant="warning">POST</b-button>
      </form>
    </b-card>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data(){
    return{
      formUpdate: {
        id:this.$route.params.id,
        ask:''
      }
    }
  },
  computed:{
    ...mapState([
      'onequestion'
    ])
  },
  methods:{
    ...mapActions([
      'getQuestion',
      'updatePost'
    ]),
    submitUpdate(){
      this.updatePost(this.formUpdate).then(()=>{
        this.$router.push({name:'Mypage'})
      })
    }
  },
  created(){
    this.getQuestion(this.$route.params.id)
  },
  watch:{
    onequestion:{
      deep:true,
      handler(){
        this.formUpdate ={
          ...this.formUpdate,
          ...this.onequestion
        }
      }
    }
  }
}
</script>

<style>
  .rapihin{
    margin-top:30px
  }
</style>
