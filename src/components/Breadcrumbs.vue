<script setup>
const props = defineProps({
    location: Object,
});
</script>

<template>
    <div class="bg-[#e1f2ff] pt-[100px] md:pt-[19px] pb-[19px] font-mulish pb-[20px]">
        <div class="container mx-auto pl-[10px] pr-[10px]">
            <ul class="flex flex-wrap sm:flex-nowrap gap-[15px] sm:gap-[30px]">
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

@media (max-width: 640px) {
    .breadcrumbs-item:after {
        left: -9px;
    }
}
</style>
