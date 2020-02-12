<template>
    <div>
        <div style="margin: 10px;">
            <v-text-field v-model="title" label="Course Title" style="font-size: 28px;"></v-text-field>
            <v-text-field v-model="description" label="Course Description" filled></v-text-field>
            <v-text-field v-model="image" label="Course Image URL" filled></v-text-field>
            <v-text-field v-model="completeText" label="Course Completed Text" filled></v-text-field>
        </div>
        <draggable :list="pages" class="list-group" handle=".handle">
            <div style="height: 50px;" class="list-group-item" v-for="(page, index) in pages" :key="page.title">
                <v-btn style="width: 50%; text-align: left;" class="handle">{{ page.title }} </v-btn>
                <v-btn style="color: #00aeef; background-color: white; float: right;" @click="deletePage(index + 1)"><v-icon>delete</v-icon></v-btn>
                <v-btn style="color: #00aeef; background-color: white; float: right;" :to="getEditPageURL(index + 1)"><v-icon>edit</v-icon></v-btn>
            </div>
        </draggable>
        <v-btn style="background-color: #00aeef; color: white; float: right;" @click="addPage()">Add Page</v-btn>
        <v-btn style="background-color: #00aeef; color: white; float: right;" @click="savePages()">Save Changes</v-btn>
        <AddPageModal @createPage="createPage"></AddPageModal>
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
import AddPageModal from './../components/AddPageModal.vue';
import { Component, Vue } from 'vue-property-decorator';
@Component({
    components: {
        'AddPageModal': AddPageModal,
        'draggable': draggable
    }
})
class App extends Vue {
    title: string = '';
    description: string = '';
    completeText: string = '';
    image: string = '';
    pages: object[] = [
        {
            title: 'TITLE'
        }
    ];

    createPage(pageTitle: string) {
        const newPage = {
            title: pageTitle
        };
        this.pages.push(newPage);
        this.savePages();
    }

    addPage() {
        this.$modal.show('add-page-modal');
    }

    savePages() {
        console.log('SAVE');
    }

    deletePage(pageIndex: number) {
        console.log('DELETE');
    }

    getEditPageURL(pageIndex: number) {
        return '/course/' + this.$route.params.id + '/' + pageIndex + '/edit'
    }

    setCourseInfo(courseInfo: any): void {
        this.title = courseInfo.title;
        this.description = courseInfo.description;
        this.completeText = courseInfo.completeText;
        this.image = courseInfo.image;
        this.pages = courseInfo.pages;
    }

    mounted() {
        const url =
            'http://www.' + process.env.VUE_APP_SERVER_DOMAIN + '/api/course/' + this.$route.params.id + '/edit';
        axios
            .get(url)
            .then(response => {
                this.setCourseInfo(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }
}
export default App;
</script>
