import {RouteNames} from '@/constants/enums.ts';
import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import HistoryDetailView from '@/views/chapters/HistoryDetailView.vue';
import CultureDetailView from '@/views/chapters/CultureDetailView.vue';
import CriticismDetailView from '@/views/chapters/CriticismDetailView.vue';
import NotFound from '@/views/NotFound.vue';
import BusinessModelDetailView from '@/views/chapters/BusinessModelDetailView.vue';
import Imprint from '@/views/legal/Imprint.vue';
import Privacy from '@/views/legal/Privacy.vue';
import Sources from '@/views/legal/Sources.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      left: 0,
    }
  },

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
      path: '/business-model',
      name: RouteNames.businessModel,
      component: BusinessModelDetailView,
      meta: {
        title: 'Geschäftsmodell'
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
      path: '/imprint',
      name: RouteNames.imprint,
      component: Imprint,
      meta: {
        title: 'Impressum'
      }
    },
    {
      path: '/privacy',
      name: RouteNames.privacy,
      component: Privacy,
      meta: {
        title: 'Datenschutz'
      }
    },
    {
      path: '/sources',
      name: RouteNames.sources,
      component: Sources,
      meta: {
        title: 'Quellen'
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
    document.title = to.meta.title?.toString() + ' | Spätikultur Berlin';
  }
  next();
});

export default router
