import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Players from './Players';

export default createContainer(({ params }) => {

  // const { id } = params;
  // const todosHandle = Meteor.subscribe('todos.inList', id);
  // const loading = !todosHandle.ready();
  // const list = Lists.findOne(id);
  // const listExists = !loading && !!list;
  //
  // return {
  //   loading,
  //   list,
  //   listExists,
  //   todos: listExists ? list.todos().fetch() : [],
  // };

  return {

  };

}, Players);
