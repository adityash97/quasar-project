import { boot } from 'quasar/wrappers';
import VueDraggable from 'vuedraggable';
export default boot(async ({ app }) => {
  app.component('VueDraggable', VueDraggable);
});

export { VueDraggable };
