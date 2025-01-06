import React from 'react';

const WelcomeMessage = () => {
  return (
    <div className="text-center max-w-3xl mx-auto px-4">
      <div className="space-y-4 font-cormorant">
        <p className="text-xl text-gray-800">
          ¡Estamos tan emocionados de compartir con ustedes nuestro día especial!
        </p>
        <p className="text-xl text-gray-800">
          ¡Nos casamos! Y nos encantaría contar con tu presencia para celebrar juntos este gran paso.
        </p>
        <p className="text-xl text-gray-800">
          ¡Nos haría mucha ilusión que estuvieras con nosotros para hacer de este día algo inolvidable!
        </p>
        <p className="text-xl text-gray-800">
          <strong>Por favor confirma tu asistencia antes del 20 de febrero</strong>
        </p>
        
      </div>
    </div>
  );
};

export default WelcomeMessage;