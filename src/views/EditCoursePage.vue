<template>
    <div>
        <div style="margin: 10px;">
            <v-text-field v-model="title" label="Course Title" style="font-size: 28px;"></v-text-field>
        </div>
        <v-card-title>
            Elements
        </v-card-title>
        <draggable :list="elements" class="list-group" handle=".handle">
            <div style="height: 50px;" class="list-group-item" v-for="(element, index) in elements" :key="element.title">
                <v-btn style="width: 50%; text-align: left;" class="handle">{{ element.title }} </v-btn>
                <v-btn style="color: #00aeef; background-color: white; float: right;" @click="deleteElement(index + 1)"><v-icon>delete</v-icon></v-btn>
                <v-btn style="color: #00aeef; background-color: white; float: right;" :to="getEditElementURL(index + 1)"><v-icon>edit</v-icon></v-btn>
            </div>
        </draggable>
        <v-btn style="background-color: #00aeef; color: white; float: right;" @click="addElement()">Add Element</v-btn>
        <v-btn style="background-color: #00aeef; color: white; float: right;" @click="saveElements()">Save Changes</v-btn>
        <AddElementModal @createElement="createElement"></AddElementModal>
    </div>
</template>
<style scoped>
.list-group-item:hover {
    background-color: lightgray;
}
</style>
<script lang="ts">
import axios from 'axios';
import draggable from 'vuedraggable';
import AddElementModal from './../components/AddElementModal.vue';
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {
        'AddElementModal': AddElementModal,
        'draggable': draggable
    }
})
class App extends Vue {
    title: string = '';
    elements: object[] = [
        {
            type: '',
            title: 'TITLE',
            text: ''
        }
    ];

    createElement(elementInfo: any) {
        const newElement: any = {
            type: elementInfo.type,
            title: elementInfo.title,
            text: ''
        };
        switch(newElement.type) {
            case 'text':
                //Do nothing
                break;
            case 'image':
            case 'video':
                newElement.url = '';
                break;
            default:
                // code block
        }
        this.elements.push(newElement);
        this.saveElements();
    }

    addElement() {
        this.$modal.show('add-element-modal');
    }

    saveElements() {
        console.log('SAVE ELEMENT');
    }

    deleteElement(elementIndex: number) {
        console.log('DELETE ELEMENT');
    }

    getEditElementURL(elementIndex: number) {
        return '/course/' + this.$route.params.id + '/' + this.$route.params.page + '/' + elementIndex + '/edit'
    }

    setElements(pageData: any): void {
        this.elements = pageData.elements;
    }

    setPageInfo(pageInfo: any): void {
        this.title = pageInfo.title;
        this.elements = pageInfo.elements;
    }

    mounted() {
        const url =
            'http://api.' + process.env.VUE_APP_SERVER_DOMAIN + '/course/' + this.$route.params.id + '/' + this.$route.params.page + '/edit';
        axios
            .get(url)
            .then(response => {
                this.setPageInfo(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }
}
export default App;
</script>
