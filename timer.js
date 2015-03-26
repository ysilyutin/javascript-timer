var Timer = function() {};
 
Timer.prototype.time = function(label) {
  this._times = this._times || {};
  this._times[label] = Date.now();
};
 
Timer.prototype.timeEnd = function(label) {
  try {
    var time = this._times[label];
    if (!time) {
      throw new Error('No such label: ' + label);
    }
    var duration = Date.now() - time;
    console.log('request_time: %s: %dms', label, duration);
    delete this._times[label];
  } catch (e) {
    console.log('timer error '+times[label]+':', e);
  }
};
 
var timer = new Timer();
 
// Usage
timer.time('timerName');
(function()
  // Some async operation
  timer.timeEnd('timerName');
})();
