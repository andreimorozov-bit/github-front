<script>
import { defineComponent, onMounted, reactive } from 'vue';
import { getRepos } from '../api/repos';

export default defineComponent({
  name: 'Filters',
  setup(_, context) {
    const state = reactive({
      search: {
        name: '',
      },
    });

    const searchHandler = () => {
      context.emit('update-search-filters', state.search);
    };

    const resetHandler = () => {
      state.search.name = '';
      context.emit('update-search-filters', state.search);
    };

    return {
      state,
      searchHandler,
      resetHandler,
    };
  },
});
</script>

<template>
  <div class="flex flex-col p-2">
    <div class="mb-3">
      <div>
        <label class="block">Name or Id</label>
      </div>
      <div>
        <input
          type="text"
          id="name"
          class="block border border-teal-400"
          v-model="state.search.name"
        />
      </div>
    </div>
    <div class="mb-3">
      <button
        class="p-1 mr-2 text-teal-900 hover:text-teal-600"
        @click.prevent="searchHandler"
      >
        Search
      </button>
      <button
        class="p-1 text-teal-900 hover:text-teal-600"
        @click.prevent="resetHandler"
      >
        Reset
      </button>
    </div>
  </div>
</template>
