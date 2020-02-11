<template>
    <modal height="auto" name="add-page-modal">
        <v-card>
            <v-card-title class="headline">
                Add Page
            </v-card-title>
            <v-card-text>
                <v-text-field v-model="pageTitle" label="Page Title" filled></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn style="background-color: #00aeef; color: white;" @click="createPage()">Create Page</v-btn>
                <v-btn style="background-color: #00aeef; color: white;" @click="this.$modal.hide('add-page-modal')">Close</v-btn>
            </v-card-actions>
        </v-card>
    </modal>
</template>

<script lang="ts">
import {
    Vue,
    Component
} from 'vue-property-decorator';
@Component({})
class App extends Vue {
    pageTitle: string = '';

    createPage() {
        this.$emit('createPage', this.pageTitle);
        this.$modal.hide('add-page-modal');
    }
}
export default App;
</script>