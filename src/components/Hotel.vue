<script setup>
import image from "@/assets/images/content/hotel.jpg";
import userImg from "@/assets/images/icons/user.svg";

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
</script>

<template>
    <div class="bg-[#e1f2ff]">
        <div class="container mx-auto">
            <div class="pb-[70px] font-mulish">
                <!-- top -->
                <div class="flex justify-between items-center">
                    <div>
                        <div>star rating here</div>
                        <div class="flex justify-start items-center mb-[10px]">
                            <div class="font-bold text-[24px] leading-[30px] mr-[14px]">{{ content.name }}</div>
                            <div class="text-[13px] text-white bg-[#ec1f46] inline-block rounded-[3px] p-[4px] pl-[9px] pr-[9px]">
                                {{ content.label }}
                            </div>
                        </div>
                        <div class="font-normal text-[12px] leading-[15px] mb-[20px]">{{ content.shortDescription }}</div>
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
                <div class="flex justify-between gap-[30px]">
                    <!-- image -->
                    <div class="max-w-[730px] rounded-[8px] overflow-hidden">
                        <img :src="content.image" alt="hotel image" class="max-w-full w-full h-full object-cover object-center" />
                    </div>

                    <!-- info col -->
                    <div class="max-w-[350px] w-full h-full flex flex-col gap-[30px]">
                        <div class="bg-[#0a223d] text-white rounded-[8px] p-[30px]">
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
                        <div class="max-h-[210px] h-[210px] rounded-[10px] overflow-hidden">
                            <div id="map" class="bg-black h-full"></div>
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
