<template>
    <v-layout>
        <component v-bind:is="childType" v-bind:elementBody="elementBody"></component>
    </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import TextView from './../components/TextView.vue';
import ImageView from './../components/ImageView.vue';
import VideoView from './../components/VideoView.vue';
@Component({
    components: {
        'TextView': TextView,
        'ImageView': ImageView,
        'VideoView': VideoView
    }
})
class App extends Vue {
    @Prop({
        default: {}
    })
    elementBody: any //TODO: Remove explicit any
    childType: string = '';

    setElementBody(elementBody: object): void {
        this.elementBody = elementBody;
    }

    setChildType(childType: string): void {
        this.childType = childType;
    }

    getElementBody(): any {
        return this.elementBody;
    }

    determineChildType(type: string): string {
        switch (type) {
            case 'text':
                return 'TextView';
            case 'image':
                return 'ImageView';
            case 'video':
                return 'VideoView';
            default:
                return '';
                //Throw error
        }
    }

    setPageContent(courseData: any): void { //TODO: Change type
        const childType = this.determineChildType(this.getElementBody().type);
        this.setChildType(childType);
    }

    mounted() {
        this.setPageContent(this.elementBody);
    }

}
export default App;
</script>
