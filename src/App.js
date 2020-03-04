import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevForm from './components/DevForm';
import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data]);
  }


  async function handleUpdateDev(data) {
    let response = await api.put('/devs/update', data);
    response = await api.get('/devs');

    setDevs(response.data);
  }
  
  async function removeDev(dev, index) {

    const { github_username } = dev;    

    const response = await api.delete(`/devs/${github_username}`);

    const listDevs = Array.from(devs);
    listDevs.splice(index, 1);
    setDevs(listDevs);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map((dev, index) => (
            <DevItem key={dev._id} dev={dev} removeDev={() => removeDev(dev, index)} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;