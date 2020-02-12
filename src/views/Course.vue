<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          :src="getImage()" 
        ></v-img><!-- This doesnt get new image source-->

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ getTitle() }}</h3>
            <div> {{ getDescription() }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn style="background-color: '#00aeef'" :to="getFirstPageUrl()">Start Course</v-btn>
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
    title: string = '';
    description: string = '';
    image: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/330px-Roasted_coffee_beans.jpg';
    pages: number = 0;

    setTitle(title: string): void {
        this.title = title;
    }
    
    setDescription(description: string): void {
        this.description = description;
    }

    setImage(image: string): void {
        this.image = image;
    }

    setCourseDetails(courseInfo: any): void { //TODO: Remove any type
        this.setTitle(courseInfo.title);
        this.setDescription(courseInfo.description);
        this.setImage(courseInfo.image);
    }

    getTitle(): string {
        return this.title;
    }

    getDescription(): string {
        return this.description;
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
