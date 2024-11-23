<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div class="absolute -inset-[10px] bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-3xl filter blur-3xl transform rotate-12"></div>
      </div>

      <div class="container relative z-10">
        <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h1 class="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Professional IT Xizmatlar
          </h1>
          <p class="text-xl text-gray-700 mb-8">
            Zamonaviy texnologiyalar va professional yondashuvlar bilan sizning IT muammolaringizni hal qilamiz
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="#services" class="btn bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1 transition-all">
              Xizmatlarni Ko'rish
            </a>
            <router-link to="/contact" class="btn border-2 border-primary text-primary hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all">
              Bog'lanish
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section id="services" class="py-20 relative overflow-hidden">
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
                <component :is="service.icon" class="w-8 h-8 text-white" />
              </div>
            </div>

            <!-- Content -->
            <div class="relative">
              <h3 class="text-xl font-bold mb-4 text-gray-900">{{ service.title }}</h3>
              <p class="text-gray-700 mb-6">{{ service.description }}</p>
              <ul class="space-y-3 mb-6">
                <li 
                  v-for="(feature, featureIndex) in service.features" 
                  :key="feature"
                  class="flex items-center text-gray-700 group-hover:translate-x-1 transition-transform"
                  :style="{ transitionDelay: featureIndex * 50 + 'ms' }"
                >
                  <svg class="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ feature }}
                </li>
              </ul>
              <button class="btn w-full bg-gradient-to-r from-primary/10 to-secondary/10 text-gray-900 hover:from-primary hover:to-secondary hover:text-white transition-all duration-300">
                Buyurtma Berish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div class="container">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bizning Ish Jarayonimiz
          </h2>
          <p class="text-xl text-gray-700 max-w-2xl mx-auto">
            Professional va samarali xizmat ko'rsatish jarayonimiz
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="(step, index) in process"
            :key="step.title"
            class="relative"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
          >
            <!-- Step Card -->
            <div class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
              <!-- Step Number -->
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center text-xl font-bold mb-4">
                {{ index + 1 }}
              </div>
              
              <!-- Content -->
              <h3 class="text-xl font-bold mb-3 text-gray-900">{{ step.title }}</h3>
              <p class="text-gray-700">{{ step.description }}</p>
            </div>

            <!-- Connector Line (except for last item) -->
            <div
              v-if="index < process.length - 1"
              class="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20">
      <div class="container">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ko'p So'raladigan Savollar
          </h2>
          <p class="text-xl text-gray-700 max-w-2xl mx-auto">
            Mijozlarimizning eng ko'p beradigan savollariga javoblar
          </p>
        </div>

        <div class="max-w-3xl mx-auto">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mb-4 overflow-hidden"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <button
              class="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              @click="faq.isOpen = !faq.isOpen"
            >
              <span class="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                {{ faq.question }}
              </span>
              <div class="relative flex-shrink-0 ml-4">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center transition-transform duration-300"
                  :class="{ 'rotate-180': faq.isOpen }">
                  <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>
            <div
              v-show="faq.isOpen"
              class="p-6 pt-0 text-gray-700 bg-gradient-to-br from-primary/5 to-secondary/5"
            >
              {{ faq.answer }}
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
          <h2 class="text-4xl font-bold mb-6">Bizning Xizmatlardan Foydalaning</h2>
          <p class="text-xl mb-8 opacity-90">
            Professional IT xizmatlarimiz haqida ko'proq ma'lumot olish uchun biz bilan bog'laning
          </p>
          <router-link
            to="/contact"
            class="btn bg-white text-primary hover:bg-gray-100 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
          >
            Bog'lanish
          </router-link>
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

<style scoped>


.bg-grid-pattern {
  background-size: 30px 30px;
  background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
}
</style>
