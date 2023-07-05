const {createApp}=Vue;

createApp({
    data(){
        return{
            emails:[],

        }
    },
    method:{
        
    
    },
    created(){

        for (let index = 0; index < 10; index++) {
                
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
           .then((response)=>{
               const result=response.data.response;
               this.emails.push(result);
               console.log("result",result);
               console.log("emails",this.emails)
           })
            
        }
        


    }

}).mount("#app")