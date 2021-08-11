import React from 'react';
import { Link } from 'react-router-dom';

export default function ToggleableLink(props) {
  const {
    disabled, className, to, external = false, samePage = false, ...rest
  } = props;
  if (disabled) {
    return (<div className={className}>{props.children}</div>);
  }
  if (external) {
    return (<a href={to} target="_blank" rel="noopener noreferrer" className={className}>{props.children}</a>);
  }
  if (samePage) {
    return (<a href={to} className={className}>{props.children}</a>);
  }

  return (
    <Link className={className} to={to} {...rest}>
      {props.children}
    </Link>);
}
