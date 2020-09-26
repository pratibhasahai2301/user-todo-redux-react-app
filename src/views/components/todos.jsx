import React, { useEffect, Fragment } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { userType } from '../propTypes';
import { todoOperations } from '../../ducks/todos';

const Todos = (props) => {
  const { userId } = props.match.params;
  const { todos, error, loading } = props.todoEntity;

  useEffect(() => {
    if (Object.keys(error).length === 0) {
      if (todos.length === 0) {
        props.fetchTodosByUserId(userId);
      }
    }

  });

  if (loading) {
    return <h2>LOadIng....</h2>
  }

  return (
    <Fragment>
      <h3 className="my-3">Todos</h3>
      <table className="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Completed</th>
        </tr>
        </thead>
        <tbody>
        {
          todos.map((todo, index) => {
            return (
              <tr key={index}>
                <th scope="row">{ index + 1 }</th>
                <td> { todo.title } </td>
                <td> { todo.completed ? 'Yes' : 'No' } </td>
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

Todos.propTypes = {
  todos: arrayOf(userType)
}

Todos.defaultProps = {
  todos: []
}

const mapStateToProps = (state) => {
  return {
    todoEntity: state.todos.todoEntities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodosByUserId: (userId) => dispatch(todoOperations.todosRequested(userId)),
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( Todos );