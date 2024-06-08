<script setup>
import { SignInButton, SignUpButton } from 'vue-clerk'
</script>
<template>
    <div>
        <h1 class="text-white-1">Discover</h1>
        <SignInButton 
            v-slot="{ handler }"
            mode="modal"
        >
            <button @click="handler" class="bg-green-500 text-white-1 px-4 py-2 whitespace-nowrap">
                Sign in
            </button>
        </SignInButton>
    </div>
</template>