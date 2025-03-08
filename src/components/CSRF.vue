/**
 * Vue 3 CSRF Demo Project
 * This project demonstrates how Cross-Site Request Forgery (CSRF) works in Vue 3 and how to prevent it.
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
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const username = ref('');
    const responseMessage = ref('');

    const submitForm = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getData', {
          withCredentials: true // Ensures cookies (including CSRF tokens) are sent
        });
        responseMessage.value = response.data.message;
      } catch (error) {
        responseMessage.value = 'Request failed!';
      }
    };

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
