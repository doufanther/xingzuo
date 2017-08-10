import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
import main from '../components/main';

Vue.use(iView);

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    }
    
  ]
})
