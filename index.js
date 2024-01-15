"use script"

class Usuario {
    constructor(id, nome, enderecoContato, historicoReservas) {
      this.id = id;
      this.nome = nome;
      this.enderecoContato = enderecoContato;
      this.historicoReservas = historicoReservas || [];
    }
  }
  
  class Propriedade {
    constructor( endereco, capacidadeHospedes, numeroQuartos, precoPorNoite, disponibilidade) {
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
  
    fazerLogin(nomeUsuario) {
      // Implementar lógica de login
    }
  
    fazerCadastro(usuario) {
      // Implementar lógica de cadastro
    }
  
    sairDoPrograma() {
      // Implementar lógica de logout
    }
  
    // ... Métodos para as operações mencionadas ...
  }
  
  // Exemplo de uso
  const sistema = new Sistema();
  
  // Criação de usuários, propriedades, etc.
  const usuario1 = new Usuario(1, 'Rafael El Shafie', 'Rua A, 123');
  const propriedade1 = new Propriedade(1, 'Pousada A', 'Rua B, 456', 10, 5, 100, true);
  const reserva1 = new Reserva(1, 1, 1, '2024-01-15', '2024-01-20', 500, 'pendente');
  const anuncio1 = new Anuncio(1, 1, 1, 'Oferta Especial', 'Descricao da oferta', 'ativo');
  
  // Adicionar ao sistema
  sistema.usuarios.push(usuario1);
  sistema.propriedades.push(propriedade1);
  sistema.reservas.push(reserva1);
  sistema.anuncios.push(anuncio1);
  
  // Exemplo de login
  sistema.fazerLogin('Rafael El Shafie');
  
 
  
