<template>
  <section class="container">
    <div>
      <h4 v-if="user.email">
        {{user.email}} | {{user.username}}
      </h4>
    </div>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
    </div>

  </section>
</template>

<script>

  import {mapState, mapActions} from 'vuex'

  export default {
    computed: mapState({
      user: state => state.users.selectedUser
    }),
    methods: {
      ...mapActions({
        findByUsername: 'users/findByUsername'
      })
    },
    created(){
      this.findByUsername(this.$route.params.username);
    }
  }
</script>

<style>
  .container{
    display: block;
  }
</style>
