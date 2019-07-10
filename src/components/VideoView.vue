<template>
    <v-card-title primary-title>
        <div>
            <h3 class="headline mb-0">{{ getTitle() }}</h3>
            <iframe v-bind:src="url" width="80%"></iframe>
            <div> {{ getText() }} </div>
        </div>
    </v-card-title>
</template>

<script lang="ts">
    import {
        Component,
        Prop,
        Vue
    } from 'vue-property-decorator';
    @Component({})
    class App extends Vue {
        @Prop({
            default: {}
        })
        pageBody: any //TODO: Remove explicit any
        title: string = '';
        text: string = '';
        url: string = '';

        setTitle(title: string): void {
            this.title = title;
        }

        setText(text: string): void {
            this.text = text;
        }

        setUrl(url: string): void {
            this.url = url;
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
            this.setUrl(pageBody.url);
        }
    }
    export default App;
</script>