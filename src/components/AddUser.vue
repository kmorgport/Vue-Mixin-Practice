<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
  </section>
</template>

<script>
// import alertMixin from '../mixins/alert.js';
import { ref } from 'vue'
import UserAlert from './UserAlert.vue';
import useAlert from '../hooks/alert.js';

export default {
  components: {
    UserAlert,
  },
//  mixins: [alertMixin]
  setup(){
    const alertTitle = ref('Delete User?')
    //pass an argument to the hook parameter to change the const where the argument is applied
    const {alertIsVisible, showAlert, hideAlert} = useAlert(true);

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
      alertTitle
    }
  }
};
</script>