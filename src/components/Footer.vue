<template>
  <footer class="bg-white w-full border-t border-gray-100">
    <div class="container py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded bg-gradient-to-r from-primary-500 to-secondary-500"></div>
            <span class="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              TechService
            </span>
          </div>
          <p class="text-gray-600">
            Professional IT xizmatlar va kompyuter ta'mirlash. Sifat va ishonch bizning ustuvor vazifamiz.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.995 17.176c-.198.44-.482.794-.85 1.057-.37.262-.802.44-1.297.53-.496.09-1.308.136-2.437.136H8.589c-1.13 0-1.942-.046-2.437-.136-.495-.09-.927-.268-1.297-.53-.368-.263-.652-.616-.85-1.057-.198-.44-.297-.973-.297-1.597V11.42c0-.624.099-1.157.297-1.597.198-.44.482-.794.85-1.057.37-.262.802-.44 1.297-.53.495-.09 1.307-.136 2.437-.136h3.822c1.13 0 1.942.046 2.437.136.495.09.927.268 1.297.53.368.263.652.616.85 1.057.198.44.297.973.297 1.597v4.159c0 .624-.099 1.157-.297 1.597z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-primary-500 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.2-1.8-1.2-1.8-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3 1.1a10.6 10.6 0 015.5 0c2.1-1.4 3-1.1 3-1.1.6 1.7.2 2.9.1 3.2.7.8 1.1 1.9 1.1 3.2 0 4.6-2.8 5.6-5.4 5.9.4.3.7 1 .7 2v3c0 .3.2.7.8.6A12 12 0 0012 0z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Tezkor Havolalar</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-600 hover:text-primary-500 transition-colors">Bosh Sahifa</router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-600 hover:text-primary-500 transition-colors">Biz Haqimizda</router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-600 hover:text-primary-500 transition-colors">Xizmatlar</router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-600 hover:text-primary-500 transition-colors">Bog'lanish</router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Xizmatlar</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Kompyuter Ta'mirlash</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">IT Konsalting</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Ma'lumotlarni Tiklash</a>
            </li>
            <li>
              <a href="#" class="text-gray-600 hover:text-primary-500 transition-colors">Virusdan Tozalash</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Bog'lanish</h3>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <svg class="w-6 h-6 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span class="text-gray-600">
                123 IT Street, Digital City<br/>
                Tashkent, Uzbekistan
              </span>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:info@techservice.uz" class="text-gray-600 hover:text-primary-500 transition-colors">
                info@techservice.uz
              </a>
            </li>
            <li class="flex items-center space-x-3">
              <svg class="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <a href="tel:+998901234567" class="text-gray-600 hover:text-primary-500 transition-colors">
                +998 90 123 45 67
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-100">
        <p class="text-center text-gray-600">
          &copy; {{ new Date().getFullYear() }} TechService. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { name: 'Bosh Sahifa', path: '/' },
  { name: 'Xizmatlar', path: '/services' },
  { name: 'Biz Haqimizda', path: '/about' },
  { name: 'Bog\'lanish', path: '/contact' },
]

const services = [
  'Kompyuter Ta\'mirlash',
  'Viruslardan Tozalash',
  'Ma\'lumotlarni Tiklash',
  'Tarmoq Xizmatlari',
  'Dasturiy Ta\'minot O\'rnatish'
]
</script>
