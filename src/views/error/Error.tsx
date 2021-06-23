import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const PageError: React.FC<RouteComponentProps> = () => {
  return (
    <div className="error">
      <h1>Sahifani ko'rsatish mumkin emas</h1>
      <p>Ma'lumotlarni olish paytida muammo yuzaga keldi</p>
      <button className="button--primary">Tushunarli</button>
    </div>
  );
};

export default PageError;
