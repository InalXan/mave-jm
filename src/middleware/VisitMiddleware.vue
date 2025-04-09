<template>
  <div></div>
</template>

<script>
import { ref, onMounted } from 'vue'
import useVisit from '@/api/useVisit'

export default {
  setup() {
    const visits = ref(0)

    onMounted(async () => {
      const response = await useVisit.get('/')
      visits.value = response.data.uniqueVisits
    })

    return { visits }
  },
}
</script>
