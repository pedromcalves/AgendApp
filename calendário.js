class calendário {

    constructor() {

        this.eventos = new Array();

        this.eventos[0] = new evento("Companhia Dança Oriental", "Dança", "15/03/2020", "21h", "15€", "50 minutos", "150 lugares");
        this.eventos[1] = new evento("Syro", "Concerto", "06/03/2020", "21:30", "10€", "90 minutos", "360 lugares");
        this.eventos[2] = new evento("ArteViva", "Teatro", "27/03/2020", "21:30", "8€", "60 minutos", "150 lugares");
        this.eventos[3] = new evento("Laura Villain", "Stand-up Comedy", "31/02/2021", "25h", "1000€", "TODÁNOITE", "5000 lugares");
        this.eventos[4] = new evento("Daaz", "Concerto", "05/05/2020", "22h", "10€", "75 minutos", "360 lugares");
        this.eventos[5] = new evento("Projector", "Teatro", "21/06/2020", "21h", "8€", "60 minutos", "150 lugares");

    }
   

    search(artista) {
        var eventos = new Array();
        if(eventos === "Syro"){
            console.log("Syro")
        } else {
            alert("Nenhum evento encontrado")
        }
        return eventos;
    }
}
