<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

router.replace({
  path: '/' + route.params.path
})
</script>
