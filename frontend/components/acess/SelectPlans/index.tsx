'use client';


import { useContext } from 'react';
import styles from './SelectPlans.scss';
import { UserContext } from '@/context/UserContext';


const SelectPlans = () => {

  const {user} = useContext(UserContext);

  return (
    <h2>Ola {user.name}</h2>
  );
};

export default SelectPlans;