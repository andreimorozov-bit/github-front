<script>
import { defineComponent, onMounted, reactive } from 'vue';
import { getRepos } from '../api/repos';
import Filters from './Filters.vue';
import RepoListTable from './RepoListTable.vue';

export default defineComponent({
  name: 'RepoList',
  components: { Filters, RepoListTable },

  setup() {
    const state = reactive({
      repos: [],
      filters: {
        name: '',
      },
    });

    onMounted(async () => {
      state.repos = await getRepos(state.filters.name);
    });

    const updateFilters = async (filters) => {
      console.log(filters);
      state.filters.name = filters.name;
      state.repos = await getRepos(state.filters.name);
      console.log(state.repos);
    };

    return {
      state,
      updateFilters,
    };
  },
});
</script>

<template>
  <div class="flex flex-column">
    <Filters @update-search-filters="updateFilters" />
    <RepoListTable :repos="state.repos" />
  </div>
</template>
