<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-20 sm:py-32">
      <div class="absolute inset-0 bg-gradient-radial from-primary-50 via-transparent to-transparent"></div>
      <div class="container relative">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <h1 class="glow-text text-5xl sm:text-6xl lg:text-7xl leading-tight">
              Kelajak Texnologiyalari Bilan Tanishing
            </h1>
            <p class="text-xl text-gray-600">
              Zamonaviy IT yechimlar va professional kompyuter xizmatlari. Bizning mutaxassislar sizning raqamli kelajagingizni yaratishga yordam beradi.
            </p>
            <div class="flex gap-4">
              <router-link to="/services" class="neo-button">
                Xizmatlarni Ko'rish
              </router-link>
              <router-link to="/contact" class="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-700 transition-colors">
                Bog'lanish
              </router-link>
            </div>
          </div>
          <div class="relative">
            <div class="floating-element">
              <img src="/hero-image.svg" alt="Tech illustration" class="w-full" />
            </div>
            <!-- Decorative elements -->
            <div class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <h2 class="glow-text text-4xl sm:text-5xl text-center mb-16">Bizning Afzalliklarimiz</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="service-card group" data-aos="fade-up">
            <div class="feature-icon">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-display font-semibold mb-4 text-gray-900">Zamonaviy Texnologiyalar</h3>
            <p class="text-gray-600">Eng so'nggi texnologiyalar va innovatsion yechimlar bilan ishlash</p>
          </div>
          
          <div class="service-card group" data-aos="fade-up" data-aos-delay="100">
            <div class="feature-icon">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-2xl font-display font-semibold mb-4 text-gray-900">Moslashuvchan Yechimlar</h3>
            <p class="text-gray-600">Har bir mijoz uchun individual yondashuv va optimal yechimlar</p>
          </div>
          
          <div class="service-card group" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-icon">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-display font-semibold mb-4 text-gray-900">Tezkor Xizmat</h3>
            <p class="text-gray-600">24/7 texnik yordam va tezkor muammolarni hal qilish</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50 to-transparent"></div>
      <div class="container relative">
        <h2 class="glow-text text-4xl sm:text-5xl text-center mb-16">Bizning Xizmatlar</h2>
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="service-card group" data-aos="fade-right">
            <h3 class="text-2xl font-display font-semibold mb-4 text-gray-900">Kompyuter Ta'mirlash</h3>
            <p class="text-gray-600 mb-6">Professional diagnostika va ta'mirlash xizmatlari. Tezkor va sifatli xizmat kafolati bilan.</p>
            <router-link to="/services" class="inline-flex items-center text-primary-600 group-hover:text-primary-700">
              Batafsil
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
          
          <div class="service-card group" data-aos="fade-left">
            <h3 class="text-2xl font-display font-semibold mb-4 text-gray-900">IT Konsalting</h3>
            <p class="text-gray-600 mb-6">Biznesingiz uchun eng optimal IT yechimlarni tanlash va joriy qilishda professional maslahatlar.</p>
            <router-link to="/services" class="inline-flex items-center text-primary-600 group-hover:text-primary-700">
              Batafsil
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="service-card p-12 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-primary-50 via-secondary-50 to-accent-50 opacity-50"></div>
          <div class="relative">
            <h2 class="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">Kelajakka Tayyor Bo'ling</h2>
            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Zamonaviy texnologiyalar bilan tanishing va biznesingizni yangi bosqichga olib chiqing
            </p>
            <router-link to="/contact" class="neo-button">
              Biz Bilan Bog'laning
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ComputerDesktopIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon
} from '@heroicons/vue/24/outline'

const services = [
  {
    icon: ComputerDesktopIcon,
    title: 'Kompyuter Ta\'mirlash',
    description: 'Professional diagnostika va ta\'mirlash xizmatlari. Tezkor va sifatli xizmat kafolati bilan.',
    link: '/services',
    delay: 0
  },
  {
    icon: CpuChipIcon,
    title: 'IT Konsalting',
    description: 'Biznesingiz uchun eng optimal IT yechimlarni tanlash va joriy qilishda professional maslahatlar.',
    link: '/services',
    delay: 100
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Texnik Xizmat',
    description: 'Muntazam texnik xizmat ko\'rsatish va profilaktika ishlari',
    link: '/services',
    delay: 200
  }
]

const features = [
  {
    icon: ShieldCheckIcon,
    title: 'Ishonchli',
    description: 'Professional va sifatli xizmat kafolatini taqdim etamiz',
    delay: 0
  },
  {
    icon: ClockIcon,
    title: 'Tezkor',
    description: '24/7 texnik yordam va tezkor muammolarni hal qilish',
    delay: 100
  },
  {
    icon: UserGroupIcon,
    title: 'Professional',
    description: 'Tajribali mutaxassislar jamoasi',
    delay: 200
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Hamyonbop',
    description: 'Raqobatbardosh va shaffof narxlar',
    delay: 300
  }
]
</script>
