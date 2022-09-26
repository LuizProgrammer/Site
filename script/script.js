class TrataDados {
  constructor() {
    this.cadastrados = [];
  }

  // inicio das funções de cadastro

  cadastro(){
    let usuario = this.camposCadastro();

    if (this.validaCampos(usuario)) {
      this.cadatraUsuario(usuario);
    }
  }

  camposCadastro(){

    let usuario = {};

    usuario.nome = document.getElementById('nome').value;
    usuario.cpf = document.getElementById('cpf').value;
    usuario.senha = document.getElementById('senha').value;

    return usuario;

  }

  validaCampos(usuario){

    let aviso = 'Preenchimento obrigatorio: \n';

    if (usuario.nome == '') {
      aviso += "- Nome  \n"
    }

    if (usuario.cpf == '') {
      aviso += "- CPF \n"
    }

    if (usuario.senha == '') {
      aviso += "- Senha \n"
    }

    if (aviso != 'Preenchimento obrigatorio: \n') {
      window.alert(aviso);
      return false;
    }

    return true;
  }

  cadatraUsuario(usuario){
    this.cadastrados.push(usuario);
  }

// fim das funções de cadastro


// inicio das funções de login

  login(){

    let login = this.camposLogin();
    if(this.validaLogin(login)){
    }

  }

  camposLogin(){
    let login = {};

    login.cpf = document.getElementById('cpfL').value;
    login.senha = document.getElementById('senhaL').value;

    return login;
  }

  validaLogin(login){

    let aviso = 'usuario não encontrado';

    if (this.cadastrados[0].usuario.cpf != login.cpf && this.cadastrados[0].usuario.senha != login.senha) {
      window.alert(aviso);
      return false;
    }
    else {
      window.alert("Sucesso");
      return true;
  }
}

//var dados = new TrataDados(); a classe está sendo "chamada" dentro dela mesma, possivel conflito

} //fechamento da classe
