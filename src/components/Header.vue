<script setup>
import "@/styles/hamburgerMenu.css";

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
</script>

<template>
    <div class="py-[40px] pb-[30px]">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <!-- col -->
                <div class="flex justify-between items-center">
                    <a
                        href="#"
                        class="inline-block transition-all duration-300 mr-[100px] text-[32px] font-bold hover:opacity-50"
                    >
                        Best <span class="text-[#ec1f46]">Tour</span> Ever
                    </a>
                    <div>
                        <form action="#" class="flex justify-between items-center relative font-mulish">
                            <input
                                class="bg-[#f5fafe] rounded-[6px] py-[12px] px-[80px] pl-[23px] w-[350px] outline-none"
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
                    <a href="#" class="inline-block relative mr-[65px] transition-all duration-300 hover:opacity-50">
                        <img src="@/assets/images/icons/cart.svg" alt="cart icon" />
                        <span
                            class="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] rounded-full bg-[#ec1f46] text-white text-[12px] flex justify-center items-center"
                            >0</span
                        >
                    </a>
                    <!-- profile -->
                    <div class="relative flex justify-between items-center pb-[10px] my-profile">
                        <a href="#" class="inline-block pr-[18px] min-w-[40px]">
                            <img src="@/assets/images/content/avatar.png" alt="profile picture" />
                        </a>
                        <a href="#" class="inline-block text-[14px] relative pr-[30px] profile-name">Nathan</a>
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
                    <div class="header__hamburger-menu">
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
</style>
