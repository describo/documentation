<template>
    <div class="flex flex-col">
        <div class="w-full text-center p-4 xl:p-6">
            <slot name="text"></slot>
        </div>
        <div v-if="slots.image" class="flex w-full place-content-center">
            <slot name="image"></slot>
        </div>
    </div>
</template>

<script setup>
import { useSlots, onMounted, watch } from "vue";
import { useRoute } from "vitepress";
import mediumZoom from "medium-zoom";
const route = useRoute();
const slots = useSlots();

const props = defineProps({
    image: { type: String },
});

const initZoom = () => {
    if (route.path.match(/tour.html/)) mediumZoom(".main img", { background: "var(--vp-c-bg)" });
};
onMounted(() => {
    initZoom();
});
watch(
    () => props.image,
    () => nextTick(() => initZoom())
);
</script>
