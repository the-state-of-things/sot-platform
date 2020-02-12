<template>
    <div style="margin: 10px">
        <v-text-field v-bind:value="value.title" v-on:input="emitInput('title', $event.target.value)" label="Image Title" style="font-size: 28px;"></v-text-field>
        <v-text-field v-bind:value="value.text" v-on:input="emitInput('text', $event.target.value)" label="Image Text"></v-text-field>
        <v-text-field v-bind:value="value.url" v-on:input="emitInput('url', $event.target.value)" label="Image URL"></v-text-field>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
class App extends Vue {
    @Prop({default: {}})
    value: any //TODO: Remove explicit any

    emitInput(key: string, newValue: string) {
        this.value[key] = newValue;
        this.$emit('input', this.value);
    }

    mounted() {
    }
}
export default App;
</script>
