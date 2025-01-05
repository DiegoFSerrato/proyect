import React from 'react';
import Countdown from 'react-countdown';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const weddingDate = new Date('2025-03-15T15:00:00');

const CountdownTimer = () => {
  const renderer = ({ days, hours, minutes, seconds }: any) => (
    <div className="grid grid-cols-4 gap-8 max-w-2xl mx-auto">
      {[
        { value: days, label: 'Días' },
        { value: hours, label: 'Horas' },
        { value: minutes, label: 'Minutos' },
        { value: seconds, label: 'Segundos' }
      ].map(({ value, label }) => (
        <div key={label} className="text-center">
          <div className="text-4xl font-bold text-emerald-500">{value}</div>
          <div className="text-gray-600 font-cormorant">{label}</div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl text-center font-dancing mb-12">Nos casamos en</h2>
      <Countdown date={weddingDate} renderer={renderer} />
      <p className="text-center mt-8 text-gray-600 font-cormorant">
        {format(weddingDate, "d 'de' MMMM 'de' yyyy 'a las' HH:mm", { locale: es })}
      </p>
    </section>
  );
};

export default CountdownTimer;