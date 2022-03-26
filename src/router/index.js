import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import FirstPage from '../views/FirstPage.vue'
import AnimationPage from '../views/AnimationPage.vue'
import GamePage from '../views/GamePage.vue'
import MusicPage from '../views/MusicPage.vue'
import VideoPage from '../views/VideoPage.vue'
import EditUserPage from '../views/EditUserPage.vue'
import Pop from '../components/Pop.vue'
const routes = [
  {
    path: '/',
    name: 'FirstPage',
    component: FirstPage
  },
  {
    path: '/AnimationPage',
    name: 'AnimationPage',
    component: AnimationPage
  },
  {
    path: '/Pop',
    name: 'Pop',
    component: Pop
  },
  {
    path: '/EditUserPage',
    name: 'EditUserPage',
    component: EditUserPage
  },
  {
    path: '/VideoPage',
    name: 'VideoPage',
    component: VideoPage
  },
  {
    path: '/GamePage',
    name: 'GamePage',
    component: GamePage
  },
  {
    path: '/MusicPage',
    name: 'MusicPage',
    component: MusicPage
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/RegisterPage',
    name: 'RegisterPage',
    component: RegisterPage
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
