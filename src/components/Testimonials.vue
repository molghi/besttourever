<script setup>
import imageUser from "@/assets/images/content/testimonials1.jpg";

import { Swiper as swiper, SwiperSlide as swiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { ref } from "vue";

function setRating(value) {
    rating.value = value;
}

const rating = ref(5); // initial rating
const max = 5;

const content = {
    title: "What people think about us",
    slides: [
        {
            name: "Sharon McCarthy",
            image: imageUser,
            stayed: "18 Nov 2019",
            rating: 4,
            text: `Breakfast was good and support of the staff was also very nice. Location is not good as per
                            atmosphere, it is very nearby most of the popular places but self location in a narrow street is not
                            good. Overall it was a good experience and could recommend.`,
        },
        {
            name: "Jamima Sawyer",
            image: imageUser,
            stayed: "30 Jul 2025",
            rating: 5,
            text: `It was very nice hotel with cleanliness. Staff behavior was good and polite. They welcome us very
                            well. Issue was only that Lift was not in working and we were allotted to 3rd floor and amenities
                            articles were in corner of gallery which were giving bad feeling. Breakfast was good and support of
                            the staff was also very nice. Location is not good as per atmosphere, it is very nearby most of the
                            popular places but self location in a narrow street is not good. Overall it was a good experience and
                            could recommend.`,
        },
    ],
};
</script>

<template>
    <section class="bg-[#f5fafe] pt-[70px] pb-[70px]">
        <div class="container mx-auto pl-[10px] pr-[10px]">
            <div>
                <div class="leading-[45px] mb-[100px] text-[36px] uppercase text-center">{{ content.title }}</div>
                <div>
                    <swiper
                        :modules="[Navigation, Autoplay]"
                        :autoplay="{ delay: 3000, disableOnInteraction: false }"
                        :loop="true"
                        :navigation="{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }"
                        class="w-full py-[40px]"
                    >
                        <!-- slides -->
                        <swiper-slide v-for="(item, index) in content.slides" :key="index">
                            <div
                                class="bg-[#fff] max-w-[730px] mx-auto pl-[30px] md:pl-[100px] pr-[30px] md:pr-[100px] pb-[30px] text-center relative"
                                style="box-shadow: 0 0 10px #dbd5d5"
                            >
                                <div
                                    class="max-w-[90px] mx-auto overflow-hidden rounded-[50%]"
                                    style="transform: translateY(-40px)"
                                >
                                    <img class="max-w-full" :src="item.image" alt="review user image" />
                                </div>
                                <div class="font-bold text-[16px] leading-[15px] text-[#ec1f46] mb-[10px] mt-[-20px]">
                                    {{ item.name }}
                                </div>
                                <div class="text-[12px] leading-[13px] mb-[10px]">{{ item.stayed }}</div>
                                <!-- star rating -->
                                <div class="mx-auto mb-[20px]">
                                    <div class="flex justify-center space-x-1 mb-[10px]">
                                        <template v-for="i in max" :key="i">
                                            <svg
                                                @click="setRating(i)"
                                                :class="i <= item.rating ? 'fill-yellow-500' : 'fill-gray-500'"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                class="w-5 h-5 cursor-pointer transition"
                                            >
                                                <path
                                                    d="M12 .587l3.668 7.568L24 9.748l-6 5.974L19.335 24 12 20.013 4.665 24 6 15.722 0 9.748l8.332-1.593z"
                                                />
                                            </svg>
                                        </template>
                                    </div>
                                </div>
                                <div class="text-[14px] leading-[160%] text-left">
                                    {{ item.text }}
                                </div>
                            </div>
                        </swiper-slide>

                        <!-- Arrows -->
                        <div
                            class="swiper-button-prev text-black absolute left-2 top-[10px] md:top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[50px] active:opacity-50"
                        >
                            ‹
                        </div>
                        <div
                            class="swiper-button-next text-black absolute right-2 top-[10px] md:top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[50px] active:opacity-50"
                        >
                            ›
                        </div>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
