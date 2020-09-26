import React, { useEffect, Fragment } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { userType } from '../propTypes';
import { userOperations } from '../../ducks/users';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  const { users, error, loading } = props.userEntity;

  useEffect(() => {
    if (Object.keys(error).length === 0) {
      if (users.length === 0) {
        props.fetchUsers();
      }
    }
  });

  const handleTodoRedirection = (userId) => {
    props.history.push(`todos/${userId}`);
  };

  if (loading) {
    return <h2>LOadIng....</h2>
  }

  return (
    <Fragment>
      <h3 className="my-3">Users</h3>
      <table className="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Username</th>
          <th scope="col">Phone</th>
          <th scope="col">Company</th>
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {
          users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{ index + 1 }</th>
                <td> <NavLink to={`/users/${user.id}`}>{ user.name }</NavLink> </td>
                <td> { user.email } </td>
                <td> { user.username  } </td>
                <td> { user.phone } </td>
                <td> { user.company.name } </td>
                <td>
                  <div className="d-flex">
                    <button className="btn btn-primary btn-sm mr-3"
                            onClick={() => handleTodoRedirection(user.id)}>Todos</button>
                  </div>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    </Fragment>
  );
};

const { arrayOf } = PropTypes;

Users.propTypes = {
  users: arrayOf(userType)
}

Users.defaultProps = {
  users: []
}

const mapStateToProps = (state) => {
  return {
    userEntity: state.users.userEntities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(userOperations.usersRequested()),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Users );