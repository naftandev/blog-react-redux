import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/components/UserCard.scss';
import userDefault from '../assets/statics/avatar.png';

const UserCard = () => {
  const users = useSelector((state) => state.users.data);

  return users.map((user) => (
    <div className='UserCard' key={user.id}>
      <div className='UserCard__info'>
        <div className='UserCard__details'>
          <strong className='UserCard__name'>{user.name}</strong>
          <div className='UserCard__city'>
            <span>{user.address.city}</span>
            <FontAwesomeIcon icon={faMapMarkedAlt} />
          </div>
          <div className='UserCard__company'>
            <span>{user.company.name}</span>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
        </div>
        <figure className='UserCard__avatar'>
          <img src={userDefault} alt='Avatar' />
        </figure>
      </div>
      <div className='UserCard__options'>
        <button type='button'>
          <span>Remove</span>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button type='button'>
          <span>Edit</span>
          <FontAwesomeIcon icon={faCog} />
        </button>
      </div>
    </div>
  ));
};

export default UserCard;
