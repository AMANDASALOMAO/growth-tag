import React from 'react';
import styles from './Tab.module.scss';

interface ITab {
  className?: string;
}

function Tab(props: ITab) {
  const { className } = props
  const containerClass = className ? `${styles.container} ${className}` : styles.container

  return <div className={containerClass}></div>
}

export default Tab

