import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorAlert.module.scss';
import clsx from 'clsx';
import {ErrorCircleIcon} from "../icons";
import {isNullOrUndefined} from "../utils";

export const ErrorAlert = (props) => {
  const {message} = props;

  return (
    <div className={clsx(styles.container)} role="alert">
      <ErrorCircleIcon color="error" fontSize="small" className={styles.icon}/>
      <div>
        <p className="alert-heading">Hay {message.length} {message.length === 1 ? 'error' : "errores"} que se debe
          resolver.</p>
        <ul>
          {
            message.filter(error => error && !isNullOrUndefined(error)).map((error) => <li key={error}>{error}</li>)
          }
        </ul>
      </div>

    </div>
  );
};

ErrorAlert.propTypes = {
  message: PropTypes.array,
}

ErrorAlert.defaultProps = {
  message: []
}

export default ErrorAlert;