import React from 'react';

import styles from './Title.module.scss';

type Props = {
  children: string;
};

export default function Title({children}: Props) {
  const lettersMarkup = children.split('').map((letter, index) => (
    <span key={index} className={styles.Letter} data-shadow={letter}>
      {letter}
    </span>
  ));

  return (
    <>
      <h1 className={styles.SemanticTitle}>{children}</h1>
      <div className={styles.Title} role="presentation" aria-hidden="true">
        {lettersMarkup}
      </div>
    </>
  );
}