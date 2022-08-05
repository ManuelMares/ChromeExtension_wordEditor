let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ "color": color }, function(){
    console.log('Value is set to ' + color)
  });
  //chrome.storage.local.get('color', function(result){
    //console.log('value currently is '+ result.color)
  //})
});