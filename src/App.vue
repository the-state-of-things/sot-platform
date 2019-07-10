<template>
    <v-app>
        <v-toolbar tabs color="#00aeef" dark dense class="hidden-sm-and-down">
            <img src="logo.png" />
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-tabs color="transparent">
                    <v-tab to="/learn">Learn</v-tab>
                    <v-tab to="/create">Create</v-tab>
                    <v-tab to="/logout">Logout</v-tab>
                </v-tabs>
            </v-toolbar-items>
        </v-toolbar>
        <v-toolbar tabs color="#00aeef" dark dense class="hidden-md-and-up">
            <img src="logo.png" />
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-tabs color="transparent">
                    <v-tab to="/learn"><v-icon>school</v-icon></v-tab>
                    <v-tab to="/create"><v-icon>create</v-icon></v-tab>
                    <v-tab to="/logout"><v-icon>exit_to_app</v-icon></v-tab>
                </v-tabs>
            </v-toolbar-items>
        </v-toolbar>
        <router-view :key="$route.fullPath"> </router-view>
    </v-app>
</template>
