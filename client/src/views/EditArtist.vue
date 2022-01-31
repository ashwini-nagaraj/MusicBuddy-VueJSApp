<template>
    <v-conatiner>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Edit Artist</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                    <v-text-field label="Artist Name" v-model="artist.artistName" prepend-icon="mdi-account-music" :rules="rules"></v-text-field>
                     <v-text-field label="Genre"  v-model="artist.genre" prepend-icon="mdi-music-note-sixteenth" :rules="rules"></v-text-field>
                     <v-textarea label="About" v-model="artist.about" prepend-icon="mdi-information" :rules="rules"></v-textarea>
                      <v-list-item>
      <v-list-item-content v-for="ps in artist" :key="ps._id">
        <v-list-item-title>{{ps.topThreeSongs}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
                     <v-file-input @change="selectFile" show-size counter multiple label="select an image"></v-file-input>
                     <v-img :src="`/${artist.image}`" width="120"></v-img>
                     <v-btn type="submit" class="mt-3" color="success">Update Artist</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-conatiner>
</template>
<script>
import API from '../api'
export default {
    data(){
        return{
            rules:[(value)=>!!value ||"This field is required"],
            artist:{
              artistName:'',
              genre:'',
              about:'',
              image:'',
              topThreeSongs:''
            },
            image:''
        };

    },
    async created(){
      const response = await API.getArtistByID(this.$route.params.id)
      this.artist= response;
    },
    methods:{

        selectFile(file){
            this.image=file[0];
        },
        async updateForm(){
          const formData= new FormData();
          formData.append('image',this.image)
          formData.append('artistName',this.artist.artistName)
          formData.append('genre',this.artist.genre)
          formData.append('about',this.artist.about)
          formData.append('topThreeSongs',this.artist.topThreeSongs)
           formData.append('old_image',this.artist.image)
          if(this.$refs.form.validate()){
              const response = await API.updateArtist(this.$route.params.id, formData);
              this.$router.push({name:'all-artists', params:{message:response.message}})
          }
        }
        
    }
}
</script>