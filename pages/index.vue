<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        userclient
      </h1>
      <h2 class="subtitle">
        Users
      </h2>
      <div class="links" v-if="users.length > 0">
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users">
            <nuxt-link :to="'/' + user.username">
              {{user.email}}
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div v-else>
        Pending...
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import {mapState, mapActions} from 'vuex';

export default {
  computed: mapState({
    users: state => state.users.users
  }),
  methods: {
    ...mapActions({
      findAllUsers: 'users/findAllUsers'
    })
  },
  components: {
    Logo
  },
  created(){
    this.findAllUsers();
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
