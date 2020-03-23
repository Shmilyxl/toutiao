import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/layout.vue'
import Home from '../views/index/home.vue'
import Hot_news from '../views/hot_news/hot_news.vue'
import Society from '../views/society/society.vue'
import Amusement from '../views/amusement/amusement.vue'
import Car from '../views/amusement/amusement.vue'
import Fashion from '../views/fashion/fashion.vue'
import Finance from '../views/finance/finance.vue'
import Game from '../views/game/game.vue'
import Internation from '../views/internation/internation.vue'
import Military from '../views/military/military.vue'
import Sport from '../views/sports/sport.vue'
import Techology from '../views/techology/tecchology.vue'
import Search from '../views/index/search.vue'
import Message from '../views/index/message.vue'
import Detail from '../views/detail/detail.vue'
import Channels from '../views/select/select.vue'
import Easy from '../views/easy/easy.vue'
import Education from '../views/education/education.vue'
import Find from '../views/find/find.vue'
import Food from '../views/food/food.vue'
import History from '../views/history/history.vue'
import Live from '../views/live/live.vue'
import Story from '../views/story/story.vue'
import Travel from '../views/travel/travel.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/index/home'
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children: [{
                path: 'home',
                name: 'home',
                component: Home,
            }, {
                path: 'hot_news',
                name: 'hot_news',
                component: Hot_news
            },
            {
                path: 'society',
                name: 'society',
                component: Society
            },
            {
                path: 'amusement',
                name: 'amusement',
                component: Amusement
            },
            {
                path: 'car',
                name: 'car',
                component: Car
            },
            {
                path: 'fashion',
                name: 'fashion',
                component: Fashion
            },
            {
                path: 'finance',
                name: 'finance',
                component: Finance
            },
            {
                path: 'game',
                name: 'game',
                component: Game
            },
            {
                path: 'internation',
                name: 'internation',
                component: Internation
            },
            {
                path: 'military',
                name: 'military',
                component: Military
            },
            {
                path: 'sport',
                name: 'sport',
                component: Sport
            },
            {
                path: 'techology',
                name: 'techology',
                component: Techology
            },
            {
                path: 'easy',
                name: 'easy',
                component: Easy
            },
            {
                path: 'education',
                name: 'education',
                component: Education
            },
            {
                path: 'find',
                name: 'find',
                component: Find
            },
            {
                path: 'food',
                name: 'food',
                component: Food
            },
            {
                path: 'history',
                name: 'history',
                component: History
            },
            {
                path: 'live',
                name: 'live',
                component: Live
            },
            {
                path: 'story',
                name: 'story',
                component: Story
            },
            {
                path: 'travel',
                name: 'travel',
                component: Travel
            },
        ],
    },
    {
        path: "/search",
        name: 'search',
        component: Search
    },
    {
        path: "/message",
        name: "message",
        component: Message
    },
    {
        path: "/detail",
        name: 'detail',
        component: Detail
    },
    {
        path: '/index/channels',
        name: "channels",
        component: Channels
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router