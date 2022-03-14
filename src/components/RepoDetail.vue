<script>
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { getRepoById } from '../api/repos';

export default defineComponent({
  name: 'RepoDetail',
  props: ['id'],

  setup(props) {
    const state = reactive({
      repo: null,
    });

    const router = useRouter();

    onMounted(async () => {
      console.log(props.id);
      state.repo = await getRepoById(props.id);
    });

    const backHandler = () => {
      router.push('/');
    };

    return {
      state,
      backHandler,
    };
  },
});
</script>

<template>
  <div class="flex flex-row">
    <div class="p-2">
      <button
        class="text-teal-900 hover:text-teal-400"
        @click.prevent="backHandler"
      >
        Back
      </button>
    </div>
    <div class="p-2">
      <div v-if="state.repo" class="flex flex-col">
        <div v-for="(item, key, index) in state.repo" :key="index">
          <span class="font-bold text-teal-800 mr-2">{{ key }}:</span>
          <span class="text-teal-800">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
