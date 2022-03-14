<script>
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { forceSync } from '../api/repos';
import { getSettings, setSettings } from '../api/settings';
import UpdateIntervalModal from './UpdateIntervalModal.vue';

export default defineComponent({
  name: 'Navbar',
  components: { UpdateIntervalModal, UpdateIntervalModal },

  setup() {
    const router = useRouter();
    const state = reactive({
      settings: {
        updateIntervalMinutes: null,
      },
      showSettings: false,
    });
    onMounted(async () => {
      const settings = await getSettings();
      state.settings.updateIntervalMinutes = settings.updateIntervalMinutes;
    });
    const handleUpdateNow = async () => {
      await forceSync();
      router.replace('/repos');
    };
    const setIntervalHandler = () => {
      state.showSettings = true;
    };
    const updateInterval = async (interval) => {
      state.showSettings = false;
      state.settings.updateIntervalMinutes = interval;
      await setSettings({ updateIntervalMinutes: interval });
    };

    return {
      state,
      handleUpdateNow,
      setIntervalHandler,
      updateInterval,
    };
  },
});
</script>

<template>
  <div class="flex flex-row">
    <div class="p-2">
      <span class="text-base pr-2">Update Interval:</span>
      <span class="text-teal-700 text-base font-bold">
        {{ state.settings.updateIntervalMinutes }}
        <span class="text-base font-normal">minutes</span>
      </span>
    </div>
    <button
      class="text-teal-700 hover:text-teal-600 text-base bg-transparent p-2 font-bold"
      @click="setIntervalHandler"
    >
      Change Interval
    </button>
    <button
      @click.prevent="handleUpdateNow"
      class="text-teal-700 hover:text-teal-600 text-base bg-transparent p-2 font-bold"
    >
      Force Sync
    </button>
    <UpdateIntervalModal
      v-if="state.showSettings"
      @set-interval="updateInterval"
    />
  </div>
</template>
