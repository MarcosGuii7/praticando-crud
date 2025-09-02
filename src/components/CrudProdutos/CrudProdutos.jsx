import { useState } from "react";
import "./CrudProdutos.css";

export default function CrudProdutos() {
  const [produtos, setProdutos] = useState([])
  const [form, setForm] = useState({ nome: "", preco: "" })

  function limparForm() {
    setForm({ id: null, nome: "", preco: "" })
  }

  function gerarId() {
    return Date.now() + Math.floor(Math.random() * 1000)
  }

  function adicionarProdutos() {
    const novo = {
      id: gerarId(),
      nome: form.nome,
      preco: form.preco
    }

    setProdutos([novo, ...produtos])
    limparForm()
  }

  function atualizarProduto() {
    setProdutos(produtos.map((p) => (
      p.id === form.id ? { ...p, nome: form.nome, preco: form.preco } : p
        )
      )
    )
    limparForm()
  }

  function onSubmit(e) {
    e.preventDefault()
    if (form.id == null) adicionarProdutos()
      else atualizarProduto()
  }

  function editarProduto(produto) {
    setForm({ id: produto.id, nome: produto.nome, preco: produto.preco})
  }

  function removerProduto(id) {
    setProdutos(produtos.filter((p) => p.id !== id))
  }

  return (
    <section className="crud">
      <h2>Cadastro de Produtos</h2>
      <form className="produto-form" onSubmit={onSubmit}>
        <div className="linha">
          <label>
            Produto
            <input
              name="nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Ex.: Teclado"
            />
          </label>

          <label>
            Preço (R$)
            <input
              name="preco"
              value={form.preco}
              onChange={(e) => setForm({ ...form, preco: e.target.value })}
              placeholder="Ex.: 199.90"
            />
          </label>
        </div>

        <div className="botoes">
          <button type="submit" className="btn primario">
            {form.id == null ? "Adicionar Produto" : "Salvar Alterações"}
          </button>

          {form.id != null && (
            <button type="button" className="btn secundario" onClick={limparForm}>
              Cancelar
            </button>
          )}
        </div>
      </form>

      <div className="lista">
        {produtos.length === 0 ? (
          <p className="vazio">Nenhum produto cadastrado!</p>
        ) : (
          <ul>
            {produtos.map((p) => (
              <li key={p.id}>
                <span>{p.nome} - R$ {p.preco}</span>
                <div className="acoes">
                  <button className="btn" onClick={() => editarProduto(p)}>Editar</button>
                  <button className="btn perigo" onClick={() => removerProduto(p.id)}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
