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
<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s, transform 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(100%);
}
</style>