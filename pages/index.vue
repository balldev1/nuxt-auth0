<template>
  <div>
    <button @click="loginWithRedirect">Login</button>
    <button @click="logout">Logout</button>
    <p v-if="isAuthenticated">Hello, {{ user.name }}!</p>
  </div>
</template>

<script setup>
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
</script>
