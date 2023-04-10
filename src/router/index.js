import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieDetailsView from '../views/MovieDetailsView.vue'
import TrendingView from '../views/TrendingView.vue'
import PopularView from '../views/PopularView.vue'
import TopRatedView from '../views/TopRatedView.vue'
import NowPlayingView from '../views/NowPlayingView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // eventually add id and props true
    path: '/movie-details',
    name: 'movie-details',
    component: MovieDetailsView
  },
  {
    path: '/trending',
    name: 'trending',
    component: TrendingView
  },
  {
    path: '/popular',
    name: 'popular',
    component: PopularView
  },
  {
    path: '/top-rated',
    name: 'top-rated',
    component: TopRatedView
  },
  {
    path: '/now-playing',
    name: 'now-playing',
    component: NowPlayingView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
