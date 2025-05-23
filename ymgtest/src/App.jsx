import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const BelgeSayfasi = () => {
  const [belgeler, setBelgeler] = useState([]);
  const [form, setForm] = useState({ name: '', konu: '' });

  useEffect(() => {
    axios.get('http://localhost:8080/api/get-all')
      .then(response => setBelgeler(response.data))
      .catch(error => console.error('Veri alınamadı:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/add-belge', form)
      .then(response => {
        setBelgeler([...belgeler, response.data]);
        setForm({ name: '', konu: '' });
      })
      .catch(error => console.error('Veri eklenemedi:', error));
  };

  return (
    <div className="belge-container">
      <h2 className="belge-title">Yeni Belge Ekle</h2>
      <form onSubmit={handleSubmit} className="belge-form">
        <input
          type="text"
          placeholder="Belge Adı"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Konu"
          value={form.konu}
          onChange={(e) => setForm({ ...form, konu: e.target.value })}
          required
        />
        <button type="submit">Ekle</button>
      </form>

      <h3 className="belge-subtitle">Kayıtlı Belgeler</h3>
      <ul className="belge-list">
        {belgeler.map((belge, index) => (
          <li key={belge.id || index}>
            <strong>{belge.name}</strong>: {belge.konu}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BelgeSayfasi;
