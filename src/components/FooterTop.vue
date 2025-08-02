<script setup>
import fbIcon from "@/assets/images/icons/face.svg";
import ytIcon from "@/assets/images/icons/yt.svg";
import igIcon from "@/assets/images/icons/ig.svg";

const content = {
    site: "Best <span>Tour</span> Ever",
    columns: [
        {
            title: "ALL CATEGORIES",
            list: [
                { link: "/", title: "Beachfront Hotels" },
                { link: "/", title: "Luxury Resorts" },
                { link: "/", title: "Budget Stays" },
                { link: "/", title: "Pet-Friendly Hotels" },
                { link: "/", title: "Family Accommodations" },
                { link: "/", title: "Last-Minute Deals" },
                { link: "/", title: "Business Travel Options" },
            ],
        },
        {
            title: "ADDITIONAL INFORMATION",
            list: [
                { link: "/", title: "About Us" },
                { link: "/", title: "How It Works" },
                { link: "/", title: "Travel Tips & Guides" },
                { link: "/", title: "Affiliate Program" },
                { link: "/", title: "Contact Support" },
            ],
        },
        {
            title: "LEGAL INFORMATION",
            list: [
                { link: "/", title: "Terms & Conditions" },
                { link: "/", title: "Privacy Policy" },
                { link: "/", title: "Cookie Policy" },
                { link: "/", title: "Cancellation Policy" },
            ],
        },
    ],
    socialsTitle: "Social Media",
    socials: [
        { link: "https://facebook.com", icon: fbIcon, title: "facebook" },
        { link: "https://youtube.com", icon: ytIcon, title: "youtube" },
        { link: "https://instagram.com", icon: igIcon, title: "instagram" },
    ],
};
</script>

<template>
    <div class="flex justify-center lg:justify-between mb-[50px] md:mb-[100px] gap-[30px] lg:gap-[50px] flex-wrap lg:flex-nowrap">
        <a
            href="/"
            class="max-w-[166px] transition-all duration-300 hover:opacity-50 font-extrabold footer-logo leading-[1.2]"
            v-html="content.site"
        ></a>

        <!-- columns -->
        <div v-for="(item, index) in content.columns" :key="index">
            <div class="font-bold text-[21px] leading-[23px] uppercase mb-[20px] font-extrabold w-[280px] sm:w-auto">
                {{ item.title }}
            </div>
            <ul>
                <li v-for="(listItem, listIndex) in item.list" :key="listIndex" class="mb-[10px]">
                    <a :href="listItem.link" class="text-[#cecece] hover:underline">{{ listItem.title }}</a>
                </li>
            </ul>

            <!-- socials -->
            <div v-if="index === 1" class="mt-[35px] flex items-center gap-[30px]">
                <div class="font-bold text-[21px] leading-[23px] uppercase">{{ content.socialsTitle }}</div>
                <div class="flex gap-[15px] items-center">
                    <a
                        v-for="(socialItem, socialIndex) in content.socials"
                        :key="socialIndex"
                        :href="socialItem.link"
                        class="transition-all duration-300 hover:opacity-50"
                        target="_blank"
                        :title="socialItem.title"
                    >
                        <img :src="socialItem.icon" alt="socials icon" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.footer-logo {
    font-size: 60px;
}
.footer-logo span {
    display: block;
    color: #ec1f46;
}

@media (max-width: 1024px) {
    .footer-logo {
        font-size: 40px;
    }
}
</style>
