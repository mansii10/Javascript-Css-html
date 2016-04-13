var friendsData = JSON.parse(document.getElementById("friendsData").textContent);
var friendsTemplate = document.getElementById("tmpl-friends").textContent;
var friendsList = document.getElementById("friendsList");
var filters = document.getElementById("filters");
var filterLinks = filters.querySelectorAll("a");

friendsList.innerHTML = _.template(friendsTemplate)(friendsData);

filters.addEventListener('click', function (e) {
    e.preventDefault();
    var friendss = friendsData.friendss;
    var clicked = e.target;
    var filter = clicked.dataset.filter;
    var filteredfriendss = [];
    var i;

    for (i=0; i<filterLinks.length; i++) {
        filterLinks[i].classList.remove('btn-active');
    }

    clicked.classList.add('btn-active');

    switch (filter) {
        case 'all':
            filteredfriendss = friendss;
            break;
        case 'status':
            for (i=0; i<friendss.length; i++) {
                if (friendss[i].status === 'online') {
                    filteredfriendss.push(friendss[i]);
                }
            }
            break;
        case 'userName':
            for (i=0; i<friendss.length; i++) {
                  filteredfriendss.push(friendss[i]);
                }











            break;
    }

    friendsList.innerHTML = _.template(friendsTemplate)({ friendss: filteredfriendss });
});/**
 * Created by mansi on 8/10/15.
 */
