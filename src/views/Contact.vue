<template>
  <div class="pt-16">
    <!-- Header -->
    <section class="bg-gradient-to-r from-primary to-secondary py-20 text-white">
      <div class="container text-center">
        <h1 class="text-4xl font-bold mb-6" data-aos="fade-up">Bog'lanish</h1>
        <p class="text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Bizning professional xizmatlardan foydalanish uchun biz bilan bog'laning
        </p>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-20">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div data-aos="fade-right">
            <h2 class="text-3xl font-bold mb-8">Bog'lanish ma'lumotlari</h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Manzil</h3>
                  <p class="text-gray-600">123 IT Center, Tashkent, Uzbekistan</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Telefon</h3>
                  <p class="text-gray-600">+998 90 123 45 67</p>
                  <p class="text-gray-600">+998 90 987 65 43</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Email</h3>
                  <p class="text-gray-600">info@techservice.uz</p>
                  <p class="text-gray-600">support@techservice.uz</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ClockIcon class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Ish vaqti</h3>
                  <p class="text-gray-600">Dushanba - Shanba: 9:00 - 18:00</p>
                  <p class="text-gray-600">Yakshanba: Dam olish kuni</p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold mb-4">Ijtimoiy tarmoqlar</h3>
              <div class="flex space-x-4">
                <a
                  v-for="social in socials"
                  :key="social.name"
                  :href="social.link"
                  class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  target="_blank"
                >
                  <component :is="social.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div data-aos="fade-left">
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h2 class="text-2xl font-bold mb-6">Xabar yuborish</h2>
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Ismingiz
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Xizmat turi
                  </label>
                  <select
                    v-model="form.service"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  >
                    <option value="">Tanlang</option>
                    <option
                      v-for="service in services"
                      :key="service"
                      :value="service"
                    >
                      {{ service }}
                    </option>
                  </select>
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Xabar
                  </label>
                  <textarea
                    v-model="form.message"
                    rows="4"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full btn bg-primary text-white hover:bg-secondary"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting">Yuborilmoqda...</span>
                  <span v-else>Yuborish</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="py-20 bg-gray-50">
      <div class="container">
        <div class="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.50264869202!2d69.13928276875002!3d41.28277055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1654234159532!5m2!1sen!2s"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/vue/24/outline'

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)

const services = [
  'Kompyuter ta\'mirlash',
  'IT Konsalting',
  'Texnik xizmat',
  'Cloud xizmatlar',
  'Server xizmatlari',
  'IT Xavfsizlik'
]

const socials = [
  {
    name: 'Facebook',
    link: '#',
    icon: 'svg-icon'
  },
  {
    name: 'Twitter',
    link: '#',
    icon: 'svg-icon'
  },
  {
    name: 'Instagram',
    link: '#',
    icon: 'svg-icon'
  },
  {
    name: 'LinkedIn',
    link: '#',
    icon: 'svg-icon'
  }
]

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // Bu yerda form ma'lumotlarini yuborish logikasi bo'ladi
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Xabaringiz muvaffaqiyatli yuborildi!')
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
  } catch (error) {
    alert('Xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
