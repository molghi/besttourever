<script setup>
import FooterTop from "@/components/FooterTop.vue";
import FooterMiddle from "@/components/FooterMiddle.vue";
import FooterBottom from "@/components/FooterBottom.vue";
</script>

<template>
    <footer class="bg-[#0a223d] text-white pt-[50px] md:pt-[100px] pb-[50px] font-mulish">
        <div class="container mx-auto pl-[10px] pr-[10px]">
            <div>
                <FooterTop />
                <FooterMiddle />
                <FooterBottom />
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
