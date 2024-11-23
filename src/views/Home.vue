<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div class="absolute -inset-[10px] bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-3xl filter blur-3xl transform rotate-12"></div>
      </div>

      <div class="container relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left" data-aos="fade-right">
            <h1 class="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Kelajak Texnologiyalari Bilan Tanishing
            </h1>
            <p class="text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Zamonaviy IT yechimlar va professional kompyuter xizmatlari. Bizning mutaxassislar sizning raqamli kelajagingizni yaratishga yordam beradi.
            </p>
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
              <router-link
                to="/services"
                class="btn bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1 transition-all"
              >
                Xizmatlarni Ko'rish
              </router-link>
              <router-link
                to="/contact"
                class="btn border-2 border-primary text-primary hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all"
              >
                Bog'lanish
              </router-link>
            </div>
          </div>
          <div class="relative" data-aos="fade-left">
            <div class="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="IT Services"
                class="rounded-2xl shadow-2xl"
              />
              <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            <!-- Floating Elements -->
            <div class="absolute top-0 -right-4 w-24 h-24 bg-secondary/20 rounded-full filter blur-xl animate-pulse"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full filter blur-xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      <div class="container relative">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bizning Xizmatlar
          </h2>
          <p class="text-xl text-gray-700 max-w-2xl mx-auto">
            Biznesingiz uchun eng optimal IT yechimlarni tanlash va joriy qilishda professional maslahatlar.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="service.title"
            class="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
          >
            <!-- Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Icon -->
            <div class="relative">
              <div class="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <component
                  :is="service.icon"
                  class="w-8 h-8 text-white"
                />
              </div>
            </div>

            <!-- Content -->
            <div class="relative">
              <h3 class="text-xl font-bold mb-4 text-gray-900">{{ service.title }}</h3>
              <p class="text-gray-700 mb-6">{{ service.description }}</p>
              <router-link
                :to="service.link"
                class="inline-flex items-center text-primary hover:text-secondary transition-colors group"
              >
                Batafsil
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div class="container">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bizning Afzalliklarimiz
          </h2>
          <p class="text-xl text-gray-700 max-w-2xl mx-auto">
            Biznesingiz uchun eng optimal IT yechimlarni tanlash va joriy qilishda professional maslahatlar.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            class="relative bg-white p-8 rounded-2xl shadow-lg"
            :data-aos="index % 2 === 0 ? 'fade-up' : 'fade-down'"
            :data-aos-delay="index * 100"
          >
            <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full filter blur-xl transform -translate-y-1/2 translate-x-1/2"></div>
            <div class="relative">
              <component
                :is="feature.icon"
                class="w-12 h-12 text-primary mb-6"
              />
              <h3 class="text-xl font-bold mb-4 text-gray-900">{{ feature.title }}</h3>
              <p class="text-gray-700">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
      <div class="container relative">
        <div class="max-w-3xl mx-auto text-center text-white" data-aos="zoom-in">
          <h2 class="text-4xl font-bold mb-6">Kelajakka Tayyor Bo'ling</h2>
          <p class="text-xl mb-8 opacity-90">Zamonaviy texnologiyalar bilan tanishing va biznesingizni yangi bosqichga olib chiqing</p>
          <router-link
            to="/contact"
            class="btn bg-white text-primary hover:bg-gray-100 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
          >
            Biz Bilan Bog'laning
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  ComputerDesktopIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'

const services = [
  {
    icon: ComputerDesktopIcon,
    title: 'Kompyuter Ta\'mirlash',
    description: 'Professional diagnostika va ta\'mirlash xizmatlari. Tezkor va sifatli xizmat kafolati bilan.',
    link: '/services'
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Web Dasturlash',
    description: 'Zamonaviy va responsive web dasturlar yaratish. React, Vue.js va boshqa texnologiyalarda professional yechimlar.',
    link: '/services'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Ma\'lumotlar Xavfsizligi',
    description: 'Kompyuter va tarmoq xavfsizligini ta\'minlash, viruslardan himoya qilish va ma\'lumotlarni tiklash xizmatlari.',
    link: '/services'
  },
  {
    icon: CogIcon,
    title: 'Texnik Yordam',
    description: '24/7 texnik yordam va muammolarni tezkor hal qilish',
    link: '/services'
  },
  {
    icon: ChartBarIcon,
    title: 'Monitoring',
    description: 'Tizimlar ishlashini doimiy monitoring qilish',
    link: '/services'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Ilovalar',
    description: 'iOS va Android platformalari uchun mobil ilovalar ishlab chiqish. Cross-platform yechimlar va native dasturlash.',
    link: '/services'
  }
]

const features = [
  {
    icon: ClockIcon,
    title: '24/7 Qo\'llab-quvvatlash',
    description: 'Professional jamoamiz 24/7 rejimda sizning xizmatingizda'
  },
  {
    icon: UserGroupIcon,
    title: 'Professional Jamoa',
    description: 'Tajribali va malakali mutaxassislardan iborat jamoa'
  },
  {
    icon: SparklesIcon,
    title: 'Zamonaviy Yechimlar',
    description: 'Eng so\'nggi texnologiyalar asosidagi yechimlar'
  }
]
</script>

<style>
.bg-grid-pattern {
  background-size: 30px 30px;
  background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
}
</style>
