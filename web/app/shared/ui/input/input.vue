<template>
  <component
    :is="tag"
    :type="type"
    :value="modelValue"
    v-bind="$attrs"
    @input="handleInput"
    @blur="$emit('blur')"
    @focus="$emit('focus')"
    :class="inputClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  tag?: string;
  type?: string;
  modelValue?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  tag: "input",
  type: "text",
  modelValue: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur"): void;
  (e: "focus"): void;
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};

const inputClasses = computed(
  () =>
    "w-full rounded-lg border outline-none transition disabled:cursor-not-allowed disabled:opacity-60 bg-white text-(--primary-black) pl-[27px] placeholder:text-(--input-placeholder)"
);
</script>