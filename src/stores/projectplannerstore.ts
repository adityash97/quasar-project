import { defineStore } from 'pinia';
import {ref} from 'vue';
export default  defineStore('projectplanner', () => {
  const projectData = ref()

  const getProjectData = () =>{
    projectData.value = 
      [
        {
          title : 'Elit nulla incididunt aute aute consectetur',
          details: 'Nostrud Lorem incididunt nostrud tempor fugiat voluptate dolore do enim adipisicing magna. Ullamco velit eu consectetur incididunt ullamco quis laboris. Velit excepteur Lorem sit culpa laboris occaecat incididunt amet pariatur laborum amet Lorem ad. Veniam duis pariatur exercitation nostrud nulla ullamco laboris quis non. Commodo minim non sunt veniam voluptate ex amet. Ea tempor officia enim reprehenderit tempor proident eu culpa est ad ipsum. Quis cupidatat quis cupidatat veniam Lorem.'

        },
        {
          title : 'Elit nulla incididunt aute aute consectetur',
          details: 'Nostrud Lorem incididunt nostrud tempor fugiat voluptate dolore do enim adipisicing magna. Ullamco velit eu consectetur incididunt ullamco quis laboris. Velit excepteur Lorem sit culpa laboris occaecat incididunt amet pariatur laborum amet Lorem ad. Veniam duis pariatur exercitation nostrud nulla ullamco laboris quis non. Commodo minim non sunt veniam voluptate ex amet. Ea tempor officia enim reprehenderit tempor proident eu culpa est ad ipsum. Quis cupidatat quis cupidatat veniam Lorem.'

        },
        {
          title : 'Elit nulla incididunt aute aute consectetur',
          details: 'Nostrud Lorem incididunt nostrud tempor fugiat voluptate dolore do enim adipisicing magna. Ullamco velit eu consectetur incididunt ullamco quis laboris. Velit excepteur Lorem sit culpa laboris occaecat incididunt amet pariatur laborum amet Lorem ad. Veniam duis pariatur exercitation nostrud nulla ullamco laboris quis non. Commodo minim non sunt veniam voluptate ex amet. Ea tempor officia enim reprehenderit tempor proident eu culpa est ad ipsum. Quis cupidatat quis cupidatat veniam Lorem.'

        },


      ]

    return projectData
  }




  return {
    getProjectData,
  }
});
