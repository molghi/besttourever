<script setup>
const content = {
    smallTitle: "subscribe to our",
    title: "Newsletter",
    inputPlaceholder: "Your email address",
    buttonText: "Send",
};
</script>

<template>
    <section class="subscribe h-[260px] text-white flex justify-center items-center font-mulish">
        <div class="container mx-auto">
            <div class="flex justify-between items-center p-[170px] pt-[0] pb-[0]">
                <div>
                    <div class="font-light text-[24px] leading-[30px]">{{ content.smallTitle }}</div>
                    <div class="font-semibold text-[36px] leading-[45px] uppercase">{{ content.title }}</div>
                </div>
                <form>
                    <div class="relative">
                        <input
                            type="text"
                            class="w-[350px] h-[50px] rounded-[4px] text-black pr-[80px] pl-[30px]"
                            :placeholder="content.inputPlaceholder"
                        />
                        <button
                            class="bg-[#ec1f46] text-white text-[14px] absolute top-0 right-0 h-full w-[65px] rounded-tr-[4px] rounded-br-[4px] transition-all duration-300 border-l border-l-transparent transition-all duration-300 hover:opacity-50"
                        >
                            {{ content.buttonText }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.subscribe {
    background: url("@/assets/images/content/sub-gradient.png") 0 0 / cover no-repeat,
        url("@/assets/images/content/sub-bg.jpg") 0 0 / cover no-repeat;
}
</style>
