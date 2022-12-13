import { defineStore } from 'pinia';
import {ref} from 'vue'
export default defineStore('testroutes',() => {
    const jobs = ref([{}])
    const personDetails = ref({})

    jobs.value = [
        {id:1,name:'Ram', email:'Ram@gmail.com'},
        {id:2,name:'Bob', email:'bob32@gmail.com'},
        {id:3,name:'Bob Marly', email:'bob323@gmail.com'}
    ]

    const getPersonDetails = (id : any) => {
        for(let i=0;i<jobs.value.length;i++){
            if(jobs.value[i].id == id){
                return jobs.value[i]
            }
        }
    }


    return {
        jobs,
        getPersonDetails,
      };
});
