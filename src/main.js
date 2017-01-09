import Vue from 'vue'
import App from './App'
// import Home from './components/CompetitionDept/CompetitionDept'
// import Hello from './components/CompetitionDept/peopleManagement'
// import ManageMatch from './components/CompetitionDept/manageMatch'
// import McanCodeJoinGroup from './components/CompetitionDept/scanCodeJoinGroup'
// import ManageArtisan from './components/CompetitionDept/ManageArtisan'
// import DelegateArtisan from './components/CompetitionDept/delegateArtisan'
// import ArtisanManagement from './components/CompetitionDept/artisanManagement'
// import RefereeManagement from './components/CompetitionDept/refereeManagement'
// import ConfirmScore from './components/CompetitionDept/confirmScore'
import VueRouter from 'vue-router'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueRouter)

const router = new VueRouter({history: true})

router.map({
  '/competitionDept': {
    component: require('./components/CompetitionDept/CompetitionDept.vue')
  },
  '/home': {
    component: require('./components/CompetitionDept/peopleManagement.vue')
  },
  '/manageMatch': {
    component: require('./components/CompetitionDept/manageMatch.vue')
  },
  '/scanCodeJoinGroup': {
    component: require('./components/CompetitionDept/scanCodeJoinGroup.vue')
  },
  '/manageArtisan': {
    component: require('./components/CompetitionDept/ManageArtisan.vue')
  },
  '/delegateArtisan': {
    component: require('./components/CompetitionDept/delegateArtisan.vue')
  },
  '/artisanManagement': {
    component: require('./components/CompetitionDept/artisanManagement.vue')
  },
  '/refereeManagement': {
    component: require('./components/CompetitionDept/refereeManagement.vue')
  },
  '/confirmScore': {
    component: require('./components/CompetitionDept/confirmScore.vue')
  },
  '/hehe': {
    component: require('./components/CompetitionDept/hehe.vue')
  },
  '/promotionManage': {
    component: require('./components/CompetitionDept/promotionManage')
  },
  '/prePromotinManage': {
    component: require('./components/CompetitionDept/prePromotionManage')
  },
  '/crmDept': {
    component: require('./components/CrmDept/crmDept')
  },
  '/crmPeopleManage': {
    component: require('./components/CrmDept/crmPeopleManage')
  },
  '/manageTeam': {
    component: require('./components/CrmDept/manageTeam')
  },
  '/newTeamInfo': {
    component: require('./components/CrmDept/newTeamInfo')
  },
  '/checkPlayer': {
    component: require('./components/CrmDept/checkPlayer')
  },
  '/authInfo': {
    component: require('./components/CrmDept/authInfo')
  },
  '/urgeMatch': {
    component: require('./components/CrmDept/urgeMatch')
  },
  '/contactDept': {
    component: require('./components/ContactDept/contactDept')
  },
  '/viewService': {
    component: require('./components/ContactDept/viewService')
  },
  '/viewSpace': {
    component: require('./components/ContactDept/viewSpace')
  },
  '/contactPeopleManage': {
    component: require('./components/ContactDept/contactPeopleManage')
  },
  '/matchManage': {
    component: require('./components/MatchManage/matchManage')
  },
  '/operationSituation': {
    component: require('./components/MatchManage/operationSituation')
  },
  '/selectMatch': {
    component: require('./components/MatchManage/selectMatch')
  },
  '/divisionOwner': {
    component: require('./components/MatchManage/divisionOwner')
  },
  '/selectDivision': {
    component: require('./components/MatchManage/selectDivision')
  },
  '/joinArtisanTeam': {
    component: require('./components/CompetitionDept/joinArtisanTeam')
  },
  '/myCoupon': {
    component: require('./components/Coupon/myCoupon')
  },
  '/couponDetail': {
    component: require('./components/Coupon/couponDetail')
  },
  '/registar': {
    component: require('./components/Coupon/register')
  },
  '/receiveSuccess': {
    component: require('./components/Coupon/receiveSuccess')
  },
  '/matchDetail': {
    component: require('./components/Coupon/matchDetail')
  },
  '/refereeTask': {
    component: require('./components/CompetitionDept/refereeTask')
  },
  '/test': {
    component: require('./components/MatchManage/test')
  },
  '/selectArisan': {
    component: require('./components/CompetitionDept/selectArisan')
  },
  '/selectReferee': {
    component: require('./components/CompetitionDept/selectReferee')
  },
  '/selectPreTeam': {
    component: require('./components/CompetitionDept/selectPreTeam')
  },
  '/matchService': {
    component: require('./components/MatchService/matchService')
  },
  '/makeMatch': {
    component: require('./components/CrmDept/makeMatch')
  },
  '/recruitTeam': {
    component: require('./components/CrmDept/recruitTeam')
  },
  '/contactPersonInfo': {
    component: require('./components/CrmDept/contactPersonInfo')
  },
  '/matchTeam': {
    component: require('./components/CrmDept/matchTeam')
  },
  '/teamMatchInfo': {
    component: require('./components/CrmDept/teamMatchInfo')
  }
})

router.start(App, '#app')

