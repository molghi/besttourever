<script setup>
import image from "@/assets/images/content/stuff.png";

const content = {
    list: [
        { link: "/", title: "Disclaimer" },
        { link: "/", title: "Conditions" },
        { link: "/", title: "Policies" },
    ],
    image,
};
</script>

<template>
    <div class="flex justify-between items-center gap-[30px] flex-col sm:flex-row">
        <div class="flex gap-[30px] sm:gap-[35px] lg:mx-auto">
            <a v-for="(item, index) in content.list" :key="index" :href="item.link" class="hover:underline">{{ item.title }}</a>
        </div>
        <div class="max-w-[140px]">
            <img :src="content.image" alt="" class="w-full" />
        </div>
    </div>
</template>

<style scoped></style>
