const AccesoProhibidoException = use('App/exceptions/AccesoProhibidoException');
const RecursoNoEncontradoException = use('App/exceptions/RecursoNoEncontradoException');

class AutorizacionService {
  verificarPermiso(recurso, user) {
    if (!recurso){
      throw new RecursoNoEncontradoException();
    }

    if (recurso.user_id !== user.id) {
      throw new AccesoProhibidoException();
    };
  }
}

module.exports = new AutorizacionService();
