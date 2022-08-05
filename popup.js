// Initialize button with user's preferred color
let changeColor  = document.getElementById("updateText");
let toReplace = document.getElementById('toReplace');
let replace = document.getElementById("replace");
let targetWord = document.getElementById("toReplace").value;
let newWord = document.getElementById("replace").value;



chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPageBackgroundColor,
            args: [targetWord, newWord],
    });
});
  
  
  // The body of this function will be executed as a content script inside the
  // current page
function setPageBackgroundColor(targetWord, newWord) {
    document.body.innerHTML = document.body.innerHTML.replace(new RegExp(targetWord, 'g'), newWord);

}

toReplace.addEventListener('change', () => { 
    targetWord = document.getElementById("toReplace").value; 
});
replace.addEventListener('change', () => { 
    newWord = document.getElementById("replace").value; 
} );



