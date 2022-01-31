<template>
<v-container>
  <v-alert border="left" close-text="Close Alert" color="green" dark dismissible v-if="this.$route.params.message">
    {{this.$route.params.message}}
  </v-alert>
  <v-row>
    <v-col sm="4" class="pa-3" v-for="artist in artists" :key="artist._id">
      <v-card class="pa-1" :to="{name:'artist', params:{id:artist._id}}">
        <v-img height="250" :src="`/${artist.image}`"></v-img>
        <v-btn class="ml-4 mt-3" small outlined color="green">
          {{artist.genre}}
        </v-btn>
        <v-card-title class="headline">
          {{artist.artistName}}
        </v-card-title>
        <v-card-text class="py 0">
          <p>{{artist.about.substring(0,50)+"..."}}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template> 
<script>

import API from '../api'

  export default {
    name: 'all-artists',
    data(){
      return{
        artists:[],
        };
        },
        async created(){
          this.artists= await API.getAllArtists();
        }
  };
</script>
