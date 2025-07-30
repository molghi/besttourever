<script setup>
import imageUser from "@/assets/images/content/testimonials1.jpg";

const content = {
    title: "What people think about us",
    slides: [
        {
            name: "Sharon McCarthy",
            image: imageUser,
            stayed: "18 Nov 2019",
            rating: 5,
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
        <div class="container mx-auto">
            <div>
                <div class="leading-[45px] mb-[100px] text-[36px] uppercase text-center">{{ content.title }}</div>
                <div>
                    <!-- slides -->
                    <div
                        v-for="(item, index) in content.slides"
                        :key="index"
                        class="bg-[#fff] max-w-[730px] mx-auto pl-[100px] pr-[100px] pb-[30px] text-center relative"
                        style="box-shadow: 0 0 10px #dbd5d5"
                    >
                        <div class="max-w-[90px] mx-auto overflow-hidden rounded-[50%]" style="transform: translateY(-40px)">
                            <img class="max-w-full" :src="item.image" alt="review user image" />
                        </div>
                        <div class="font-bold text-[16px] leading-[15px] text-[#ec1f46] mb-[10px] mt-[-20px]">
                            {{ item.name }}
                        </div>
                        <div class="text-[12px] leading-[13px] mb-[10px]">{{ item.stayed }}</div>
                        <div class="mx-auto mb-[20px]">rating here: {{ item.rating }}</div>
                        <div class="text-[14px] leading-[160%] text-left">
                            {{ item.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
