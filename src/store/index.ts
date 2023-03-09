import { createPinia } from 'pinia';
import type { App } from 'vue';

const pinia = createPinia();

function registerStore(app: App<Element>) {
  // 1.使用pinia
  app.use(pinia);

  // 2.进行一些希望main.ts一执行就能进行的操作，比如加载本地的数据，动态注册路由
}

export default registerStore;
