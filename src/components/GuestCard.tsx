import React from 'react';
import { GuestGroup } from '../types/guest';
import { Users, User, UserPlus } from 'lucide-react';

interface GuestCardProps {
  group: GuestGroup;
}

const GuestCard: React.FC<GuestCardProps> = ({ group }) => {
  const getIcon = () => {
    switch (group.type) {
      case 'family':
        return <Users className="text-emerald-500" size={24} />;
      case 'individual-plus-one':
        return <UserPlus className="text-emerald-500" size={24} />;
      default:
        return <User className="text-emerald-500" size={24} />;
    }
  };

  const getTitle = () => {
    switch (group.type) {
      case 'family':
        return group.familyName || 'Invitación Familiar';
      case 'individual-plus-one':
        return 'Invitación Personal + Acompañante';
      default:
        return 'Invitación Personal';
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        {getIcon()}
        <h3 className="text-2xl font-dancing">{getTitle()}</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-lg font-semibold mb-2">
            {group.type === 'family' ? 'Miembros de la familia:' : 'Invitados:'}
          </h4>
          <div className="space-y-2">
            {group.familyMembers.map((member, index) => (
              <p key={index} className="text-gray-600 font-cormorant text-lg">
                {member}
              </p>
            ))}
            {group.type === 'individual-plus-one' && !group.companionName && (
              <p className="text-gray-500 font-cormorant text-lg italic">
                + 1 acompañante
              </p>
            )}
          </div>
        </div>

        {group.dietaryRestrictions && group.dietaryRestrictions.length > 0 && (
          <div>
            <h4 className="text-lg font-semibold mb-2">Restricciones alimenticias:</h4>
            <ul className="list-disc list-inside space-y-1">
              {group.dietaryRestrictions.map((restriction, index) => (
                <li key={index} className="text-gray-600">
                  {restriction}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestCard;