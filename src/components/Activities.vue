<script setup>
import img1 from "@/assets/images/content/activities1.jpg";
import img2 from "@/assets/images/content/activities2.jpg";
import img3 from "@/assets/images/content/activities3.jpg";
import img4 from "@/assets/images/content/activities4.jpg";

const content = {
    title: "Other Activities",
    cards: [
        { title: "The curious corner of chamarel", buttonText: "Book Now", link: "/", image: img1 },
        { title: "Gymkhana club golf course", buttonText: "Book Now", link: "/", image: img2 },
        { title: "Tamarind falls hiking trip - full day", buttonText: "Book Now", link: "/", image: img3 },
        { title: "The blue marine discovery quest", buttonText: "Book Now", link: "/", image: img4 },
    ],
};
</script>

<template>
    <section class="bg-[#f5fafe] pt-[60px] pb-[100px]">
        <div class="container mx-auto">
            <div>
                <div class="mb-[60px] text-[36px] uppercase text-center">{{ content.title }}</div>
                <div class="flex gap-[30px]">
                    <!-- cards -->
                    <div v-for="(item, index) in content.cards" :key="index" class="relative rounded-[6px]">
                        <div>
                            <img
                                :src="item.image"
                                alt="activity image"
                                class="w-full h-full max-w-full object-cover"
                                style="filter: brightness(70%)"
                            />
                        </div>
                        <div class="absolute bottom-[25px] left-[25px] max-w-[160px]">
                            <a
                                :href="item.link"
                                class="block text-white font-bold text-[16px] leading-[20px] mb-[18px] hover:underline"
                            >
                                {{ item.title }}
                            </a>
                            <a
                                :href="item.link"
                                class="inline-block w-[100px] text-center min-h-[30px] leading-[30px] bg-[#ec1f46] text-white rounded-[4px] text-[12px] border-2 border-[#ec1f46] transition-all duration-300 hover:bg-transparent hover:text-[#ec1f46]"
                                >{{ item.buttonText }}</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
