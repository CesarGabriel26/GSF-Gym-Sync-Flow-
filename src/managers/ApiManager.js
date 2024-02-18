//! https://5f7ed39b-b1d0-46af-8561-1104b0ac5285-00-bgu5xr3asd0k.janeway.replit.dev/

const URL = "https://5f7ed39b-b1d0-46af-8561-1104b0ac5285-00-bgu5xr3asd0k.janeway.replit.dev"

export function RegisterUser(newUser) {
    return new Promise((resolve, reject) => {
      fetch(`${URL}/AddUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao adicionar usuário');
          }
          return response.json();
        })
        .then(data => {
          //console.log('Usuário adicionado com sucesso:', data);
          resolve(data); // Resolvendo a Promise com os dados
        })
        .catch(error => {
          console.error('Erro ao adicionar usuário:', error);
          reject(error); // Rejeitando a Promise com o erro
        });
    });
}

export function loginUser(credentials) {
    const { email, password } = credentials;
    const localurl = `${URL}/Users/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  
    return new Promise((resolve, reject) => {
      fetch(localurl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao autenticar usuário');
          }
          return response.json();
        })
        .then(data => {
          //console.log('Usuário autenticado com sucesso:', data);
          resolve(data); // Resolvendo a Promise com os dados
        })
        .catch(error => {
          console.error('Erro ao autenticar usuário:', error);
          reject(error); // Rejeitando a Promise com o erro
        });
    });
}

export function GetUserDataById(Id) {
    const localurl = `${URL}/Users/getById?id=${Id}`;
  
    return new Promise((resolve, reject) => {
      fetch(localurl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao obter data do usuário ');
          }
          return response.json();
        })
        .then(data => {
          //console.log('data obtida com sucesso:', data);
          resolve(data); // Resolvendo a Promise com os dados
        })
        .catch(error => {
          console.error('Erro ao obter data do usuário:', error);
          reject(error); // Rejeitando a Promise com o erro
        });
    });
}

export function UpdateUser(id, updatedUserData) {
  const localUrl = `${URL}/Users/edit/${id}`;

  return new Promise((resolve, reject) => {
    fetch(localUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao atualizar o usuário');
        }
        return response.json();
      })
      .then(updatedUser => {
        // console.log('Usuário atualizado com sucesso:', updatedUser);
        resolve(updatedUser);
      })
      .catch(error => {
        console.error('Erro ao atualizar o usuário:', error);
        reject(error);
      });
  });
}