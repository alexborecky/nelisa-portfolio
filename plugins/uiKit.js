import Vue from 'vue'

import navigation from '@/components/navigation/navigation.vue'
import sideBar from '@/components/navigation/sideBar.vue'
import ProjectPage from '@/components/project-page/ProjectPage.vue'
import ProjectInfo from '@/components/project-page/project-components/ProjectInfo.vue'
import Heading from '@/components/project-page/project-components/Heading.vue'
import Stills from '@/components/project-page/project-components/Stills.vue'

Vue.component('navigation', navigation)
Vue.component('sideBar', sideBar)
Vue.component('ProjectPage', ProjectPage)
Vue.component('ProjectInfo', ProjectInfo)
Vue.component('Heading', Heading)
Vue.component('Stills', Stills)