<template>
    <modal height="auto" name="add-element-modal">
        <v-card>
            <v-card-title class="headline">
                Add Element
            </v-card-title>
            <v-card-text>
                <v-text-field v-model="elementTitle" label="Element Title"  ></v-text-field>
                <v-select v-model="type" :items="types" label="Element Type"></v-select>
            </v-card-text>
            <v-card-actions>
                <v-btn style="background-color: #00aeef; color: white;" @click="createElement()">Create Element</v-btn>
                <v-btn style="background-color: #00aeef; color: white;" @click="closeModal()">Close</v-btn>
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
    elementTitle: string = '';
    types: string[] = [
        'text',
        'image',
        'video'
    ];
    type: string = 'text';
    createElement() {
        const elementInfo = {
            title: this.elementTitle,
            type: this.type,
        }
        this.$emit('createElement', elementInfo);
        this.closeModal();
    }

    closeModal() {
        this.$modal.hide('add-element-modal');
    }
}
export default App;
</script>