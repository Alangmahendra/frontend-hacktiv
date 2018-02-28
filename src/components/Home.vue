<template>
  <div class="container rapihin" v-if="questions">
      <oneitem class="deck" v-for="(post, index) in questions" :key="index" :post="post"></oneitem> <br>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import oneitem from './Onepost'
export default {
  name: 'Home',
  components:{oneitem},
  computed:{
    ...mapState([
      'questions'
    ])
  },
  mounted(){
    this.getAllQuestions()
  },
  methods:{
    ...mapActions([
      'getAllQuestions'
    ])
  }
}
</script>

<style>
  .rapihin{
    margin-top:30px
  }
  .deck{
    margin:30px 0px 30px 0px
  }
</style>
