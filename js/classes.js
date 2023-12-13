
class Usuario {
    constructor(login, senha) {
      this.login = login;
      this.senha = senha;
    }
  
    validarLogin() {
      return this.login.includes('@') && this.login.includes('.')
        ? 'Login válido'
        : 'Login inválido';
    }
  }
  
  const usuario1 = new Usuario('rafael@verzel.com.br', '1234');
  console.log(usuario1.login, usuario1.validarLogin());
  
  const usuario2 = new Usuario('joao', 'huasuhdauhs');
  console.log(usuario2.login, usuario2.validarLogin());

  class Administrador extends Usuario {
    constructor(login, senha, resumoProfissional) {
      super(login, senha);
      this.resumoProfissional = resumoProfissional;
    }
  }
  
  const administrador1 = new Administrador('administrador@admin.com', 'meauivchq', 'Resumo profissional');
  console.log(administrador1.login, administrador1.validarLogin());
  console.log(usuario2.resumoProfissional, administrador1.resumoProfissional)