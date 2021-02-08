import { Button, Swipe, SwipeItem, Lazyload, Sticky, List } from 'vant';

export function setupVant(Vue) {
  // 按钮
  Vue.use(Button);
  // 轮播图
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(Lazyload);
  Vue.use(Sticky);
  Vue.use(List);
}