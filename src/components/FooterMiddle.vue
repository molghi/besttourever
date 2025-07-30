<script setup>
const content = {
    infoCol: {
        title: "Contact details",
        subtitle: "Feel free to contact us by phone, email or contact form!",
        location: "2417 S Congress Ave, Austin, TX 78704, United States",
        telephone: [
            "Phone (business hours): 269 1500",
            "Phone (hotline) Monday - Saturday: 52-56-61-38 (08:00 am – 20:00 pm)",
            "Phone (hotline) Sunday: 52-56-61-38 (08:00 am – 14:00 pm)",
        ],
        email: "cherly.lawson@example.com",
    },
    formCol: {
        title: "Send us a message",
        placeholderName: "Your Full Name*",
        placeholderNumber: "Phone Number*",
        placeholderMessage: "Message*",
        buttonText: "Send",
        smallText: "* Required Fields",
    },
};
</script>

<template>
    <div class="flex justify-between mb-[100px] flex gap-[50px]">
        <!-- contact -->
        <div class="flex-1">
            <div class="font-bold text-[21px] leading-[23px] uppercase mb-[20px]">{{ content.infoCol.title }}</div>
            <div class="text-[#cecece] mb-[25px] italic">{{ content.infoCol.subtitle }}</div>
            <div class="items">
                <div class="text-[#cecece] mb-[30px] pl-[36px] relative text-[14px]">
                    {{ content.infoCol.location }}
                </div>
                <div class="leading-[1.5] text-[#cecece] mb-[30px] pl-[36px] relative text-[14px]">
                    <div v-for="(item, index) in content.infoCol.telephone" :key="index" class="leading-[2]">
                        <a class="hover:underline" href="tel:000000000">{{ item }}</a>
                    </div>
                </div>
                <div class="text-[#cecece] pl-[36px] relative text-[14px]">
                    <a class="hover:underline" :href="`mailto:${content.infoCol.email}`">{{ content.infoCol.email }}</a>
                </div>
            </div>
        </div>

        <!-- feedback form -->
        <div class="flex-1">
            <div class="font-bold text-[21px] leading-[23px] uppercase mb-[20px]">{{ content.formCol.title }}</div>
            <form class="w-full">
                <div class="flex justify-between items-center gap-[30px]">
                    <div class="flex-1 mb-[30px]">
                        <input
                            required=""
                            type="text"
                            class="h-[50px] w-full leading-[50px] rounded-[4px] text-[#333] pl-[20px] pr-[20px]"
                            style="border: 2px solid rgba(0, 0, 0, 0)"
                            :placeholder="content.formCol.placeholderName"
                        />
                    </div>
                    <div class="flex-1 mb-[30px]">
                        <input
                            required=""
                            type="text"
                            class="h-[50px] w-full leading-[50px] rounded-[4px] text-[#333] pl-[20px] pr-[20px]"
                            style="border: 2px solid rgba(0, 0, 0, 0)"
                            :placeholder="content.formCol.placeholderNumber"
                        />
                    </div>
                </div>
                <div class="flex-1 mb-[30px]">
                    <textarea
                        required=""
                        class="text-[#333] p-[20px] h-[123px] rounded-[4px] mb-[22px] w-full"
                        style="border: 2px solid rgba(0, 0, 0, 0)"
                        :placeholder="content.formCol.placeholderMessage"
                    ></textarea>
                </div>
                <div class="flex justify-between items-center gap-[30px]">
                    <button
                        class="bg-[#ec1f46] text-white rounded-[4px] w-[160px] h-[50px] text-center leading-[50px] transition-all duration-300 border-2 border-transparent hover:bg-transparent hover:text-[#ec1f46] hover:border-[#ec1f46]"
                    >
                        {{ content.formCol.buttonText }}
                    </button>
                    <div class="font-bold text-[12px] leading-[15px] text-[#e0e0e0]">{{ content.formCol.smallText }}</div>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.items > div:after {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    width: 14px;
    height: 20px;
}

.items > div:nth-child(1):after {
    background: url("@/assets/images/icons/location.svg") 0 0 no-repeat;
}

.items > div:nth-child(2):after {
    background: url("@/assets/images/icons/phone2.svg") 0 0 no-repeat;
    width: 17px;
    height: 17px;
    top: 5px;
}

.items > div:nth-child(3):after {
    background: url("@/assets/images/icons/mail.svg") 0 0 no-repeat;
    width: 17px;
    height: 14px;
    top: 2px;
}
</style>
