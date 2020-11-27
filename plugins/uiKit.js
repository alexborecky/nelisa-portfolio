import Vue from 'vue'

import navigation from '@/components/navigation/navigation.vue'
import sideBar from '@/components/navigation/sideBar.vue'
import Tabs from '@/components/navigation/Tabs.vue'

import ProjectPage from '@/components/project-page/ProjectPage.vue'
import ProjectInfo from '@/components/project-page/project-components/ProjectInfo.vue'
import Heading from '@/components/project-page/project-components/Heading.vue'
import Stills from '@/components/project-page/project-components/Stills.vue'

import Narrative from '@/components/grids/Narrative.vue'
import Documentaries from '@/components/grids/Documentaries.vue'
import MusicVideos from '@/components/grids/MusicVideos.vue'
import ProjectPost from '@/components/grids/ProjectPost.vue'

Vue.component('navigation', navigation)
Vue.component('sideBar', sideBar)
Vue.component('ProjectPage', ProjectPage)
Vue.component('ProjectInfo', ProjectInfo)
Vue.component('Heading', Heading)
Vue.component('Stills', Stills)
Vue.component('Tabs', Tabs)
Vue.component('Narrative', Narrative)
Vue.component('ProjectPost', ProjectPost)
Vue.component('Documentaries', Documentaries)
Vue.component('MusicVideos', MusicVideos)