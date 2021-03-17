import React from 'react';
import PropTypes from 'prop-types';

import styles from './Heading.scss';

const HeadingTagName = ['h1', 'h2', 'h3','h4', 'h5', 'h6', 'p'];

export function Heading({element, children}) {
  const Element = element || 'h2';
  return <Element className={styles.Heading}>{children}</Element>;
}

Heading.propTypes = {

  children: PropTypes.string,
  element: PropTypes.oneOf(HeadingTagName),
};

Heading.defaultProps = {
  element: 'h2'
};

