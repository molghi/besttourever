<script setup>
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
</script>

<template>
    <div class="bg-[#0a223d] text-white">
        <div class="container mx-auto">
            <div>
                <nav class="block">
                    <ul class="flex justify-between items-center">
                        <template v-for="(item, index) in content.menu" :key="index">
                            <li class="list-none flex-1 text-center" v-if="item.visible">
                                <a
                                    :href="item.link"
                                    class="inline-block pt-[30px] pb-[30px] uppercase transition-all duration-300 hover:bg-[#ec1f46] hover:text-white w-full"
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

<style scoped></style>
