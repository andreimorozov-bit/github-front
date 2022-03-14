<script>
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'RepoListTable',
  props: ['repos'],
  setup(props) {
    const router = useRouter();

    const repoDetailHandler = (id) => {
      router.push(`/repos/${id}`);
    };

    return {
      repoDetailHandler,
    };
  },
});
</script>

<template>
  <div class="flex flex-column p-2">
    <div v-if="repos.length > 0">
      <table class="table-fixed border-collapse border border-teal-400">
        <thead>
          <tr>
            <th class="border border-teal-400 w-28">Id</th>
            <th class="border border-teal-400 w-52">Name</th>
            <th class="border border-teal-400 w-44">Author</th>
            <th class="border border-teal-400 w-20">Stars</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="repo in repos"
            :key="repo.id"
            @click.prevent="repoDetailHandler(repo.id)"
            class="hover:bg-teal-100 cursor-pointer"
          >
            <td class="border border-teal-400 px-1">
              {{ repo.id }}
            </td>
            <td class="border border-teal-400 px-1">
              {{ repo.name }}
            </td>
            <td class="border border-teal-400 px-1">
              {{ repo.owner.login }}
            </td>
            <td class="border border-teal-400 px-1">
              {{ repo.stargazers_count }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="repos.length === 0">No repositories match the filter</div>
  </div>
</template>
