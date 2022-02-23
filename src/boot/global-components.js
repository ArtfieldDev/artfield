import { Notify } from 'quasar'

import TermsFooter from '../components/termsFooter.vue';
import MainFooter from '../components/mainFooter.vue';
export default ({ app }) => {
  app.component('terms-footer', TermsFooter);
  app.component('main-footer', MainFooter);
}
