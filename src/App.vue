<script setup>
import Announcement from "@/components/Announcement.vue";
import Header from "@/components/Header.vue";
import NavMenu from "@/components/NavMenu.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Hotel from "@/components/Hotel.vue";
import HotelAbout from "@/components/HotelAbout.vue";
import Packages from "@/components/Packages.vue";
import Subscribe from "@/components/Subscribe.vue";
import Activities from "@/components/Activities.vue";
import Testimonials from "@/components/Testimonials.vue";
import Footer from "@/components/Footer.vue";

const breadcrumbs = [
    { link: "/", title: "Home" },
    { link: "/", title: "Flash Offers" },
    { link: "/", title: "Grand Hilton Hotel" },
];
</script>

<template>
    <Announcement />
    <Header />
    <NavMenu />
    <Breadcrumbs :location="breadcrumbs" />
    <Hotel />
    <HotelAbout />
    <Packages />
    <Testimonials />
    <Subscribe />
    <Activities />
    <Footer />
</template>

<style scoped></style>
