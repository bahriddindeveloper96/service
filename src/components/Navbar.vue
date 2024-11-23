<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
            <span class="text-xl font-bold text-white">T</span>
          </div>
          <span class="text-xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            TechService
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="nav-link"
            :class="{ 'text-primary-600': $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Contact Button (Desktop) -->
        <div class="hidden md:block">
          <router-link to="/contact" class="neo-button">
            Bog'lanish
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg 
            v-if="!isMobileMenuOpen"
            class="w-6 h-6 text-gray-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            v-else
            class="w-6 h-6 text-gray-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div 
      v-show="isMobileMenuOpen"
      class="md:hidden bg-white border-t border-gray-100"
    >
      <div class="container mx-auto px-4 py-4 space-y-4">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path"
          class="block py-2 text-gray-600 hover:text-primary-600 transition-colors"
          :class="{ 'text-primary-600': $route.path === item.path }"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
        <router-link 
          to="/contact"
          class="neo-button w-full text-center"
          @click="isMobileMenuOpen = false"
        >
          Bog'lanish
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Bosh Sahifa', path: '/' },
  { name: 'Xizmatlar', path: '/services' },
  { name: 'Biz Haqimizda', path: '/about' },
]
</script>
