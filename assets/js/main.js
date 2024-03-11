const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        heading: 'Heading'
      }
    }
  }).mount('#app')