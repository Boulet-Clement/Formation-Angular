export class AppareilService{
    appareils = [
        {
          id: 1,
          name:'Machine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name:'Télévision',
          status: 'allumé'
        },
        {
          id: 3,
          name:'Ordinateur',
          status: 'éteint'
        }
    ];

    getAppareilById(id: number){
      const appareil = this.appareils.find(appareilObject => {
        return appareilObject.id === id;
        }
      );
      if (appareil != null){
        return appareil;
      }else{
        return this.appareils[0]; 
        // Ceci est un rajout de ma part, on sera redirigé 
        //sur l'appareil 1 en cas de soucis pour le momment
      }
      
    }

    switchOnAll(){
        for (let appareil of this.appareils){
            appareil.status = "allumé";
        }
    }
    switchOffAll(){
        for (let appareil of this.appareils){
            appareil.status = "éteint";
        }
    }

    switchOnOne(index: number){
      this.appareils[index].status = 'allumé';
    }
    switchOffOne(index: number){
      this.appareils[index].status = 'éteint';
    }
}