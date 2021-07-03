import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
state: {
       currentFlag : undefined,
    //    currentSchemaId : undefined,
    //    currentTableId : undefined,

},
mutations: {
    setFlagvalue(state, newConnectionId){
           state.currentFlag = newConnectionId
       },
    //    setCurrentSchemaId(state, newSchemaId){
    //        state.currentSchemaId = newSchemaId
    //    },
    //    setTableId(state, newTableId){
    //        state.currentTableId = newTableId
    //    }
},
actions: {
},
modules: {
}
});