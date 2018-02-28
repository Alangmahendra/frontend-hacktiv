<template>
  <div class="container">
    <b-card-group v-if="onequestion !== null" deck>
      <b-card>
        QUESTION FROM {{onequestion.creator.email}}
       <b-card><p>{{onequestion.ask}}</p></b-card>
    <b-button type="button" size="sm" variant="primary" @click="voteUp">
       {{onequestion.upvoters.length}} Voteup
    </b-button>
    <b-button type="button" size="sm" variant="danger" value="down" @click="voteDown">
      {{onequestion.downvoters.length}} Votedown
    </b-button>
      </b-card>
      <b-card>
        Comment
        
          <!-- <p v-for="(comment, index) in onequestion.comments" :key="index" >
            {{comment.creator.email}} : {{comment.text}}
          </p> -->
          <comment v-for="(comment, index) in onequestion.comments" :key="index" :comment="comment"/>
       
        <form @submit.prevent="submitForm">
          <b-form-input type="text" placeholder="comment here" v-model="formComment.comment"></b-form-input>
          <b-button type="submit" variant="warning">ADD</b-button>
        </form>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import comment from './comment'
import {mapState, mapActions} from 'vuex'
export default {
  components:{comment},
  data(){
    return{
      formComment:{
        id:this.$route.params.id,
        comment:''
      },

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
      'addComment',
      'toggleVote'
    ]),
    submitForm(){
      this.addComment(this.formComment).then(()=>{
        this.formComment.comment = ''
      })
    },
    voteUp(){
      this.toggleVote({
        id:this.$route.params.id,
        direction:'up'
        })
    },
    voteDown(){
      this.toggleVote({
        id:this.$route.params.id,
        direction:'down'
        })
    }
  },
  created(){
    this.getQuestion(this.$route.params.id)
  },
}
</script>

<style>

</style>
