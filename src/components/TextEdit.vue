<template>
    <div style="margin: 10px">
        <v-text-field v-model="title" @input="emitInput('title')" label="Text Title" style="font-size: 28px;"></v-text-field>
        <v-text-field v-model="text" @input="emitInput('text')" label="Text"></v-text-field>
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

    emitInput(key: string) {
        switch (key) {
            case 'title':
                this.$emit('input', key, this.title);
                break;
            case 'text':
                this.$emit('input', key, this.text);
                break;
        }
    }

    mounted() {
        this.title = this.elementInfo.title;
        this.text = this.elementInfo.text;
    }
}
export default App;
</script>
