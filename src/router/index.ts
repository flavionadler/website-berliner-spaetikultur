import {createRouter, createWebHistory} from 'vue-router';
import {RouteNames} from '../constants/enums.ts';
import HistoryDetailView from '../views/chapters/HistoryDetailView.vue';
import HomeView from '../views/HomeView.vue';
import CriticismDetailView from '../views/chapters/CriticismDetailView.vue';
import CultureDetailView from '../views/chapters/CultureDetailView.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.home,
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/history',
      name: RouteNames.history,
      component: HistoryDetailView,
      meta: {
        title: 'Geschichte'
      }
    },
    {
      path: '/culture',
      name: RouteNames.culture,
      component: CultureDetailView,
      meta: {
        title: 'Kultur'
      }
    },
    {
      path: '/criticism',
      name: RouteNames.criticism,
      component: CriticismDetailView,
      meta: {
        title: 'Kritik'
      }
    },
    {
      path: '/not-found',
      name: RouteNames.notFound,
      component: NotFound,
      meta: {
        title: 'Seite nicht gefunden'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/not-found'
    }
  ]
})

router.beforeEach(async (to, _from, next) => {
  if (to.meta && to.meta.title !== undefined) {
    document.title = to.meta.title?.toString() + ' | Spätikulur Berlin';
  }
  next();
});

export default router
