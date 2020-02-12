<template>
    <div>
        <component v-bind:is="childType" :elementInfo="elementInfo" @input="updateElement"></component>
        <v-btn style="background-color: #00aeef; color: white; float: right;" @click="saveElement()">Save Changes</v-btn>
    </div>
</template>
<style scoped>
.list-group-item:hover {
    background-color: lightgray;
}
</style>
<script lang="ts">
import axios from 'axios';
//import AddElementModal from './../components/AddElementModal.vue';
import TextEdit from './../components/TextEdit.vue';
import ImageEdit from './../components/ImageEdit.vue';
import VideoEdit from './../components/VideoEdit.vue';
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {
        'TextEdit': TextEdit,
        'ImageEdit': ImageEdit,
        'VideoEdit': VideoEdit
    }
})
class App extends Vue {
    elementInfo: any = {};
    childType: string = '';

    updateElement(key: string, newValue: string) {
        this.elementInfo[key] = newValue;
    }

    saveElement() {
        console.log('SAVE', this.elementInfo);
    }

    setElementInfo(elementInfo: any): void {
        this.elementInfo = elementInfo.elementInfo;
        this.childType = this.determineChildType(this.elementInfo.type);
    }

    determineChildType(type: string): string {
        switch (type) {
            case 'text':
                return 'TextEdit';
            case 'image':
                return 'ImageEdit';
            case 'video':
                return 'VideoEdit';
            default:
                return '';
                //Throw error
        }
    }

    mounted() {
        const url =
            'http://' + process.env.VUE_APP_SERVER_DOMAIN + '/api/course/' + this.$route.params.id + '/' + this.$route.params.page + '/' + this.$route.params.element + '/edit';
        axios
            .get(url)
            .then(response => {
                this.setElementInfo(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }
}
export default App;
</script>
