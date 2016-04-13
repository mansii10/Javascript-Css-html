var friendsData = JSON.parse(document.getElementById("friendsData").textContent);


/*function search1(userName) {
 if(friends[userName] !== undefined) { //Is there a friend with this index
 //Yay, we have a friend with this index!
 }
 else {
 //Sorry, we don't have a friend with this index
 }
 },
 function search2(userName) {
 userName = userName.toLowerCase(); //Case insensitive
 for(var friend in friends) {
 if(friends[friend].firstName.toLowerCase() == userName) { //Does this person have the same first userName
 //This friend has the same first userName
 }
 }
 };
 */

var friendsTemplate = document.getElementById("tmpl-friends").textContent;
var friendsList = document.getElementById("friendsList");
var filters = document.getElementById("filters");
var filterLinks = filters.querySelectorAll("a");

friendsList.innerHTML = _.template(friendsTemplate)(friendsData);

filters.addEventListener('click', function (e) {
    e.preventDefault();
    var friends = friendsData.friends;
    var clicked = e.target;
    var filter = clicked.dataset.filter;
    var filteredfriends = [];
    var i;

    for (i=0; i<filterLinks.length; i++) {
        filterLinks[i].classList.remove('btn-active');
    }

    clicked.classList.add('btn-active');

    switch (filter) {
        case 'all':
            filteredfriends = friends;
            break;
        case 'UserName':
            for (i=0; i<friends.length; i++) {
                if (friends[i].lastName === 'username') {
                    friends.push(friends[i]);
                }
            }
            break;
        case 'FirstName':
            for (i=0; i<friends.length; i++) {
                if (friends[i].lastName === 'firstName') {
                    filteredfriends.push(friends[i]);
                }
            }
            break;
        case 'LastName':
            for (i=0; i<friends.length; i++) {
                if (friends[i].firstName === 'ipa' || friends[i].firstName === 'ale') {
                    filteredfriends.push(friends[i]);
                }
            }
            break;
        case 'Status':
            for (i=0; i<friends.length; i++) {
                if (friends[i].firstName === 'lager') {
                    filteredfriends.push(friends[i]);
                }
            }
            break;

    }

    friendsList.innerHTML = _.template(friendsTemplate)({ friends: filteredfriends });
});
/**
 * Created by mansi on 8/10/15.
 */
