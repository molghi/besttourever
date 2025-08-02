<script setup>
import { defineProps, ref, onMounted, onUnmounted, watch } from "vue";

const screenWidth = ref(window.innerWidth);

const updateWidth = () => (screenWidth.value = window.innerWidth);
onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

const props = defineProps({
    hamburgerToggled: Boolean,
    toggleHamburger: Function,
});

const content = {
    userProfileMenu: [
        { link: "/", title: "View Profile" },
        { link: "/", title: "Account Settings" },
        { link: "/", title: "Notifications" },
        { link: "/", title: "Messages" },
        { link: "/", title: "Help Center" },
        { link: "/", title: "Log Out" },
    ],
};

watch(
    screenWidth,
    (newWidth) => {
        content.userProfileMenu[0].title = newWidth < 1025 ? "Rooms" : "Rooms & Suites";
    },
    { immediate: true }
);
</script>

<template>
    <div class="py-[20px] pb-[20px] md:py-[40px] md:pb-[30px] absolute w-full md:relative z-[5001] md:z-auto header">
        <div class="container mx-auto pl-[10px] pr-[10px]">
            <div class="flex justify-between items-center">
                <!-- col -->
                <div class="flex justify-between items-center">
                    <a
                        href="#"
                        class="inline-block transition-all duration-300 mr-[20px] lg:mr-[40px] lg:mr-[100px] text-[23px] md:text-[27px] lg:text-[32px] font-bold hover:opacity-50 my-title"
                    >
                        Best <span class="text-[#ec1f46]">Tour</span> Ever
                    </a>
                    <div v-if="screenWidth >= 768">
                        <form
                            data-name="search-1"
                            class="max-w-[250px] lg:max-w-full justify-between items-center relative font-mulish hidden md:flex"
                        >
                            <input
                                class="bg-[#f5fafe] rounded-[6px] py-[12px] px-[80px] pl-[23px] w-full lg:w-[350px]"
                                type="text"
                                placeholder="Search Location"
                            />
                            <button
                                class="absolute top-0 right-0 h-full w-[65px] bg-[#ec1f46] rounded-tr-[6px] rounded-br-[6px] transition-all duration-300 flex justify-center items-center hover:opacity-50"
                            >
                                <img src="@/assets/images/icons/search.svg" alt="magnifying glass" />
                            </button>
                        </form>
                    </div>
                </div>

                <!-- col -->
                <div class="flex justify-between items-center font-mulish">
                    <!-- cart -->
                    <a
                        href="#"
                        class="inline-block relative sm:mr-[40px] lg;mr-[65px] transition-all duration-300 hover:opacity-50"
                    >
                        <img src="@/assets/images/icons/cart.svg" alt="cart icon" />
                        <span
                            class="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] rounded-full bg-[#ec1f46] text-white text-[12px] flex justify-center items-center"
                            >0</span
                        >
                    </a>
                    <!-- profile -->
                    <div class="relative hidden sm:flex justify-between items-center pb-[10px] my-profile">
                        <a href="#" class="inline-block md:pr-[18px] min-w-[40px]">
                            <img src="@/assets/images/content/avatar.png" alt="profile picture" />
                        </a>
                        <a href="#" class="text-[14px] relative md:pr-[30px] profile-name hidden md:inline-block">Nathan</a>
                        <!-- dropdown -->
                        <ul
                            class="absolute top-[95%] right-0 bg-[#f5fafe] rounded-[6px] shadow-[0_0_10px_silver] py-[15px] opacity-0 pointer-events-none translate-y-[-10px] transition-all duration-300 my-dropdown w-[170px]"
                        >
                            <li v-for="(item, index) in content.userProfileMenu" :key="index">
                                <a
                                    :href="item.link"
                                    class="block p-[15px] pt-[10px] pb-[10px] whitespace-nowrap hover:bg-[#ec1f46] hover:text-white active:opacity-50"
                                    >{{ item.title }}</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div
                        :class="props.hamburgerToggled ? 'header__hamburger-menu active' : 'header__hamburger-menu'"
                        @click="toggleHamburger"
                    >
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-name:after {
    content: "";
    position: absolute;
    top: 5px;
    right: 0;
    background: url("@/assets/images/icons/arrow-down.svg") 0 0 no-repeat;
    width: 14px;
    height: 8px;
    font-family: "Mulish", "Helvetica", "sans-serif";
}

.my-profile:hover .my-dropdown {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
}

.header:after {
    content: "";
    position: absolute;
    z-index: 11;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: white;
}
.header > div {
    position: relative;
    z-index: 12;
}
</style>

<style>
.my-title {
    /* font-family: "Permanent Marker", cursive; */
    /* font-family: "Knewave", system-ui; */
    /* font-weight: 400 !important; */
    /* font-style: normal; */

    /* font-family: "Lemonada", cursive; */
    /* font-optical-sizing: auto; */
    /* font-weight: 600 !important; */
    /* font-style: normal; */

    font-family: "Lemon", serif;
    font-weight: 400 !important;
    font-style: normal;
}
</style>
