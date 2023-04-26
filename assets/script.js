const { createApp } = Vue

createApp({

    data() {
        return {
            novaTarefa: "",
            tarefas: []
        }
    },

    methods: {
        cadastrarTarefa() {
            if (this.novaTarefa != "") {
                if (!this.tarefas.includes(this.novaTarefa)) {
                    this.tarefas.push(this.novaTarefa)
                    this.novaTarefa = ""
                }else{
                    alert("Tarefa já existe")
                }
            }else{
                alert("Informe a tarefa")
            }
            this.novaTarefa = ""
        }
    }

}).mount('#app')