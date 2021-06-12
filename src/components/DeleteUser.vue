<template>
  <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert.js';
import UserAlert from './UserAlert.vue';

export default {
  data(){
    return {
      //if you have identical namespaces, the component's values take priority
      alertIsVisible: true
    }
  },
  //components cannot be shared thru mixins 
  components: {
    UserAlert,
  },
  mixins: [alertMixin]
}
</script>