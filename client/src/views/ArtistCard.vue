<template>
   <v-container>
       <v-row no-gutters>
           <v-col sm="10" class="pa-4 mx-auto">
               <v-card class="pa-2">
                   <v-img :src="`/${poster.image}`"></v-img>
                   <v-card-actions class="pb-0">
                       <v-row class="mt-1 mx-1">
                           <v-col sm="2">
                               <v-btn small outlined color="green">{{poster.genre}}</v-btn>
                           </v-col>
                           <v-col sm="10" class="d-flex justify-end">
                               <v-btn color="success" text :to="{name:'edit-artist', params:{id:poster._id}}">Edit</v-btn>
                               <v-btn color="red" text @click="removeArtist(poster._id)">Delete</v-btn>
                           </v-col>
                       </v-row>
                   </v-card-actions>
                   <v-card-subtitle class="headline">
                       <h3>{{poster.artistName}}</h3>
                   </v-card-subtitle>
                   <v-card-text class="white--text">
                     <p>{{poster.about}}</p>
                   </v-card-text>
                   <v-card-subtitle>
           <ul>
    <li>
        <a v-bind:href="poster.topThreeSongs">Top Fav Song</a>
        
    </li>
  </ul>
                   </v-card-subtitle>
               </v-card>
           </v-col>
       </v-row>
   </v-container>
</template>

<script>
import API from '../api';
export default {
    data(){
        return{
            poster:{}
        };
    },
    async created(){
        const response = await API.getArtistByID(this.$route.params.id);
        this.poster = response;
    },
     methods:{
        async removeArtist(id){
        const response = await API.deleteArtist(id);
         this.$router.push({name:'all-artists', params:{message:response.message}})
        }
    }
}
</script>