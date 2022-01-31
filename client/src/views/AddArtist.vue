<template>
    <v-conatiner>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add new artist</v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                    <v-text-field label="Artist" v-model="artist.artistName" prepend-icon="mdi-account-music" :rules="rules"></v-text-field>
                     <v-text-field label="Genre"  v-model="artist.genre" prepend-icon="mdi-music-note-sixteenth" :rules="rules"></v-text-field>
                     <v-textarea label="About" v-model="artist.about" prepend-icon="mdi-information" :rules="rules"></v-textarea>
                     <v-row>
                           <v-col cols="14" sm="8" md="4"><v-text-field v-model="artist.topThreeSongs" label="YT Link: Top Favourite Song" outlined :rules="rules"></v-text-field>
                          </v-col>
                        </v-row>
                     <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="select an image"></v-file-input>
                     <v-btn type="submit" class="mt-3" color="green">Add Artist</v-btn>
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
              topThreeSongs: ''
            },
            image:''
        };

    },
    methods:{

        selectFile(file){
            this.image=file[0];
        },
        async submitForm(){
          const formData= new FormData();
          formData.append('image',this.image)
          formData.append('artistName',this.artist.artistName)
          formData.append('genre',this.artist.genre)
          formData.append('about',this.artist.about)
           formData.append('topThreeSongs',this.artist.topThreeSongs)
          if(this.$refs.form.validate()){
              const response = await API.addArtist(formData);
              this.$router.push({name:'all-artists', params:{message:response.message}})
          }
        }
        
    }
}
</script>