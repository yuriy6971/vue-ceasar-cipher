import { createStore } from 'vuex';


export default createStore({
  state: () => {
    return {
       userText : "",
      cipherText : "",
      shift : 3,
      alphabet: [
        {id : 1, litera : "а"},
        {id : 2, litera : "б"},
        {id : 3, litera : "в"},
        {id : 4, litera : "г"},
        {id : 5, litera : "д"},
        {id : 6, litera : "е"},
        {id : 7, litera : "є"},
        {id : 8, litera : "ж"},
        {id : 9, litera : "з"},
        {id : 10, litera : "и"},
        {id : 11, litera : "і"},
        {id : 12, litera : "ї"},
        {id : 13, litera : "й"},
        {id : 14, litera : "к"},
        {id : 15, litera : "л"},
        {id : 16, litera : "м"},
        {id : 17, litera : "н"},
        {id : 18, litera : "о"},
        {id : 19, litera : "п"},
        {id : 20, litera : "р"},
        {id : 21, litera : "с"},
        {id : 22, litera : "т"},
        {id : 23, litera : "у"},
        {id : 24, litera : "ф"},
        {id : 25, litera : "х"},
        {id : 26, litera : "ц"},
        {id : 27, litera : "ч"},
        {id : 28, litera : "ш"},
        {id : 29, litera : "щ"},
        {id : 30, litera : "ь"},
        {id : 31, litera : "ю"},
        {id : 32, litera : "я"},
      ],
      
      
    }
  },
  
  getters: {
    arrayUserText(state){
      return state.userText.split("")
    },

 
    arrayCipherText(state){
      return state.cipherText.split("")
    }
  },

  mutations: {
    updateFieldUserText (state,text) {
      state.userText = text.toLowerCase()
    },

    updateFieldCipherText (state,text){
       state.cipherText = text.toLowerCase()
    },

    updateShift (state,number) {
      state.shift = number
    },

   clearFieldUserText(state){
    state.userText = ""
   },

   clearFieldCipherText(state){
    state.cipherText = ""
   }
  },

  actions: {
   goCipher({state, getters, commit}) {
    let cipherTextArray = [];
    for(let char of getters.arrayUserText){
      let liter = state.alphabet.find(item => item.litera === char)
       if(liter){
        let {id} = liter
        let cipherLiter = state.alphabet.find(item => item.id === (id + state.shift)% state.alphabet.length)
        
        cipherTextArray = [...cipherTextArray,cipherLiter.litera]
       }
      
      else cipherTextArray = [...cipherTextArray, char]
    }
    commit('updateFieldCipherText', cipherTextArray.join(''))

  },

  goDeCipher({state,getters, commit}){
    let deCipherTextArray = []
     for(let char of getters.arrayCipherText){
      let liter = state.alphabet.find(item => item.litera === char)
      if(liter) {  
      let {id} = liter
      let deCipherLiter = state.alphabet.find(item => item.id === (id - state.shift)% state.alphabet.length)
      deCipherTextArray = [...deCipherTextArray,deCipherLiter.litera]
     }
     else deCipherTextArray = [...deCipherTextArray, char]
  }
    commit('updateFieldUserText', deCipherTextArray.join('') )
  }
},

  modules: {


  }


})
