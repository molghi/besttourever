<script setup>
import imgBig from "@/assets/images/content/package--big.jpg";
import img1 from "@/assets/images/content/package1.jpg";
import img2 from "@/assets/images/content/package2.jpg";
import img3 from "@/assets/images/content/package3.jpg";
import img4 from "@/assets/images/content/package4.jpg";

import { ref } from "vue";

function setRating(value) {
    rating.value = value;
}

const rating = ref(5); // initial rating
const max = 5;

const content = {
    title: "Other Packages",
    hotels: [
        {
            name: "Hotel Blue Haven",
            link: "/",
            description:
                "Aute quis duis excepteur excepteur ipsum cat eiusmod consectetur enim laborum magna llit. Ipsum est fugiat velit ea llamco do esse ut in veniam sun in onsequat. Aute quis duis epteur excepteur ipsum occaecat eiusmod nsectetur enim laborum magna mollit. Ipsum est fugiat velit ea ullamco do",
            isBigCard: true,
            tagTitle: "Flash Offer",
            image: imgBig,
            specs: ["1749 Wheeler Ridge Delaware", "Guests: 2", "Rooms: 1"],
            priceOriginal: "$ 8,500",
            priceDiscounted: "$ 3,000",
            button: { text: "Book Now", link: "/" },
        },
        {
            name: "LUX* Belle Mare",
            link: "/",
            description: "",
            isBigCard: false,
            tagTitle: "Flash Offer",
            image: img1,
            specs: ["1749 Wheeler Ridge Delaware", "Guests: 2", "Rooms: 1"],
            priceOriginal: "$ 8,500",
            priceDiscounted: "$ 3,000",
            button: { text: "Book Now", link: "/" },
        },
        {
            name: "White Palace",
            link: "/",
            description: "",
            isBigCard: false,
            tagTitle: "Flash Offer",
            image: img2,
            specs: ["1749 Wheeler Ridge Delaware", "Guests: 2", "Rooms: 1"],
            priceOriginal: "$ 8,500",
            priceDiscounted: "$ 3,000",
            button: { text: "Book Now", link: "/" },
        },
        {
            name: "Luxury Place",
            link: "/",
            description: "",
            isBigCard: false,
            tagTitle: "Flash Offer",
            image: img3,
            specs: ["1749 Wheeler Ridge Delaware", "Guests: 2", "Rooms: 1"],
            priceOriginal: "$ 8,500",
            priceDiscounted: "$ 3,000",
            button: { text: "Book Now", link: "/" },
        },
        {
            name: "Hotel Five Star",
            link: "/",
            description: "",
            isBigCard: false,
            tagTitle: "Flash Offer",
            image: img4,
            specs: ["1749 Wheeler Ridge Delaware", "Guests: 2", "Rooms: 1"],
            priceOriginal: "$ 8,500",
            priceDiscounted: "$ 3,000",
            button: { text: "Book Now", link: "/" },
        },
    ],
};
</script>

<template>
    <section class="pt-[100px] pb-[100px] bg-[#f5fafe] font-mulish">
        <div class="container mx-auto pl-[10px] pr-[10px]">
            <div>
                <div class="font-bold text-[36px] uppercase text-center mb-[70px]">{{ content.title }}</div>

                <!-- items -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    <div
                        v-for="(item, index) in content.hotels"
                        :key="index"
                        data-name="card"
                        :class="!item.isBigCard ? 'lg:max-w-[350px]' : 'flex col-span-1 sm:col-span-2 flex-col sm:flex-row'"
                    >
                        <!-- upper part -->
                        <a
                            :href="item.link"
                            :class="
                                item.isBigCard
                                    ? 'block flex-auto sm:flex-1 basis-auto sm:basis-1/2 relative overflow-hidden h-[300px] sm:h-auto'
                                    : 'block relative overflow-hidden h-[300px] sm:h-auto'
                            "
                        >
                            <div
                                class="absolute z-[100] top-[26px] left-0 bg-[#ec1f46] text-white text-[12px] p-[4px] pl-[9px] pr-[9px] rounded-[4px] pointer-events-none"
                            >
                                {{ item.tagTitle }}
                            </div>
                            <img
                                :src="item.image"
                                alt="hotel image"
                                class="w-full h-full max-w-full object-cover transition-all duration-700 hover:scale-110"
                            />
                        </a>

                        <!-- lower part, body -->
                        <div
                            :class="
                                item.isBigCard
                                    ? 'flex-1 basis-1/2 bg-[#0a223d] text-white p-[30px] sm:rounded-[8px] rounded-bl-[8px] rounded-br-[8px] sm:rounded-tl-none sm:rounded-bl-none'
                                    : 'bg-[#0a223d] text-white p-[30px] rounded-[8px] rounded-tl-none rounded-tr-none'
                            "
                        >
                            <div :class="item.isBigCard ? 'flex flex-col h-full' : ''">
                                <!-- star rating -->
                                <div>
                                    <div class="flex space-x-1 mb-[10px]">
                                        <template v-for="i in max" :key="i">
                                            <svg
                                                @click="setRating(i)"
                                                :class="i <= rating ? 'fill-yellow-500' : 'fill-gray-500'"
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
                                <a
                                    :href="item.link"
                                    class="block font-bold text-[18px] mb-[23px] leading-[23px] hover:underline"
                                    >{{ item.name }}</a
                                >
                                <div v-if="item.description" class="text-[14px] leading-[160%] mb-[34px]">
                                    {{ item.description }}
                                </div>

                                <!-- specs -->
                                <div :class="item.isBigCard ? 'flex-1 my-specs' : 'my-specs'">
                                    <div
                                        v-for="(el, elIndex) in item.specs"
                                        :key="elIndex"
                                        class="text-[14px] leading-[15px] mb-[11px] pl-[27px] relative my-spec"
                                        :style="elIndex === item.specs.length - 1 ? 'margin-bottom: 24px;' : ''"
                                    >
                                        {{ el }}
                                    </div>
                                </div>

                                <div class="flex justify-between items-end gap-[20px] flex-wrap">
                                    <div>
                                        <div class="text-[14px] leading-[18px] mb-[5px] line-through">
                                            {{ item.priceOriginal }}
                                        </div>
                                        <div class="font-bold text-[24px] leading-[30px]">{{ item.priceDiscounted }}</div>
                                    </div>
                                    <a
                                        :href="item.button.link"
                                        class="inline-block bg-[#ec1f46] text-white rounded-[4px] p-[9px] pl-[25px] pr-[25px] border-2 border-[#ec1f46] transition-all duration-300 hover:bg-transparent hover:text-[#ec1f46]"
                                        >{{ item.button.text }}</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.my-spec:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-size: contain;
}
.my-specs .my-spec:nth-child(1):after {
    background: url("@/assets/images/icons/location-white.svg") 0 0 no-repeat;
    width: 12px;
    height: 14px;
}
.my-specs .my-spec:nth-child(2):after {
    background: url("@/assets//images/icons/user.svg") 0 0 no-repeat;
    width: 14px;
    left: -1px;
    height: 14px;
}
.my-specs .my-spec:nth-child(3):after {
    background: url("@/assets/images/icons/home.svg") 0 0 no-repeat;
    width: 12px;
    height: 13px;
}
</style>
