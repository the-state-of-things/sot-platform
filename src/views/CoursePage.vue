<template>
  <v-layout>
      <v-layout>
            <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <component v-bind:is="childType" v-bind:pageBody="pageBody"></component>
                <v-card-actions>
                    <v-btn background-color="#00aeef" :to="getNextPath()">Next</v-btn>
                </v-card-actions>
            </v-card>
            </v-flex>
        </v-layout>
        
  </v-layout>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
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
    pageNumber: number = 1;
    pageBody: object = {};
    childType: string = '';
    totalPages: number = 1;

    setPageNumber(pageNumber: number): void {
        this.pageNumber = pageNumber;
    }
    
    getPageNumber(): number {
        return this.pageNumber;
    }

    setPageBody(pageBody: object): void {
        this.pageBody = pageBody;
    }

    setChildType(childType: string): void {
        this.childType = childType;
    }

    setTotalPages(totalPages: number): void {
        this.totalPages = totalPages;
    }

    getTotalPages(): number {
        return this.totalPages;
    }

    getPageBody(): any {
        return this.pageBody;
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
        this.setPageNumber(parseInt(this.$route.params.page));
        this.setPageBody(courseData.body);
        this.setTotalPages(courseData.pages);
        const childType = this.determineChildType(this.getPageBody().type);
        this.setChildType(childType);
    }

    mounted() {
        const url =
            'http://api.' + process.env.VUE_APP_SERVER_DOMAIN + '/course/' + this.$route.params.id + '/' + this.$route.params.page;
        axios
            .get(url)
            .then(response => {
                this.setPageContent(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }

    getNextPath(): string {
        let pageNo = this.getPageNumber();
        let ret = (pageNo >= this.getTotalPages()) ?
            '/complete/' + this.$route.params.id
            : '/course/' + this.$route.params.id + '/' + (pageNo + 1);
        return ret;
    }
}
export default App;
</script>
