<template>
    <v-data-table :headers="getTableHeaders()" :items="courses">
        <template v-slot:items="props">
            <router-link tag="tr" :to="getCoursePath(props.item.id)">
                <td>{{ props.item.title }}</td>
                <td>{{ props.item.description }}</td>
                <td>{{ props.item.progress }}</td>
            </router-link>
        </template>
    </v-data-table>
</template>

<script lang="ts">
import axios from 'axios';
import { Component, Vue } from 'vue-property-decorator';
@Component({})
class App extends Vue {
    courses: object[] = [];
    tableHeaders: object[] = [
        {
            text: 'Course',
            value: 'id'
        },
        {
            text: 'Description',
            value: 'title'
        },
        {
            text: 'Progress',
            value: 'progress'
        }
    ];
    getCoursePath(id: string): string {
        return '/course/' + id;
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
            process.env.VUE_APP_SERVER_DOMAIN + '/api/courses';
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
