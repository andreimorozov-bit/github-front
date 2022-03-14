<script>
import { defineComponent, onMounted, reactive } from 'vue';
import { forceSync } from '../api/repos';
import { getSettings } from '../api/settings';

export default defineComponent({
  name: 'Navbar',
  emits: ['set-interval'],
  setup(_, context) {
    const state = reactive({
      settings: {
        updateIntervalMinutes: null,
      },
    });

    onMounted(async () => {
      const settings = await getSettings();
      state.settings.updateIntervalMinutes = settings.updateIntervalMinutes;
    });

    const handleUpdateNow = async () => {
      await forceSync();
      router.replace('/repos');
    };

    const setIntervalHandler = (interval) => {
      context.emit('set-interval', interval);
    };

    return {
      state,
      handleUpdateNow,
      setIntervalHandler,
    };
  },
});
</script>

<template>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen text-center">
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <span class="inline-block align-middle h-screen">&#8203;</span>
      <div
        class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="bg-white p-4">
          <div class="flex items-start">
            <div class="mt-3 text-center">
              <h3
                class="text-lg leading-6 font-medium text-teal-800"
                id="modal-title"
              >
                Set Update Interval
              </h3>
            </div>
          </div>
        </div>
        <div class="p-4 flex flex-row">
          <div class="p-6 pt-0 text-center">
            <div class="flex flex-row">
              <button
                class="cursor-pointer text-teal-800 text-xl font-semibold hover:text-teal-500 mx-2"
                @click="setIntervalHandler(20)"
              >
                20
              </button>
              <button
                class="cursor-pointer text-teal-800 text-xl font-semibold hover:text-teal-500 mx-2"
                @click="setIntervalHandler(40)"
              >
                40
              </button>
              <button
                class="cursor-pointer text-teal-800 text-xl font-semibold hover:text-teal-500 mx-2"
                @click="setIntervalHandler(60)"
              >
                60
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
