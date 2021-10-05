<template>
    <div>
        <input type="text" :placeholder="placeholder" class="placeholder-black w-80 outline-none py-3 border-b-2 border-Neutral-Grey5 rounded" :value="model" @input="model = $event.target.value">
    </div>
</template>
<script>
export default {
    props: ['placeholder','model']
}
</script>