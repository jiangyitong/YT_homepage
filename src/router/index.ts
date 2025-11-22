import { createRouter, createWebHistory, type RouterScrollBehavior } from 'vue-router'
const AboutPage = () => import('../pages/AboutPage.vue')
const UniISPPage = () => import('../pages/UniISPPage.vue')
const FiveCamDatasetPage = () => import('../pages/FiveCamDatasetPage.vue')
const NVComposerPage = () => import('../pages/NVComposerPage.vue')
const ToonComposerPage = () => import('../pages/ToonComposerPage.vue')

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  return { top: 0 }
}

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior,
  routes: [
    { path: '/', name: 'About Me', component: AboutPage },
    { path: '/project/uni-isp', name: 'Uni-ISP', component: UniISPPage },
    { path: '/dataset/five-cam', name: 'FiveCam Dataset', component: FiveCamDatasetPage },
    { path: '/project/nvcomposer', name: 'NVComposer', component: NVComposerPage },
    { path: '/project/tooncomposer', name: 'ToonComposer', component: ToonComposerPage },
    { path: '/:catchAll(.*)', name: 'Home Page', component: AboutPage },
  ]
})

export default router
