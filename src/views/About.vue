<template>
  <div class="pt-16">
    <!-- Header -->
    <section class="bg-gradient-to-r from-primary to-secondary py-20 text-white">
      <div class="container text-center">
        <h1 class="text-4xl font-bold mb-6" data-aos="fade-up">Biz Haqimizda</h1>
        <p class="text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Professional IT va kompyuter xizmatlarini ko'rsatuvchi kompaniya
        </p>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-20">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="IT Service"
              class="rounded-lg shadow-lg"
            />
          </div>
          <div data-aos="fade-left">
            <h2 class="text-3xl font-bold mb-6">Professional IT Xizmatlar</h2>
            <p class="text-gray-600 mb-6">
              Bizning kompaniya 2020-yildan buyon IT va kompyuter xizmatlari sohasida faoliyat yuritib kelmoqda. 
              Professional jamoamiz mijozlarimizga eng yuqori sifatli xizmatlarni taqdim etish uchun doimo yangi 
              texnologiyalar va yechimlarni o'rganadi va qo'llaydi.
            </p>
            <p class="text-gray-600 mb-8">
              Bizning maqsadimiz - mijozlarimizga eng yaxshi IT yechimlarni taqdim etish va ularning biznesini 
              raqamli transformatsiya jarayonida qo'llab-quvvatlash. Biz har bir mijozga individual yondashuv 
              asosida xizmat ko'rsatamiz.
            </p>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <h3 class="text-4xl font-bold text-primary mb-2">500+</h3>
                <p class="text-gray-600">Mamnun mijozlar</p>
              </div>
              <div>
                <h3 class="text-4xl font-bold text-primary mb-2">1000+</h3>
                <p class="text-gray-600">Bajarilgan loyihalar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4" data-aos="fade-up">
            Bizning Jamoa
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Professional va tajribali mutaxassislardan iborat jamoamiz
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="bg-white p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            :data-aos-delay="member.delay"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p class="text-primary mb-4">{{ member.position }}</p>
            <p class="text-gray-600 mb-6">{{ member.description }}</p>
            <div class="flex justify-center space-x-4">
              <a
                v-for="social in member.socials"
                :key="social.name"
                :href="social.link"
                class="text-gray-400 hover:text-primary transition-colors"
                target="_blank"
              >
                <component
                  :is="social.icon"
                  class="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-20">
      <div class="container">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4" data-aos="fade-up">
            Bizning Qadriyatlar
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Biz ushbu qadriyatlar asosida faoliyat yuritamiz
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="value in values"
            :key="value.title"
            class="p-6 rounded-lg bg-white shadow-lg"
            data-aos="fade-up"
            :data-aos-delay="value.delay"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <component
                :is="value.icon"
                class="w-8 h-8 text-primary"
              />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <div data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4">
            Professional IT xizmatlardan foydalaning
          </h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto">
            Bizning professional jamoamiz sizning IT muammolaringizni hal qilishga tayyor
          </p>
          <router-link
            to="/contact"
            class="btn bg-white text-primary hover:bg-gray-100"
          >
            Bog'lanish
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  HeartIcon,
  LightBulbIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/vue/24/outline'

const team = [
  {
    name: 'John Smith',
    position: 'IT Director',
    description: '10+ yillik tajribaga ega IT mutaxassis',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    socials: [
      {
        name: 'LinkedIn',
        link: '#',
        icon: 'svg-icon'
      }
    ],
    delay: 0
  },
  {
    name: 'Sarah Johnson',
    position: 'Technical Lead',
    description: 'Software va hardware bo\'yicha ekspert',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    socials: [
      {
        name: 'LinkedIn',
        link: '#',
        icon: 'svg-icon'
      }
    ],
    delay: 100
  },
  {
    name: 'Michael Brown',
    position: 'Network Engineer',
    description: 'Tarmoq va server bo\'yicha mutaxassis',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    socials: [
      {
        name: 'LinkedIn',
        link: '#',
        icon: 'svg-icon'
      }
    ],
    delay: 200
  },
  {
    name: 'Emily Davis',
    position: 'Support Specialist',
    description: 'Mijozlar bilan ishlash bo\'yicha mutaxassis',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    socials: [
      {
        name: 'LinkedIn',
        link: '#',
        icon: 'svg-icon'
      }
    ],
    delay: 300
  }
]

const values = [
  {
    icon: HeartIcon,
    title: 'Mijozga e\'tibor',
    description: 'Har bir mijozning ehtiyojlarini tushunish va eng yaxshi yechimlarni taklif qilish',
    delay: 0
  },
  {
    icon: LightBulbIcon,
    title: 'Innovatsiya',
    description: 'Eng so\'nggi texnologiyalarni o\'rganish va qo\'llash orqali rivojlanish',
    delay: 100
  },
  {
    icon: UserGroupIcon,
    title: 'Jamoaviy ish',
    description: 'Professional jamoa bilan hamkorlikda eng yaxshi natijalarga erishish',
    delay: 200
  },
  {
    icon: ShieldCheckIcon,
    title: 'Ishonchlilik',
    description: 'Xavfsiz va ishonchli xizmatlarni taqdim etish',
    delay: 300
  },
  {
    icon: SparklesIcon,
    title: 'Sifat',
    description: 'Har bir ishni eng yuqori sifat standartlari asosida bajarish',
    delay: 400
  },
  {
    icon: StarIcon,
    title: 'Natijaga intilish',
    description: 'Mijozlar kutgan natijadan ham yuqori natijalarni taqdim etish',
    delay: 500
  }
]
</script>
