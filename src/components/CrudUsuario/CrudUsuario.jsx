import { useState } from "react";
import "./CrudUsuario.css";

export default function CrudUsuario() {
  const [usuarios, setUsuarios] = useState([])
  const [form, setForm] = useState({ nome: "", sobrenome: "", email: "", senha: "" })

  function limparForm() {
    setForm({ id: null, nome: "", sobrenome: "", email: "", senha: "" })
  }

  function gerarId() {
    return Date.now() + Math.floor(Math.random() * 1000)
  }

  function adicionarUsuarios() {
    const novo = {
      id: gerarId(),
      nome: form.nome,
      sobrenome: form.sobrenome,
      email: form.email,
      senha: form.senha,
    }

    setUsuarios([novo, ...usuarios])
    limparForm()
  }

  function atualizarUsuarios() {
    setUsuarios(usuarios.map((u) => (
      u.id === form.id ? { ...u, ...form } : u
        )
      )
    )
    limparForm()
  }

  function onSubmit(e) {
    e.preventDefault()
    if (form.id == null) adicionarUsuarios()
      else atualizarUsuarios()
  }

  function editarUsuarios(usuario) {
    setForm({ ...usuario})
  }

  function removerUsuarios(id) {
    setUsuarios(usuarios.filter((u) => u.id !== id))
  }

  return (
    <section className="crud">
      <h2>Cadastro de Usuários</h2>
      <form className="usuario-form" onSubmit={onSubmit}>
        <div className="linha">
          <label>
            Nome
            <input
              name="nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Ex.: Marcos"
            />
          </label>

          <label>
            Sobrenome
            <input
              name="sobrenome"
              value={form.sobrenome}
              onChange={(e) => setForm({ ...form, sobrenome: e.target.value })}
              placeholder="Ex.: Guilherme"
            />
          </label>

          <label>
            E-mail
            <input
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Ex.: exemplo@gmail.com"
            />
          </label>

          <label>
            Senha
            <input
              name="senha"
              type="password"
              value={form.senha}
              onChange={(e) => setForm({ ...form, senha: e.target.value })}
              placeholder="Digite a senha"
            />
          </label>
        </div>

        <div className="botoes">
          <button type="submit" className="btn primario">
            {form.id == null ? "Adicionar Usuário" : "Salvar Alterações"}
          </button>

          {form.id != null && (
            <button type="button" className="btn secundario" onClick={limparForm}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="lista">
        {usuarios.length === 0 ? (
          <p className="vazio">Nenhum usuário cadastrado!</p>
        ) : (
          <ul>
            {usuarios.map((u) => (
              <li key={u.id}>
                <span>{u.nome} {u.sobrenome} - {u.email}</span>
                <div className="acoes">
                  <button className="btn" onClick={() => editarUsuarios(u)}>Editar</button>
                  <button className="btn perigo" onClick={() => removerUsuarios(u.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}