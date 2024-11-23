<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-sm">
    <div class="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-secondary-50/50"></div>
    <nav class="container mx-auto px-4 relative">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center transform transition-transform group-hover:scale-105">
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
            class="relative nav-link font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
            :class="{ 'text-primary-600': $route.path === item.path }"
          >
            {{ item.name }}
            <div 
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200"
              :class="{ 'w-full': $route.path === item.path }"
            ></div>
          </router-link>
        </div>

        <!-- Language Selector and Contact Button (Desktop) -->
        <div class="hidden md:flex items-center space-x-4">
          <div class="relative" @click.away="isLangMenuOpen = false">
            <button 
              @click="isLangMenuOpen = !isLangMenuOpen"
              class="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span class="text-sm font-medium text-gray-700">{{ currentLang.label }}</span>
              <svg 
                class="w-4 h-4 text-gray-500 transition-transform duration-200"
                :class="{ 'rotate-180': isLangMenuOpen }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Language Dropdown -->
            <div 
              v-show="isLangMenuOpen"
              class="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
            >
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLang(lang); isLangMenuOpen = false"
                class="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center space-x-2"
                :class="{ 'text-primary-600 bg-primary-50': currentLang.code === lang.code }"
              >
                <span>{{ lang.label }}</span>
                <svg 
                  v-if="currentLang.code === lang.code"
                  class="w-4 h-4 text-primary-600" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
          <router-link 
            to="/contact" 
            class="neo-button bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:from-primary-600 hover:to-secondary-600"
          >
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
      class="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100"
    >
      <div class="container mx-auto px-4 py-4 space-y-4">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path"
          class="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
          :class="{ 'text-primary-600 font-medium': $route.path === item.path }"
          @click="isMobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
        
        <!-- Mobile Language Selector -->
        <div class="py-2 border-t border-gray-100">
          <div class="text-sm text-gray-500 mb-2">Tilni tanlang:</div>
          <div class="grid grid-cols-2 gap-2">
            <button
              v-for="lang in languages"
              :key="lang.code"
              @click="changeLang(lang)"
              class="px-3 py-2 rounded-lg text-sm text-center transition-colors"
              :class="currentLang.code === lang.code 
                ? 'bg-primary-50 text-primary-600 font-medium' 
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'"
            >
              {{ lang.label }}
            </button>
          </div>
        </div>

        <router-link 
          to="/contact"
          class="neo-button w-full text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
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
import { useI18n } from 'vue-i18n'

const isMobileMenuOpen = ref(false)
const isLangMenuOpen = ref(false)

const { locale } = useI18n()

const currentLang = ref({
  code: 'uz',
  label: 'O'zbek'
})

const languages = [
  { code: 'uz', label: 'O'zbek' },
  { code: 'ru', label: 'Русский' },
  { code: 'en', label: 'English' }
]

const changeLang = (lang) => {
  currentLang.value = lang
  locale.value = lang.code
}

const navItems = [
  { name: 'Bosh Sahifa', path: '/' },
  { name: 'Xizmatlar', path: '/services' },
  { name: 'Biz Haqimizda', path: '/about' },
]
</script>

<style scoped>
.neo-button {
  @apply px-5 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md active:scale-[0.98];
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200;
}

.nav-link:hover::after {
  @apply w-full;
}
</style>
