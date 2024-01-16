"use script"
  
  const prompt = require('prompt-sync')();

  class Usuario {
    constructor(id, nome, enderecoContato, historicoReservas) {
      this.id = id;
      this.nome = nome;
      this.enderecoContato = enderecoContato;
      this.historicoReservas = historicoReservas || [];
    }
  }
  
  class Propriedade {
    constructor(endereco, capacidadeHospedes, numeroQuartos, precoPorNoite, disponibilidade) {
      this.endereco = endereco;
      this.capacidadeHospedes = capacidadeHospedes;
      this.numeroQuartos = numeroQuartos;
      this.precoPorNoite = precoPorNoite;
      this.disponibilidade = disponibilidade || true;
    }
  }
  
  class Reserva {
    constructor(idPropriedade, idUsuario, checkIn, checkOut, valorTotal, statusPagamento) {
      this.idPropriedade = idPropriedade;
      this.idUsuario = idUsuario;
      this.checkIn = checkIn;
      this.checkOut = checkOut;
      this.valorTotal = valorTotal;
      this.statusPagamento = statusPagamento || 'pendente';
    }
  }
  
  class Anuncio {
    constructor(idProprietario, titulo, descricao, status) {
      this.idProprietario = idProprietario;
      this.titulo = titulo;
      this.descricao = descricao;
      this.status = status || 'ativo';
    }
  }
  
  class Sistema {
    constructor() {
      this.usuarios = [];
      this.propriedades = [];
      this.reservas = [];
      this.anuncios = [];
      this.usuarioLogado = null;
    }
  
    fazerLogin() {
      // Implementar lógica para login
      const nomeUsuario = prompt('Digite seu nome de usuário: ');
    }

// Seguir essa lógica com os demais comandos 
    
    fazerCadastro() {
      // Implementar lógica de cadastro 
      const nome = prompt('Digite seu nome: ');
      const enderecoEmail = prompt('Digite seu endereço de email: ');
      const enderecoContato = prompt('Digite seu endereço de contato: '); 
    }
  
    sairDoPrograma() {
      // Implementar lógica para logout
      const sair = prompt("Deseja sair ?");
      if (sair == true) {
      const confirmarSaida = prompt("Confirme se quiser sair.")
    }
}

  verMeusDados() {
    if (this.usuarioLogado) {
      console.log('Seus dados:');
      console.log(`Nome: ${this.usuarioLogado.nome}`);
      console.log(`Endereço de Contato: ${this.usuarioLogado.enderecoContato}`);
    } 
    // Implementar lógica para ver os dados
    else {
      console.log('Nenhum usuário logado.');
    }
  }

  modificarMeusDados() {
    if (this.usuarioLogado) {
      const novoNome = prompt('Digite seu novo nome: ');
      const novoEnderecoContato = prompt('Digite seu novo endereço de contato: ');

      this.usuarioLogado.nome = novoNome;
      this.usuarioLogado.enderecoContato = novoEnderecoContato;

      console.log('Dados modificados com sucesso.');
    }
    // Implementar lógica para modificar os dados
    else {
      console.log('Nenhum usuário logado.');
    }
  }

  verListaDePropriedades() {
    console.log('Lista de Propriedades (Ordem Alfabética):');
    // Implementar lógica para exibir propriedades em ordem alfabética
    this.propriedades.sort((a, b) => a.nome.localeCompare(b.nome));
    this.propriedades.forEach(propriedade => {
      console.log(`${propriedade.nome} - Capacidade: ${propriedade.capacidadeHospedes} pessoas`);
    });
  }

  verListaDeReservas() {
    console.log('Lista de Reservas (Ordem Cronológica):');
    // Implementar lógica para exibir reservas em ordem cronológica
    this.reservas.sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn));
    this.reservas.forEach(reserva => {
      console.log(`Reserva #${reserva.id} - Check-in: ${reserva.checkIn}, Check-out: ${reserva.checkOut}`);
    });
  }

  verListaDeAnuncios() {
    console.log('Lista de Anúncios (Ordem Alfabética):');
    // Implementar lógica para exibir anúncios em ordem alfabética
    this.anuncios.sort((a, b) => a.titulo.localeCompare(b.titulo));
    this.anuncios.forEach(anuncio => {
      console.log(`${anuncio.titulo} - ${anuncio.descricao}`);
    });
  }

  reservarPropriedade() {
    if (this.usuarioLogado) {
      const propriedadeID = prompt('Digite o ID da propriedade que deseja reservar: ');
      // Implementar lógica para reservar propriedade
    } else {
      console.log('Nenhum usuário logado.');
    }
  }

  cancelarReserva() {
    if (this.usuarioLogado) {
      console.log("Para o cancelamento ser efetuado, o pedido deve haver pelo menos 24hrs de antecedência!")
      const reservaID = prompt('Digite o ID da reserva que deseja cancelar: ');
      // Implementar lógica para cancelar reserva
    } else {
      console.log('Nenhum usuário logado.');
    }
  } 

    adicionarPropriedade() {
        if (this.usuarioLogado) {
            const nome = prompt('Digite o nome da nova propriedade: ');
            const endereco = prompt('Digite o endereço da nova propriedade: ');
            const capacidadeHospedes = prompt('Digite a capacidade de hóspedes: ');
            const numeroQuartos = prompt('Digite o número de quartos: ');
            const precoPorNoite = prompt('Digite o preço por noite: ');
            // Implementar lógica para aadcionar propriedade
      const novaPropriedade = new Propriedade(
        this.propriedades.length + 1,
        nome,
        endereco,
        parseInt(capacidadeHospedes),
        parseInt(numeroQuartos),
        parseFloat(precoPorNoite),
        true
      );

      this.propriedades.push(novaPropriedade);

      console.log(`Propriedade "${nome}" adicionada com sucesso.`);
    } else {
      console.log('Nenhum usuário logado.');
    }
  }

  excluirPropriedade() {
    if (this.usuarioLogado) {
      const propriedadeID = prompt('Digite o ID da propriedade que deseja excluir: ');
      // Implementar lógica para excluir propriedade
      const propriedadeIndex = this.propriedades.findIndex(propriedade => propriedade.id === parseInt(propriedadeID));

      if (propriedadeIndex !== -1) {
        const propriedade = this.propriedades[propriedadeIndex];

        if (!this.reservas.some(reserva => reserva.idPropriedade === propriedade.id)) {
          // Não há reservas para a propriedade, pode ser excluída
          this.propriedades.splice(propriedadeIndex, 1);

          // Excluir anúncios relacionados a essa propriedade
          this.anuncios = this.anuncios.filter(anuncio => anuncio.idPropriedade !== propriedade.id);

          console.log(`Propriedade "${propriedade.nome}" excluída com sucesso.`);
        } else {
          console.log('Não é possível excluir a propriedade. Existem reservas associadas a ela.');
        }
      } else {
        console.log('Propriedade não encontrada.');
      }
    } else {
      console.log('Nenhum usuário logado.');
    }
  }

  fazerAnuncio() {
    if (this.usuarioLogado) {
      const propriedadeID = prompt('Digite o ID da propriedade para a qual deseja fazer o anúncio: ');
      const titulo = prompt('Digite o título do anúncio: ');
      const descricao = prompt('Digite a descrição do anúncio: ');

      const novoAnuncio = new Anuncio(
        this.anuncios.length + 1,
        this.usuarioLogado.id,
        parseInt(propriedadeID),
        titulo,
        descricao,
        'ativo'
      );

      this.anuncios.push(novoAnuncio);

      console.log('Anúncio criado com sucesso.');
    } else {
      console.log('Nenhum usuário logado.');
    }
  }

  excluirAnuncio() {
    if (this.usuarioLogado) {
      const anuncioID = prompt('Digite o ID do anúncio que deseja excluir: ');
      // Implementar lógica para excluir anúncio
      const anuncioIndex = this.anuncios.findIndex(anuncio => anuncio.id === parseInt(anuncioID));

      if (anuncioIndex !== -1) {
        const anuncio = this.anuncios[anuncioIndex];
        this.anuncios.splice(anuncioIndex, 1);

        console.log(`Anúncio "${anuncio.titulo}" excluído com sucesso.`);
      } else {
        console.log('Anúncio não encontrado.');
      }
    } else {
      console.log('Nenhum usuário logado.');
    }
  }

  avaliarEstadia() {
    if (this.usuarioLogado) {
      const reservaID = prompt('Digite o ID da reserva que deseja avaliar: ');
      const avaliacao = prompt('Digite sua avaliação (de 1 a 5): ');

      // Implementar lógica para avaliar estadia
    } else {
      console.log('Nenhum usuário logado.');
    }
  }

  visualizarAvaliacoes() {
    if (this.usuarioLogado) {
      console.log('Avaliações disponíveis:');
      // Implementar lógica para visualizar avaliações
    } else {
      console.log('Nenhum usuário logado.');
    }
  }
}  

/*Obs: Precisei pesquisar bastante para realizar esse codigo, mudei um pouco do que mandei ontem de acordo com as orientações que me enviaram, alguns detalhes eu tive que pesquisar bastante para finalmnete acertar, mas espero que esteja correto!!*/

  