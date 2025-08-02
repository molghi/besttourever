<script setup>
import { defineProps, ref, onMounted, onUnmounted, watch } from "vue";
import "@/styles/hamburgerMenu.css";

defineProps({
    hamburgerToggled: Boolean,
});

const screenWidth = ref(window.innerWidth);
const updateWidth = () => (screenWidth.value = window.innerWidth);
onMounted(() => window.addEventListener("resize", updateWidth));
onUnmounted(() => window.removeEventListener("resize", updateWidth));

const content = {
    menu: [
        { link: "", title: "Rooms & Suites", visible: true },
        { link: "", title: "Offers", visible: true },
        { link: "", title: "Services", visible: true },
        { link: "", title: "Dining", visible: true },
        { link: "", title: "Gallery", visible: true },
        { link: "", title: "Booking", visible: true },
        { link: "", title: "Contact", visible: true },
        { link: "", title: "shopping cart", visible: false },
        { link: "", title: "your profile", visible: false },
    ],
};

// if (screenWidth.value < 1025) content.menu[0].title = "Rooms";
watch(
    screenWidth,
    (newWidth) => {
        content.menu[0].title = newWidth < 1025 ? "Rooms" : "Rooms & Suites";
    },
    { immediate: true }
);
</script>

<template>
    <div class="bg-[#0a223d] text-white">
        <div class="container mx-auto pl-[10px] pr-[10px]">
            <div>
                <nav :class="hamburgerToggled ? 'header__menu active' : 'block header__menu'">
                    <ul class="flex justify-between items-center header__list">
                        <li v-if="hamburgerToggled">
                            <!-- header search here for small screens -->
                            <form v-if="hamburgerToggled" class="font-mulish search-small mb-[30px]" data-name="search-2">
                                <input
                                    class="bg-[#f5fafe] rounded-[6px] py-[12px] px-[80px] pl-[23px] w-full outline-none text-black"
                                    type="text"
                                    placeholder="Search Location"
                                />
                                <button
                                    class="absolute top-0 right-0 h-full w-[65px] bg-black text-[#ec1f46] rounded-tr-[6px] rounded-br-[6px] transition-all duration-300 flex justify-center items-center hover:opacity-50"
                                >
                                    <img src="@/assets/images/icons/search.svg" alt="magnifying glass" />
                                </button>
                            </form>
                        </li>
                        <li class="list-none flex-1 text-center header__list-item profile-element">
                            <a
                                href="/"
                                class="inline-block pt-[30px] pb-[30px] uppercase transition-all duration-300 hover:bg-[#ec1f46] hover:text-white w-full header__link"
                                >Your Profile</a
                            >
                        </li>
                        <template v-for="(item, index) in content.menu" :key="index">
                            <li class="list-none flex-1 text-center header__list-item" v-if="item.visible">
                                <a
                                    :href="item.link"
                                    class="inline-block pt-[30px] pb-[30px] uppercase transition-all duration-300 hover:bg-[#ec1f46] hover:text-white w-full header__link"
                                    >{{ item.title }}</a
                                >
                            </li>
                        </template>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style>
.search-small {
    position: relative;
    z-index: 11;
}

.profile-element {
    display: none;
}

@media (max-width: 640px) {
    .profile-element {
        display: block;
    }
}
</style>
