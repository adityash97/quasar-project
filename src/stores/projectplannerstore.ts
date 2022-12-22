import { defineStore } from 'pinia';
import {ref} from 'vue';
export default  defineStore('projectplanner', () => {
  const projectData = ref()

  const getProjectData = () =>{
    projectData.value =
      [
        {
          id:1,
          title : 'Elit nulla incididunt aute aute consectetur',
          details: 'Nostrud Lorem incididunt nostrud tempor fugiat voluptate dolore do enim adipisicing magna. Ullamco velit eu consectetur incididunt ullamco quis laboris. Velit excepteur Lorem sit culpa laboris occaecat incididunt amet pariatur laborum amet Lorem ad. Veniam duis pariatur exercitation nostrud nulla ullamco laboris quis non. Commodo minim non sunt veniam voluptate ex amet. Ea tempor officia enim reprehenderit tempor proident eu culpa est ad ipsum. Quis cupidatat quis cupidatat veniam Lorem.',
          completed:false

        },
        {
          id:2,
          title : 'Elit nulla incididunt aute aute consectetur',
          details: 'Nostrud Lorem incididunt nostrud tempor fugiat voluptate dolore do enim adipisicing magna. Ullamco velit eu consectetur incididunt ullamco quis laboris. Velit excepteur Lorem sit culpa laboris occaecat incididunt amet pariatur laborum amet Lorem ad. Veniam duis pariatur exercitation nostrud nulla ullamco laboris quis non. Commodo minim non sunt veniam voluptate ex amet. Ea tempor officia enim reprehenderit tempor proident eu culpa est ad ipsum. Quis cupidatat quis cupidatat veniam Lorem.',
          completed:true

        },
        {
          id:3,
          title : 'Elit nulla incididunt aute aute consectetur',
          details: 'Nostrud Lorem incididunt nostrud tempor fugiat voluptate dolore do enim adipisicing magna. Ullamco velit eu consectetur incididunt ullamco quis laboris. Velit excepteur Lorem sit culpa laboris occaecat incididunt amet pariatur laborum amet Lorem ad. Veniam duis pariatur exercitation nostrud nulla ullamco laboris quis non. Commodo minim non sunt veniam voluptate ex amet. Ea tempor officia enim reprehenderit tempor proident eu culpa est ad ipsum. Quis cupidatat quis cupidatat veniam Lorem.',
          completed:true

        },


      ]

  }

  const getCompletedProject = () =>{
    return projectData.value.filter((project : any)=> project.completed == true)
  }


  const getOnGoingProject = () =>{
    return projectData.value.filter((project:any)=> project.completed == false)
  }




  return {
    getProjectData,
    projectData,
    getCompletedProject,
    getOnGoingProject
  }
});
