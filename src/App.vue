<template>
  <div id="app" class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
  <!-- </form-wizard> -->
</template>

<script>
export default {
  name: "App"
};
</script>
