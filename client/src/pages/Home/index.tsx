import "./styles.css";
import Logo from "../../assets/header.jpeg";
import { Select } from "../../components/Select";

export const Home = () => {
  const teamCategory = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <img className="home-img" src={Logo} alt="" />
      </header>
      <main className="home-main">
        <div className="home-form-div">
          <form className="home-form">
            <h1 className="home-title">
              Preencha os dados para criar o card do colaborador.
            </h1>
            <section className="nome-home">
              <label htmlFor="nome">Nome</label>
              <input
                className="inputs-home"
                id="nome"
                type="text"
                placeholder="Digite seu nome"
              />
            </section>
            <section className="nome-home">
              <label htmlFor="cargo">Cargo</label>
              <input
                className="inputs-home"
                id="cargo"
                type="text"
                placeholder="Digite seu cargo"
              />
            </section>
            <section className="nome-home">
              <label htmlFor="image">Imagem</label>
              <input
                className="inputs-home"
                id="image"
                type="text"
                placeholder="Informe o endereço da imagem"
              />
            </section>
            <Select options={teamCategory} />
          </form>
          <button className="home-button">Criar card</button>
        </div>
      </main>
    </div>
  );
};
