import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faReadme } from '@fortawesome/free-brands-svg-icons';

import '../assets/styles/components/UserCard.scss';
import userDefault from '../assets/statics/avatar.png';

const UserCard = () => {
  const users = useSelector((state) => state.users);

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
        <Link className='icon icon--post' to={`/posts/${user.id}`}>
          <span>Posts</span>
          <FontAwesomeIcon icon={faReadme} />
        </Link>
        <Link className='icon icon--todo' to={`/todolist/${user.id}`}>
          <span>To do list</span>
          <FontAwesomeIcon icon={faTasks} />
        </Link>
      </div>
    </div>
  ));
};

export default UserCard;
