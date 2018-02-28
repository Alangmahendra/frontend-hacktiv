<template>
  <b-card>
    {{comment.creator.email}} : {{comment.text}} <br>
    <!-- {{comment._id}} -->
    <b-button variant="primary" @click="upvote">{{comment.upvoters.length}} Vote up</b-button>
    <b-button variant="danger" @click="downvote">{{comment.downvoters.length}} Vote down</b-button>
  </b-card>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  props:['comment'],
  methods:{
    ...mapActions([
      'toogleVoteComment'
    ])
    ,
    upvote(){
      this.toogleVoteComment({
        id:this.$route.params.id,
        direction:'up',
        commentId:this.comment._id
      })
    },
    downvote(){
      this.toogleVoteComment({
        id:this.$route.params.id,
        direction:'down',
        commentId:this.comment._id
      })
    }
  }
}
</script>

<style>

</style>
