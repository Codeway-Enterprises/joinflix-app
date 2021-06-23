import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const PageError: React.FC<RouteComponentProps> = () => {
  return (
    <div className="error">
      <h1>Sahifani korsatish mumkin emas</h1>
      <p>Malumotlarni olish paytida muammo yuzaga keldi</p>
      <button className="button--primary" type="button">
        Tushunarli
      </button>
    </div>
  );
};

export default PageError;
