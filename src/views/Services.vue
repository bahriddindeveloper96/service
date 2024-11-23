<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden bg-gray-50">
      <div class="absolute inset-0 bg-gradient-radial from-primary-50 via-transparent to-transparent"></div>
      <div class="container relative">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="glow-text text-5xl sm:text-6xl mb-6">Professional IT Xizmatlar</h1>
          <p class="text-xl text-gray-600">
            Zamonaviy texnologiyalar va professional yondashuvlar bilan sizning IT muammolaringizni hal qilamiz
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="service-card group" data-aos="fade-up">
            <div class="feature-icon">
              <component :is="service.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-2xl font-display font-semibold mb-4 text-gray-900">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            <ul class="space-y-3 mb-6">
              <li v-for="feature in service.features" :key="feature" class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>
            <button class="neo-button w-full">
              Buyurtma Berish
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 relative overflow-hidden bg-gray-50">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50 to-transparent"></div>
      <div class="container relative">
        <h2 class="glow-text text-4xl sm:text-5xl text-center mb-16">Bizning Ish Jarayonimiz</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in process" :key="step.title" class="service-card p-8" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6">
              <span class="text-xl font-bold text-white">{{ index + 1 }}</span>
            </div>
            <h3 class="text-xl font-display font-semibold mb-4 text-gray-900">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20">
      <div class="container">
        <h2 class="glow-text text-4xl sm:text-5xl text-center mb-16">Ko'p So'raladigan Savollar</h2>
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="service-card mb-4 overflow-hidden" data-aos="fade-up">
            <button 
              class="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              @click="faq.isOpen = !faq.isOpen"
            >
              <span class="text-lg font-display font-semibold text-gray-900">{{ faq.question }}</span>
              <svg 
                class="w-6 h-6 transform transition-transform text-gray-500" 
                :class="{ 'rotate-180': faq.isOpen }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-show="faq.isOpen" 
              class="p-6 pt-0 text-gray-600"
            >
              {{ faq.answer }}
            </div>
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
            <h2 class="text-4xl sm:text-5xl font-display font-bold mb-6 text-gray-900">Bizning Xizmatlardan Foydalaning</h2>
            <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional IT xizmatlarimiz haqida ko'proq ma'lumot olish uchun biz bilan bog'laning
            </p>
            <router-link to="/contact" class="neo-button">
              Bog'lanish
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  ComputerDesktopIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  ServerIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon
} from '@heroicons/vue/24/outline'

const services = [
  {
    icon: ComputerDesktopIcon,
    title: 'Kompyuter Ta\'mirlash',
    description: 'Professional diagnostika va ta\'mirlash xizmatlari',
    features: [
      'Tezkor diagnostika',
      'Original ehtiyot qismlar',
      'Kafolat bilan ta\'mirlash',
      'Ma\'lumotlarni saqlash',
      'Tozalash va profilaktika'
    ]
  },
  {
    icon: ServerIcon,
    title: 'IT Infratuzilma',
    description: 'Biznes uchun IT infratuzilmani yaratish va qo\'llab-quvvatlash',
    features: [
      'Tarmoq sozlash',
      'Server o\'rnatish',
      'Ma\'lumotlar bazasi',
      'Xavfsizlik tizimi',
      'Texnik qo\'llab-quvvatlash'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'Xavfsizlik',
    description: 'Kompyuter va tarmoq xavfsizligini ta\'minlash',
    features: [
      'Antivirus himoyasi',
      'Firewall sozlash',
      'Monitoring tizimi',
      'Rezerv nusxalash',
      'Xavfsizlik auditi'
    ]
  },
  {
    icon: CpuChipIcon,
    title: 'Modernizatsiya',
    description: 'Kompyuter tizimlarini yangilash va modernizatsiya qilish',
    features: [
      'Qismlarni yangilash',
      'Tizimni optimallashtirish',
      'Unumdorlikni oshirish',
      'Yangi texnologiyalar',
      'Professional maslahat'
    ]
  },
  {
    icon: CloudArrowUpIcon,
    title: 'Cloud Xizmatlar',
    description: 'Cloud texnologiyalarni joriy qilish va qo\'llab-quvvatlash',
    features: [
      'Cloud migratsiya',
      'Cloud arxitektura',
      'Ma\'lumotlar sinxronizatsiyasi',
      'Cloud xavfsizlik',
      'Masshtablash'
    ]
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Texnik Yordam',
    description: '24/7 texnik yordam va qo\'llab-quvvatlash xizmatlari',
    features: [
      'Tezkor javob',
      'Masofaviy yordam',
      'Konsultatsiya',
      'Muammolarni hal qilish',
      'Profilaktika'
    ]
  }
]

const process = [
  {
    title: 'Murojaat',
    description: 'Biz bilan bog\'lanish va muammoni tavsiflash'
  },
  {
    title: 'Diagnostika',
    description: 'Professional diagnostika va narx taklifi'
  },
  {
    title: 'Yechim',
    description: 'Muammoni hal qilish va testlash'
  },
  {
    title: 'Natija',
    description: 'Natijani tekshirish va kafolat berish'
  }
]

const faqs = ref([
  {
    question: 'Xizmat ko\'rsatish muddati qancha?',
    answer: 'Odatda, oddiy muammolar 1-2 soat ichida, murakkab muammolar 1-3 kun ichida hal qilinadi. Aniq muddat muammo murakkabligiga bog\'liq.',
    isOpen: false
  },
  {
    question: 'Xizmatlar kafolati bormi?',
    answer: 'Ha, barcha xizmatlarimiz 1 oydan 1 yilgacha kafolat bilan ta\'minlanadi. Kafolat muddati xizmat turiga qarab belgilanadi.',
    isOpen: false
  },
  {
    question: 'Masofaviy yordam ko\'rsatasizlarmi?',
    answer: 'Ha, ko\'pgina muammolarni masofadan turib hal qilishimiz mumkin. Bu tezkor va qulay yechim hisoblanadi.',
    isOpen: false
  },
  {
    question: 'To\'lov usullari qanday?',
    answer: 'Naqd pul, bank kartasi va pul o\'tkazish orqali to\'lovni amalga oshirish mumkin. Korporativ mijozlar uchun shartnoma asosida ishlash ham mavjud.',
    isOpen: false
  }
])
</script>
