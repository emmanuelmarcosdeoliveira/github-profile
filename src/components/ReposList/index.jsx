import { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
  const [repos, SetRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);
  useEffect(() => {
    setEstaCarregando(true);
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then((res) => res.json())
      .then((resJson) => {
        setTimeout(() => {
          setEstaCarregando(false);
          SetRepos(resJson);
        }, 2000);
      });
  }, [nomeUsuario]);
  return (
    <div className="container">
      {estaCarregando ? (
        <h2 className={styles.status}>Carregando...</h2>
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.description}>
                <div className={styles.itemName}>
                  <b>nome</b> {name}
                </div>
                <div className={styles.itemLanguage}>
                  <b>Linguagem</b> {language}
                </div>
              </div>
              <a className={styles.itemLink} target="_blank" href={html_url}>
                Visitar no GitHub
              </a>{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
