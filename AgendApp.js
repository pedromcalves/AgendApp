//Ficheiro inicial de JS. A partir de onde todos os outros ramificam

class AgendApp {


    constructor() {
        //coleção de eventos
        this.calendário = new calendário(); 

        //acrescentar um novo evento
        this.calendário.eventos[6] = new evento("Al Berto", "Poesia", "29/03/2019", "23h", "10€", "45 minutos", "150 lugares");

        //acrescentar um novo campo
        this.calendário.eventos[5].contacto = 931234567;

        //coleção de artistas
        this.artistas = new artistas();

        //interface gráfico
        // this.AgendaGUI = new AgendaGUI();
    }
}

