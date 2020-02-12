<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="getImage()" 
        ></v-img><!-- This doesnt get new image source-->

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Complete!</h3>
            <div> {{ getCompleteText() }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn background-color="#00aeef" to="/">Back to Home</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
@Component({})
class App extends Vue {
    completeText: string = '';
    image: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/330px-Roasted_coffee_beans.jpg';
    pages: number = 0;
    
    setCompleteText(completeText: string): void {
        this.completeText = completeText;
    }

    setImage(image: string): void {
        this.image = image;
    }

    setCourseDetails(courseInfo: any): void { //TODO: Remove any type
        this.setCompleteText(courseInfo.completeText);
        this.setImage(courseInfo.image);
    }

    getCompleteText(): string {
        return this.completeText;
    }

    getImage(): string {
        return this.image;
    }

    getPages(): number {
        return this.pages;
    }

    getFirstPageUrl(): string {
        return this.$route.path + '/1';
    }

    mounted() {
        const url =
            process.env.VUE_APP_SERVER_DOMAIN + '/api/course/' + this.$route.params.id;
        axios
            .get(url)
            .then(response => {
                this.setCourseDetails(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }
}
export default App;
</script>
