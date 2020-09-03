import React, { useState } from 'react';
import { FaGithubAlt, FaSearch } from 'react-icons/fa';
import api from '../../services/api';
import Container from '../../components/Container';
import { Form, SubmitButton, List, Owner, Loading, Star } from './styles';

function Main() {
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [user, setUser] = useState('');
  const [repositories, setRepositories] = useState([]);

  const handleClick = async () => {
    setRepositories([]);
    setLoading(true);
    if (!user) {
      setInvalid(true);
      setLoading(false);
      return;
    } else {
      setInvalid(false);
    }
    try {
      const response = await api.get(`/users/${user}/repos`);

      if (response) {
        setRepositories(response.data);
        setUser('');
      }
    } catch (err) {
      setInvalid(true);
    }
    setLoading(false);
  };

  // const markStar = async (repo) => {
  //   const response = await api.put(`/user/starred/${repo}`, null, {
  //     'Content-Length': 0,
  //   });
  //   console.log(response);
  // };

  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form invalid={invalid}>
        <input
          type="text"
          placeholder={!invalid ? 'Insira um nome de usuário do Github' : ''}
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <SubmitButton onClick={() => handleClick()}>
          <FaSearch />
        </SubmitButton>
      </Form>
      {loading && <Loading>Carregando...</Loading>}
      {repositories.length > 0 && (
        <Owner>
          <img
            src={repositories[0].owner.avatar_url}
            alt={repositories[0].owner.login}
          />
          <h1>{repositories[0].owner.login}</h1>
        </Owner>
      )}
      <List>
        {repositories &&
          repositories.length > 0 &&
          repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <a
                href={repository.html_url}
                rel="noopener noreferrer"
                target="_blank"
              >
                Detalhes
              </a>
            </li>
          ))}
      </List>
    </Container>
  );
}

export default Main;
