<script>
import { defineComponent, reactive } from 'vue';
import RepoDetail from '../components/RepoDetail.vue';

export default defineComponent({
  name: 'RepoDetailView',
  components: { RepoDetail },
  props: ['id'],
  setup(props) {},
});
</script>

<template>
  <div class="flex flex-column">
    <RepoDetail :id="id" />
  </div>
</template>
