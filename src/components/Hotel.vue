<script setup>
import image from "@/assets/images/content/hotel.jpg";
import userImg from "@/assets/images/icons/user.svg";

import { ref, onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icon path for production
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
    iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
    shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

function setRating(value) {
    rating.value = value;
}

const rating = ref(5); // initial rating
const max = 5;

const content = {
    name: "GRAND HOTEL PARADISO",
    label: "Flash Offer",
    shortDescription: "Half-Board / All Inclusive + Complimentary Activities + Child Stays Free",
    rating: 4.5,
    image,
    priceStart: `8,500`,
    guests: 2,
    room: 1,
    quickBookingNumber: 12100,
};

onMounted(() => {
    const map = L.map("map").setView([-8.409518, 115.188919], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([-8.409518, 115.188919]).addTo(map);
});
</script>

<template>
    <div class="bg-[#e1f2ff]">
        <div class="container mx-auto pl-[10px] pr-[10px]">
            <div class="pb-[70px] font-mulish">
                <!-- top -->
                <div class="flex justify-between flex-col sm:flex-row items-start sm:items-center mb-[20px] sm:mb-[0]">
                    <div>
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
                        <div class="flex justify-start items-center mb-[10px] flex-wrap sm:flex-nowrap gap-[7px] sm:gap-[0]">
                            <div class="font-bold text-[24px] leading-[30px] mr-[14px]">{{ content.name }}</div>
                            <div class="text-[13px] text-white bg-[#ec1f46] inline-block rounded-[3px] p-[4px] pl-[9px] pr-[9px]">
                                {{ content.label }}
                            </div>
                        </div>
                        <div class="font-normal text-[12px] leading-[1.7] sm:leading-[15px] mb-[20px]">
                            {{ content.shortDescription }}
                        </div>
                    </div>
                    <div>
                        <div class="bg-[#ec1f46] text-white rounded-[4px] text-center p-[8px] pl-[12px] pr-[12px]">
                            <div class="text-[13px] leading-[12px]">User Rating</div>
                            <div class="text-[18px]">
                                <span class="font-bold">{{ content.rating }}</span>
                                / <span class="text-[12px]">5</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- bottom -->
                <div class="flex flex-col md:flex-row justify-between gap-[30px]">
                    <!-- image -->
                    <div class="md:max-w-[730px] rounded-[8px] overflow-hidden h-[300px] md:h-auto">
                        <img
                            :src="content.image"
                            alt="hotel image"
                            class="align-top max-w-full w-full h-full object-cover object-center"
                        />
                    </div>

                    <!-- info col -->
                    <div class="md:max-w-[350px] w-full h-full flex flex-col sm:flex-row md:flex-col gap-[30px] min-w-[280px]">
                        <div class="bg-[#0a223d] text-white rounded-[8px] p-[30px] flex-1 basis-1/2 md:flex-auto md:basis-auto">
                            <div class="flex justify-between items-center mb-[10px]">
                                <div>
                                    <div class="font-normal text-[12px] leading-[16px] mb-[3px]">Price starts at</div>
                                    <div class="font-extrabold text-[24px] leading-[33px] mb-[3px]">
                                        $ {{ content.priceStart }}
                                    </div>
                                    <div class="font-normal text-[12px] leading-[16px]">per room / night</div>
                                </div>
                                <div>
                                    <div class="mb-[8px] pl-[25px] relative text-right text-icon text-[13px]">
                                        Guests: {{ content.guests }}
                                    </div>
                                    <div class="mb-[8px] pl-[20px] relative text-right text-icon text-[13px]">
                                        Room: {{ content.room }}
                                    </div>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mb-[18px]">
                                <div class="font-semibold text-[18px] leading-[25px]">Quick Booking</div>
                                <div class="font-semibold text-[18px] leading-[25px] relative pl-[25px] text-icon text-icon-2">
                                    {{ content.quickBookingNumber }}
                                </div>
                            </div>
                            <a
                                href="#"
                                class="inline-block w-full py-[13px] text-center rounded-[8px] bg-[#ec1f46] text-white transition-all duration-300 hover:opacity-50"
                                >View Other Options</a
                            >
                        </div>

                        <!-- map -->
                        <div
                            class="max-h-[230px] sm:max-h-full md:max-h-[210px] h-[230px] sm:h-auto md:h-[210px] rounded-[10px] overflow-hidden flex-1 basis-1/2 md:flex-auto md:basis-auto"
                        >
                            <div id="map" class="bg-black h-[230px] md:h-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.text-icon:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-size: contain;
}

.text-icon:nth-child(1):after {
    background: url("@/assets/images/icons/user.svg") 0 0 no-repeat;
    width: 14px;
    height: 14px;
}

.text-icon:nth-child(2):after {
    background: url("@/assets/images/icons/home.svg") 0 0 no-repeat;
    width: 13px;
    height: 13px;
}

.text-icon-2:after {
    content: "";
    top: 6px;
    background: url("@/assets/images/icons/phone3.svg") 0 0 no-repeat !important;
    width: 14px;
    height: 14px;
}
</style>

<style>
:root {
    --star-color-active: #facc15; /* yellow-400 */
    --star-color-inactive: #d1d5db; /* gray-300 */
}
</style>
