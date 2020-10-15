
document.getElementById('home').addEventListener('click', homeActive);
document.getElementById('methods').addEventListener('click', methodsActive);
document.getElementById('team').addEventListener('click', teamActive);
window.onload = openTab();

//Will set the active tab for which tab is currently supposed to be active
function homeActive() {
    document.getElementById('home').classList.add('active');
    document.getElementById('methods').classList.remove('active');
    document.getElementById('team').classList.remove('active');
    document.getElementById('homeTab').classList.add('activeTab');
    document.getElementById('methodsTab').classList.remove('activeTab');
    document.getElementById('teamTab').classList.remove('activeTab');
    openTab();

}

function methodsActive() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('methods').classList.add('active');
    document.getElementById('team').classList.remove('active');  
    document.getElementById('homeTab').classList.remove('activeTab');
    document.getElementById('methodsTab').classList.add('activeTab');
    document.getElementById('teamTab').classList.remove('activeTab');
    openTab();  
}

function teamActive() {
    document.getElementById('home').classList.remove('active');
    document.getElementById('methods').classList.remove('active');
    document.getElementById('team').classList.add('active');    
    document.getElementById('homeTab').classList.remove('activeTab');
    document.getElementById('methodsTab').classList.remove('activeTab');
    document.getElementById('teamTab').classList.add('activeTab');
    openTab(); 
}

//actually opens the active tab, one at a time.
function openTab() {
    let home = document.getElementById('homeTab');
    let methods = document.getElementById('methodsTab');
    let team = document.getElementById('teamTab');
    let search = document.getElementById('searchHide');

    if (document.getElementById('homeTab').classList.contains('activeTab')) {
        home.style.display = 'block';
        methods.style.display = 'none';
        team.style.display = 'none';
        search.style.display = 'block';
    
    } else if (document.getElementById('methodsTab').classList.contains('activeTab')) {
        home.style.display = 'none';
        methods.style.display = 'block';
        team.style.display = 'none';
        search.style.display = 'none';
    
    } else if (document.getElementById('teamTab').classList.contains('activeTab')) {
        home.style.display = 'none';
        methods.style.display = 'none';
        team.style.display = 'block';
        search.style.display = 'none';
    }
}

// Took a bit, but I think I have it working? Did quite a bit of googling and research in order to make it the way it is. For I wanted to do something different than the Linear and Binary search options, although, its not that different.
function searchFunction() {
    // Declaring of Variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("homeTab");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who dont match the search
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByClassName("titles")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


document.getElementById('subButton').addEventListener('click', subPress);

// In Theory this should work, although due to not having the Node.js extension, it will not work. Could not find a way to send data to a text file without using said extension.
function subPress() {
    let newsletter = [];
    let userName = document.getElementById('userName');
    let userMail = document.getElementById('userMail');
    newsletter.push(userName + '' + userMail);
    fs.writeFile('newsletter.txt',
    newsletter.join('\n'),
    function (err) { console.log('Extract saved successful'); }
);
}












