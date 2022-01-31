<style>
.myFont {
  font-family: 'Montserrat'; 
  font-weight: 500;
}
</style>

<template>
  <v-app id="inspire" class="myFont">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="green--text">
            Artists
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    <v-list dense>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          class="green--text"
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="green--text">MusicBuddy</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>


<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
        { title: 'My Artists', icon: 'mdi-music-box', link: '/' },
         { title: 'Add Artist', icon: 'mdi-music-note-plus', link: '/add-artist' }
      ],
     }),
     methods: {
    customColor(text) {
      return ('green--text');
    }
  }
  }
</script>