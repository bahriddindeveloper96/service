<template>
  <div class="pt-16">
    <!-- Header -->
    <section class="bg-gradient-to-r from-primary to-secondary py-20">
      <div class="container text-center">
        <h1 class="text-4xl font-bold mb-6 text-gray-900" data-aos="fade-up">{{ $t('about.title') }}</h1>
        <p class="text-xl max-w-2xl mx-auto text-gray-900" data-aos="fade-up" data-aos-delay="100">
          {{ $t('about.subtitle') }}
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
            <h2 class="text-3xl font-bold mb-6 text-gray-900">{{ $t('about.title') }}</h2>
            <p class="text-gray-800 mb-6">
              {{ $t('about.description1') }}
            </p>

            <p class="text-gray-800 mb-8">
              {{ $t('about.description2') }}
            </p>
            <div class="grid grid-cols-2 gap-8">
              <div>
                <h3 class="text-4xl font-bold text-primary mb-2">500+</h3>
                <p class="text-gray-800">{{ $t('about.stats.clients') }}</p>
              </div>
              <div>
                <h3 class="text-4xl font-bold text-primary mb-2">1000+</h3>
                <p class="text-gray-800">{{ $t('about.stats.projects') }}</p>
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
          <h2 class="text-3xl font-bold mb-4 text-gray-900" data-aos="fade-up">
            {{ $t('about.team.title') }}
          </h2>
          <p class="text-gray-800 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {{ $t('about.team.subtitle') }}
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
            <p class="text-gray-800 mb-6">{{ member.description }}</p>
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
          <h2 class="text-3xl font-bold mb-4 text-gray-900" data-aos="fade-up">
            {{ $t('about.values.title') }}
          </h2>
          <p class="text-gray-800 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {{ $t('about.values.subtitle') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="value in values"
            :key="value.key"
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
            <h3 class="text-xl font-semibold mb-4 text-gray-900">{{ $t(`about.values.items.${value.key}.title`) }}</h3>
            <p class="text-gray-800">{{ $t(`about.values.items.${value.key}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-primary">
      <div class="container text-center">
        <div data-aos="fade-up">
          <h2 class="text-3xl font-bold mb-4 text-gray-900">
            {{ $t('about.cta.title') }}
          </h2>
          <p class="text-lg mb-8 max-w-2xl mx-auto text-gray-800">
            {{ $t('about.cta.subtitle') }}
          </p>
          <router-link
            to="/contact"
            class="btn bg-white text-primary hover:bg-gray-100 shadow-lg"
          >
            {{ $t('about.cta.button') }}
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
    key: 'clientFocus',
    delay: 0
  },
  {
    icon: LightBulbIcon,
    key: 'innovation',
    delay: 100
  },
  {
    icon: UserGroupIcon,
    key: 'teamwork',
    delay: 200
  },
  {
    icon: ShieldCheckIcon,
    key: 'reliability',
    delay: 300
  },
  {
    icon: SparklesIcon,
    key: 'quality',
    delay: 400
  },
  {
    icon: StarIcon,
    key: 'results',
    delay: 500
  }
]
</script>
