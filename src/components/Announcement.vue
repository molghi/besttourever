<script setup></script>

<template>
    <div class="bg-[#e1f2ff] py-[23px] pb-[24px] font-mulish">
        <div class="container mx-auto">
            <div class="flex justify-between items-center text-[12px]">
                <div class="flex justify-between items-center">
                    <div class="header__call">
                        <span class="font-bold">Questions? Need Help?</span>
                        Call us: <a href="tel:+123" class="underline hover:no-underline">(+123) 456 1500</a>
                    </div>
                </div>
                <div class="flex justify-between items-center gap-[100px]">
                    <a href="#" class="hover:underline inline-block pl-[37px] my-link">Get BTE Gift Card</a>
                    <a href="#" class="hover:underline inline-block pl-[37px] my-link">Loyalty Program</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.my-link {
    position: relative;
}

.my-link:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-size: contain;
    width: 20px;
    height: 20px;
}

.my-link:first-child:after {
    background: url("@/assets/images/icons/gift.svg") 0 0 no-repeat;
}

.my-link:last-child:after {
    background: url("@/assets/images/icons/star.svg") 0 0 no-repeat;
}
</style>
