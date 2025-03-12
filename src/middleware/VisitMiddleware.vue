<template>
  <div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import api from "@/api/api";

export default {
  setup() {
    const visits = ref(0);

    onMounted(async () => {
      const response = await api.get("/");
      visits.value = response.data.uniqueVisits;
    });

    return { visits };
  },
};
</script>
