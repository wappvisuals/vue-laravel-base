<template>
    <div class="flex justify-center min-h-screen bg-gray-100">  
        <div class="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
            <!-- header -->  
            <div class="text-center my-6">
                <h1 class="text-3xl font-semibold text-gray-700">Sign in</h1>
                <p class="text-gray-500">Sign in to access your account</p>
            </div>
            <!-- sign-in -->
            <div class="m-6">
            <form class="mb-4">
                <div class="mb-6">
                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                <input type="email" name="email" id="email" placeholder="Your email address" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div class="mb-6">
                <div class="flex justify-between mb-2">
                    <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                    <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                </div>
                <input type="password" name="password" id="password" placeholder="Your password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                </div>
                <div class="mb-6">
                <button type="button" class="w-full px-3 py-3 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Login</button>
                </div>
            </form>
            </div>
        </div>
        </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
