/* Implement the function asyncMap:
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });


 asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 */

//this function needs to return the result of
//tasks in an array, in the order that they are passed in
var asyncMap = function(tasks, callback) {
  //define an array to store my results
  let results = [];
  //define a tracker to keep count of tasks
  let count = 0;

  //iterate through my tasks array
  for (let i = 0; i < tasks.length; i++) {
    tasks[i](el => {
      //set el (result of cb) in results array
      results[i] = el;
      //increment count of elements in results
      count++;
      //if count is equal to tasks length
      if (count === tasks.length) {
        //all results have returned, now callback results array
        callback(results);
      }
    });
  }
};

console.log(asyncMap([
 function(cb){
  setTimeout(function(){
    cb('one');
  }, 200);
},
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout
    console.log(results)
}));