<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <h1 class="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {{ $t('portfolio.title') }}
          </h1>
          <p class="text-xl text-gray-700 max-w-2xl mx-auto">
            {{ $t('portfolio.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-20">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="group relative overflow-hidden rounded-2xl shadow-lg"
            :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
            :data-aos-delay="index * 100"
          >
            <!-- Project Image -->
            <div class="relative aspect-video overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Project Info -->
            <div class="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
              <p class="text-white/90 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm rounded-full text-white"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-br from-primary to-secondary">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center text-white" data-aos="zoom-in">
          <h2 class="text-4xl font-bold mb-6">{{ $t('portfolio.cta.title') }}</h2>
          <p class="text-xl mb-8 opacity-90">{{ $t('portfolio.cta.subtitle') }}</p>
          <router-link
            to="/contact"
            class="btn bg-white text-primary hover:bg-gray-100 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
          >
            {{ $t('portfolio.cta.button') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Zamonaviy onlayn do\'kon platformasi',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    technologies: ['Vue.js', 'Tailwind CSS', 'Node.js']
  },
  {
    id: 2,
    title: 'CRM System',
    description: 'Mijozlar bilan munosabatlarni boshqarish tizimi',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    technologies: ['React', 'Material UI', 'MongoDB']
  },
  {
    id: 3,
    title: 'Mobile App',
    description: 'iOS va Android uchun mobil ilova',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React Native', 'Firebase']
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Real-time analitika dashboardi',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
    technologies: ['Vue.js', 'D3.js', 'Express']
  },
  {
    id: 5,
    title: 'Education Platform',
    description: 'Onlayn ta\'lim platformasi',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    technologies: ['Next.js', 'Tailwind CSS', 'PostgreSQL']
  },
  {
    id: 6,
    title: 'Logistics System',
    description: 'Transport logistikasi tizimi',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['Vue.js', 'Node.js', 'MongoDB']
  }
]
</script>
