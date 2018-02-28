<template>
    <b-card
            style="max-width: 15rem"
             class="mb-2">
            <h4 slot="header">{{question.ask}}</h4>
           upvote : {{question.upvoters.length}} comment : {{question.comments.length}}
        <b-button-group class="">
          <b-button variant="danger" @click="removePost(question._id)">delete</b-button>
          <b-button variant="info" @click="toUpdate(question._id)">update</b-button>
        </b-button-group>
    </b-card>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props:['question'],
  methods:{
    ...mapActions([
      'removePost'
    ]),
    toUpdate(id){
      this.$router.push({name :'Update', params:{id:id}})
    }
  }
}
</script>

<style>

</style>
