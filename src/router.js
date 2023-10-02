// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutPage from './components/about.vue';
import ProjectsSection from './components/projects.vue'; 
import ContactForm from './components/contact.vue';

const routes = [
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactForm },
  { path: '/projects', component: ProjectsSection }, // Add a route for the ProjectsSection
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;