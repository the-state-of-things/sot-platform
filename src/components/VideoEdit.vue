<template>
    <div style="margin: 10px">
        <v-text-field v-model="title" @input="emitInput('title')" label="Video Title" style="font-size: 28px;"></v-text-field>
        <v-text-field v-model="text" @input="emitInput('text')" label="Video Text"></v-text-field>
        <v-text-field v-model="url" @input="emitInput('url')" label="Video URL"></v-text-field>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
class App extends Vue {
    @Prop({default: {}})
    elementInfo: any //TODO: Remove explicit any

    title: string = '';
    text: string = '';
    url: string = '';

    emitInput(key: string) {
        switch (key) {
            case 'title':
                this.$emit('input', key, this.title);
                break;
            case 'text':
                this.$emit('input', key, this.text);
                break;
            case 'url':
                this.$emit('input', key, this.url);
                break;
        }
    }

    mounted() {
        this.title = this.elementInfo.title;
        this.text = this.elementInfo.text;
        this.url = this.elementInfo.url;
    }
}
export default App;
</script>
