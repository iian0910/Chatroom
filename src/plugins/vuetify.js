import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import { mdi } from 'vuetify/iconsets/mdi'
export default createVuetify(
    {
        icons: {
            defaultSet: 'mdi',
            sets: {
                mdi
            }
        }
    }
)