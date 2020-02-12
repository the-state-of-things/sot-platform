<template>
    <div>
    <v-data-table :headers="getTableHeaders()" :items="courses">
        <template v-slot:items="props">
            <router-link tag="tr" :to="getCoursePath(props.item.id)">
                <td>{{ props.item.title }}</td>
                <td>{{ props.item.description }}</td>
            </router-link>
        </template>
    </v-data-table>
    <v-btn background-color="#00aeef" to="/create-course">Create Course</v-btn>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
@Component({})
class App extends Vue {
    courses: object[] = [];
    tableHeaders: object[] = [
        {
            text: 'Title',
            value: 'title'
        },
        {
            text: 'Description',
            value: 'description'
        }
    ];
    getCoursePath(id: string): string {
        return '/course/' + id + '/edit';
    }
    getCourses(): object[] {
        return this.courses;
    }
    setCourses(courses: object[]): void {
        this.courses = courses;
    }
    getTableHeaders(): object[] {
        return this.tableHeaders;
    }
    mounted() {
        const url =
            'http://www.' + process.env.VUE_APP_SERVER_DOMAIN + '/api/edit-courses';
        axios
            .get(url)
            .then(response => {
                this.setCourses(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }
}
export default App;
</script>
