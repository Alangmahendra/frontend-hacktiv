<template>
  <b-navbar toggleable="md" type="dark" variant="warning">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand @click="toHome" class="pointer">Overflow</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item @click="profile">Profile</b-dropdown-item>
        <b-dropdown-item @click="signout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  methods:{
    profile(){
      if(localStorage.getItem('token')){
        this.$router.push({name : 'Mypage'})
      }
      else{
        this.$router.push({name : 'Login'})
      }
    },
    signout(){
      localStorage.clear()
      this.$router.push({name : 'Login'})
    },
    toHome(){
      this.$router.push({name : 'Home'})
    }
  }
}
</script>

<style>
  .pointer{
    cursor: pointer;
  }
</style>
