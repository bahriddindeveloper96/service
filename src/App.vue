<template>
  <div class="min-h-screen bg-white">
    <nav class="bg-white shadow-lg fixed w-full top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="text-2xl font-bold text-primary">
            TechService
          </router-link>

          <div class="hidden md:flex items-center space-x-8">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-gray-700 hover:text-primary transition-colors"
            >
              {{ $t(`nav.${item.name}`) }}
            </router-link>
            <LanguageSwitcher />
          </div>

          <!-- Mobile menu button -->
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden text-gray-700 hover:text-primary"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-white border-t"
      >
        <div class="container mx-auto px-4 py-2">
          <div class="flex flex-col space-y-2">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-gray-700 hover:text-primary py-2 transition-colors"
              @click="isMenuOpen = false"
            >
              {{ $t(`nav.${item.name}`) }}
            </router-link>
            <div class="py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="pt-16">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const isMenuOpen = ref(false)

const navItems = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'portfolio', path: '/portfolio' },
  { name: 'contact', path: '/contact' }
]
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
