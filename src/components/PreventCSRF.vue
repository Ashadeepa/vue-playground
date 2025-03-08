/**
 * Vue 3 CSRF Demo Project
 * This project demonstrates how Cross-Site Request Forgery (CSRF) works in Vue 3 and how to prevent it using CSRF tokens.
 */

<template>
  <div>
    <h1>Vue 3 CSRF Demo</h1>
    <form @submit.prevent="submitForm">
      <input v-model="username" placeholder="Enter username" />
      <button type="submit">Submit</button>
    </form>
    
    <h2>Response</h2>
    <div>{{ responseMessage }}</div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const username = ref('');
    const responseMessage = ref('');
    const csrfToken = ref('');

    // Fetch CSRF token from the backend on component mount
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('/api/csrf-token', { withCredentials: true });
        csrfToken.value = response.data.csrfToken; //can be stored in session
      } catch (error) {
        console.error('Failed to fetch CSRF token:', error);
      }
    };

    // Submit form with CSRF token included
    const submitForm = async () => {
      try {
        const response = await axios.post('/api/submit', { username: username.value }, {
          withCredentials: true, // Ensures cookies (including CSRF tokens) are sent
          headers: {
            'X-CSRF-Token': csrfToken.value // Send CSRF token
          }
        });
        responseMessage.value = response.data.message;
      } catch (error) {
        responseMessage.value = 'Request failed!';
      }
    };

    onMounted(fetchCsrfToken);

    return { username, responseMessage, submitForm };
  }
};
</script>

<style>
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
}
</style>
