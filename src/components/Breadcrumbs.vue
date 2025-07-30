<script setup>
const props = defineProps({
    location: Object,
});
</script>

<template>
    <div class="bg-[#e1f2ff] pt-[19px] pb-[19px] font-mulish pb-[20px]">
        <div class="container mx-auto">
            <ul class="flex gap-[30px]">
                <li v-for="(item, index) in props.location" :key="index" class="breadcrumbs-item relative">
                    <a :href="item.link" class="text-[13px] hover:underline">{{ item.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.breadcrumbs-item:after {
    content: "/";
    position: absolute;
    top: 0;
    left: -15px;
}
.breadcrumbs-item:first-child:after {
    display: none;
}
</style>
