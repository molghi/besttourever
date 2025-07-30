<script setup>
import { ref } from "vue";

const content = {
    tabsTitles: [
        { link: "#tab1", title: "Package Summary" },
        { link: "#tab2", title: "Hotel Information" },
        { link: "#tab3", title: "Rooms" },
        { link: "#tab4", title: "Facilities & Activities" },
        { link: "#tab5", title: "Dining & Entertainment" },
        { link: "#tab6", title: "Reviews" },
        { link: "#tab7", title: "Questions & Answers" },
    ],
    tabsContents: [
        {
            id: "tab1",
            title: "Package Summary",
            blocks: [
                {
                    blockTitle: "Package Highlights",
                    isBig: false,
                    list: [
                        "Half Board / All Inclusive",
                        "Child Under 11 Years Stay Free",
                        "LUX* Me Spa",
                        "Luxurious 5-Star Hotel",
                        "Banyan An Adult Only Zone",
                    ],
                },
                {
                    blockTitle: "Offer Details",
                    isBig: false,
                    list: [
                        "Benefit from a special discounted CHILL’OUT OFFER at Grand Hilton Hotel.",
                        "10th March - 30th April 2020",
                        "* Valid until 30 April 2020",
                    ],
                },
                {
                    blockTitle: "Package Summary Details",
                    isBig: true,
                    columns: [
                        {
                            colTitle: "Purchase Inclusions",
                            list: [
                                "Room as per selection",
                                "Half Board or All Inclusive Meal Plan",
                                "Complimentary Land & Water activities",
                                "Child Under 11 years old stays free",
                                "Free Wi-Fi",
                                "Free Secure Parking",
                            ],
                        },
                        {
                            colTitle: "Complimentary Land Based Activities",
                            list: [
                                "Room as per selection",
                                "Half Board or All Inclusive Meal Plan",
                                "Complimentary Land & Water activities",
                                "Child Under 11 years old stays free",
                                "Free Wi-Fi",
                                "Free Secure Parking",
                            ],
                        },
                        {
                            colTitle: "Complimentary Water Based Activities",
                            list: [
                                "Room as per selection",
                                "Half Board or All Inclusive Meal Plan",
                                "Complimentary Land & Water activities",
                                "Child Under 11 years old stays free",
                                "Free Wi-Fi",
                                "Free Secure Parking",
                            ],
                        },
                        { colTitle: "Meal Plan Available", list: ["Half Board", "All Inclusive"] },
                        { colTitle: "Entertainment", list: ["Live music", "DJ & Mauritian Dance Show"] },
                        { colTitle: "Check In & Check Out", list: ["Check-In Time 14:00", "Check-Out Time 11:00"] },
                    ],
                },
            ],
        },
        { id: "tab2", title: "Hotel Information", blocks: [] },
        { id: "tab3", title: "Rooms", blocks: [] },
        { id: "tab4", title: "Facilities & Activities", blocks: [] },
        { id: "tab5", title: "Dining & Entertainment", blocks: [] },
        { id: "tab6", title: "Reviews", blocks: [] },
        { id: "tab7", title: "Questions & Answers", blocks: [] },
    ],
};

const activeTab = ref(0);

const switchTabs = (index) => {
    activeTab.value = index;
};
</script>

<template>
    <div class="bg-[#e1f2ff] pb-[100px]">
        <div class="container mx-auto">
            <div class="font-mulish">
                <!-- tabs titles :href="item.link"-->
                <div class="flex justify-between items-center mb-[60px]">
                    <button
                        v-for="(item, index) in content.tabsTitles"
                        :key="index"
                        @click="() => switchTabs(index)"
                        :class="
                            index === activeTab
                                ? 'font-bold text-[14px] leading-[18px] text-[#ec1f46] relative active-tab'
                                : 'font-bold text-[14px] leading-[18px]'
                        "
                    >
                        {{ item.title }}
                    </button>
                </div>

                <!-- tabs contents -->
                <div>
                    <div
                        v-for="(item, index) in content.tabsContents"
                        :key="index"
                        :id="item.id"
                        :class="index === activeTab ? 'block' : 'hidden'"
                    >
                        <div class="font-bold text-[24px] leading-[30px] mb-[30px] uppercase">{{ item.title }}</div>

                        <div class="flex justify-between gap-[30px] flex-wrap">
                            <div
                                v-for="(block, blockIndex) in item.blocks"
                                :key="blockIndex"
                                :class="block.isBig ? 'h-auto flex-1 flex-grow basis-full' : ''"
                                :style="!block.isBig ? 'flex: 1 0 calc((100% - 80px) / 2)' : ''"
                            >
                                <div class="bg-[#0a223d] text-white w-full rounded-t-[4px] px-6 py-4 font-bold text-[14px]">
                                    {{ block.blockTitle }}
                                </div>
                                <div
                                    :class="
                                        !block.isBig
                                            ? `bg-white p-[30px] flex flex-wrap`
                                            : 'bg-white p-[30px] flex flex-wrap gap-[80px]'
                                    "
                                >
                                    <!-- conditional -->
                                    <div
                                        v-if="!block.isBig"
                                        v-for="(listItem, listItemIndex) in block.list"
                                        :key="listItemIndex"
                                        class="font-normal text-[13px] leading-[15px] pl-[40px] mb-[23px] relative w-1/2 checkmarked"
                                    >
                                        {{ listItem }}
                                    </div>

                                    <template v-else v-for="(el, elIndex) in block.columns" :key="elIndex">
                                        <!-- 160px: 80px gap times two, 3: 3 cols -->
                                        <div style="flex: 1 0 calc((100% - 160px) / 3)">
                                            <div class="font-semibold text-[13px] leading-[16px] mb-[21px] text-[#ec1f46]">
                                                {{ el.colTitle }}
                                            </div>
                                            <div
                                                v-for="(elSub, elSubIndex) in el.list"
                                                :key="elSubIndex"
                                                class="font-normal text-[13px] leading-[15px] pl-[40px] mb-[23px] relative checkmarked"
                                            >
                                                {{ elSub }}
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.active-tab:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    background-color: #ec1f46;
    width: 100%;
    height: 4px;
}

.columns-2 {
    column-count: 2;
}
.columns-3 {
    column-count: 3;
}

.checkmarked:after {
    content: "";
    position: absolute;
    top: 1px;
    left: 0;
    background: url("@/assets/images/icons/checkmark2.svg") 0 0 no-repeat;
    background-size: contain;
    width: 15px;
    height: 15px;
}
</style>
