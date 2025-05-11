<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const placeholders = [
  "ترشی دست‌ساز شیرازی از کجا بخرم؟",
  "نون سنگک تازه و داغ کجا پیدا می‌شه؟",
  "عسل طبیعی کوهستانی رو از کی بگیرم؟",
  "مربای توت‌فرنگی خونگی دارید؟",
  "شیرینی نخودچی خوشمزه خونگی می‌خوام",
  "صابون گیاهی دست‌ساز دارید؟",
  "پنیر لیقوان محلی از کجا تهیه کنم؟",
  "سبزی خشک محلی می‌خوام",
  "زعفران اصل قائنات رو از کی بخرم؟",
  "صنایع‌دستی چوبی دست‌ساز دارید؟",
  "دنبال رب گوجه خونگی خوش‌رنگ هستم",
  "دوغ محلی کف‌دار از کجا بگیرم؟",
  "شیره انگور طبیعی دارید؟",
  "کشمش آفتابی خونگی می‌خوام",
  "شیره خرما طبیعی از کی بخرم؟",
  "دنبال نون برنجی کرمانشاهی هستم",
  "صابون زیتون طبیعی دارید؟",
  "دنبال مربای به خونگی خوش‌عطر هستم",
  "شیرینی برنجی خونگی می‌خوام",
  "دنبال ترشی لیته تند و خوشمزه هستم",
];

const typing = ref("");
const currentPlaceholder = ref("");
let intervalId: ReturnType<typeof setInterval> | null = null;

function getRandomPlaceholder(): string {
  const randomIndex = Math.floor(Math.random() * placeholders.length);
  return placeholders[randomIndex];
}

function updatePlaceholder() {
  currentPlaceholder.value = getRandomPlaceholder();
}

onMounted(() => {
  updatePlaceholder();
  intervalId = setInterval(updatePlaceholder, 4000);
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});

function handleSearch() {
  if (typing.value.trim()) {
    console.log("Searching for:", typing.value);
    // You can emit or route here
  }
}
</script>

<template>
  <div
    class="flex flex-col w-full items-center md:min-h-[100vh] justify-center page-header text-gray-600 border-gray-200 bg-gray-100"
  >
    <div
      class="w-full p-5 flex justify-center max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8"
    >
      <UInput
        v-model="typing"
        variant="subtle"
        trailing-icon="i-lucide-search"
        :placeholder="currentPlaceholder"
        size="xxl"
        class="w-full"
        @keyup.enter="handleSearch"
      />
    </div>
  </div>
</template>
