import Vue from 'vue'
import VueRouter from 'vue-router'
import AllArtists from '../views/AllArtists.vue'
import AddArtist from '../views/AddArtist.vue'
import ArtistCard from '../views/ArtistCard.vue'
import EditArtist from '../views/EditArtist.vue'
 
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all-artists',
    component: AllArtists
  },
  {
    path: '/add-artist',
    name: 'add-artist',
    component: AddArtist
  },
  {
    path: '/artist/:id',
    name: 'artist',
    component: ArtistCard

  },
  {
    path: '/edit-artist/:id',
    name: 'edit-artist',
    component: EditArtist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
