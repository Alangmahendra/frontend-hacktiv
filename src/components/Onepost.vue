<template>
  <b-card>
    <div class="row">
    {{post.creator.email}}
    </div>
    <b-card clas="text-center" @click="toSeepost(post._id)">
      {{post.ask}}
    </b-card>
    <br>
    <p>comments : {{post.comments.length}} 
    </p>
    <div>
       Voteup : {{post.upvoters.length}}
      Votedown : {{post.downvoters.length}}
    </div>
  </b-card>
</template>

<script>
export default {
  props:['post'],
  methods:{
    toSeepost(id){
      this.$router.push({name:'Seepost' ,params:{id:id}})
    }
  }
}
</script>

<style>

</style>
