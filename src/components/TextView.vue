<template>
    <v-card-title primary-title>
    <div>
        <h3 class="headline mb-0">{{ getTitle() }}</h3>
        <div> {{ getText() }} </div>
    </div>
    </v-card-title>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
class App extends Vue {
    @Prop({default: {}})
    pageBody: any //TODO: Remove explicit any
    title: string = '';
    text: string = '';
    
    setTitle(title: string): void {
        this.title = title;
    }

    setText(text: string): void {
        this.text = text;
    }

    getPageBody(): any {
        return this.pageBody;
    }

    getTitle(): string {
        return this.title;
    }

    getText(): string {
        return this.text;
    }

    mounted() {
        const pageBody = this.getPageBody();
        this.setTitle(pageBody.title);
        this.setText(pageBody.text);
    }
}
export default App;
</script>
