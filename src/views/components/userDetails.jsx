import React from 'react';

function UserDetails(props) {
  return (
    <div>User { props.match.params.id }</div>
  );
}

export default UserDetails;