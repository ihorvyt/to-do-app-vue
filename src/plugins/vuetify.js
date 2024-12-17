// plugins/vuetify.js
import { createVuetify } from 'vuetify';
import {VContainer, VCol, VRow, VBtn,  VTextField} from 'vuetify/components';

const vuetify = createVuetify({
    components: {
        VContainer,
        VCol,
        VRow,
        VBtn,
        VTextField
    },
});
export default vuetify;
