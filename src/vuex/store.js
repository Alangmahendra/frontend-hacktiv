import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const token = localStorage.getItem('token')
const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})


const state = {
  questions: [],
  onequestion: null,
  myQuestions: []
}

const actions = {
  getAllQuestions({ commit }) {
    http.get('/post')
      .then(({ data }) => {
        console.log(data.data)
        commit('setQuestions', data.data)
      })
      .catch(err => console.error(err))
  },
  getQuestion({ commit }, id) {
    http.get(`/post/${id}`)
      .then(({ data }) => {
        console.log('satu postingan', data.data)
        commit('setQuestion', data.data)
      })
      .catch(err => console.error(err))
  },
  addComment({ commit }, comment) {
    console.log('ini data',comment)
    http.put(`/post/${comment.id}/comment`, { text: comment.comment }, {
      headers: { authorization: token }
    })
      .then(({ data }) => {
        console.log('coba nambah komen', data.data)
        commit('pushComment', data.data)
      })
      .catch(err => console.error(err))
  },
  addPost({ commit }, data) {
    http.post(`/post`, data,{
      headers:{authorization:token}
    })
      .then(({ data }) => {
        console.log('data add di actions', data.data)
        commit('pushPost', data.data)
      })
      .catch(err => {
        console.error(err)
      })
  },
  getAllMine({ commit }) {
    console.log('masuk')
    http.get(`/post/myquestion`, {
      headers: {
        authorization: token
      }
    })
      .then(({ data }) => {
        console.log('all my questions', data.data)
        commit('setMine', data.data)
      })
      .catch(err => {
        console.error(err)
      })
  },
  updatePost({ commit }, update) {
    http.put(`/post/${update._id}`, { ask: update.ask }, {
      headers: { authorization: token }
    })
      .then(({ data }) => {
        console.log('update data', data.data)
        commit('saveUpdate', data.data)
      })
      .catch(err => {
        console.error(err)
      })
  },
  removePost({ commit }, id) {
    http.delete(`/post/${id}`, {
      headers: {
        authorization: token
      }
    })
      .then(({ data }) => {
        console.log('ini yg bakal dihapus', data.data)
        commit('deletePost', data.data)
      })
      .catch(err => {
        console.error(err)
      })
  },
  toggleVote({commit},vote){
    
    http.put(`/post/${vote.id}/togglevote`,{direction:vote.direction},{
      headers:{authorization:token}
    })
    .then(({data}) => {
      console.log('ini actions togglevote',data.data)
      commit('votedConfirm',data.data)
    })
    .catch(err => console.error(err))
  },
  toogleVoteComment({commit}, vote){
    http.put(`post/${vote.id}/comment/${vote.commentId}/togglevote`,{direction:vote.direction},{
      headers:{authorization:token}
    })
    .then(({data}) => {
      console.log('ini direction tooglevote comment',data.data)
      commit('commentVoteConfirm',data.data)
    })
    .catch(err => console.error(err))
  }

}

const mutations = {
  setQuestions(state, payload) {
    console.log('ini payload allquestions di mutations', payload)
    state.questions = payload
  },
  setQuestion(state, payload) {
    console.log('din mutation satu post', payload)
    state.onequestion = payload
  },
  pushComment(state, payload) {
    console.log('push comment di mutations', payload)
    state.onequestion = payload
  },
  pushPost(state, payload) {
    console.log('ini data mutations add', payload)
    state.myQuestions.push(payload)
  },
  setMine(state, payload) {
    console.log('all data my questions mutations', payload)
    state.myQuestions = payload
  },
  saveUpdate(state, payload) {
    console.log('ini data yg bakal di update', payload)
    state.myQuestions = state.myQuestions.map(question => {
      if (question._id == payload._id) {
        return payload
      }
      return article
    })
  },
  deletePost(state, payload) {
    console.log('yg bakal dihapus di mutations', payload)
    const index = state.myQuestions.findIndex((question) => question._id == payload._id)
    state.myQuestions.splice(index, 1)
  },
  votedConfirm(state, payload) {
    console.log('tervoted',payload)
    state.onequestion=payload
  },
  commentVoteConfirm(state,payload) {
    console.log('payload comment vote',payload)
    state.onequestion.comments = state.onequestion.comments.map(voted =>{
      if(voted._id == payload._id){
        return payload
      }
      return voted
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store