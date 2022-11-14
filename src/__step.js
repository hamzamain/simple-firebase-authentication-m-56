/* 
=================================
    INITIAL SETUP
=================================
1. visite console.firebase.google.com
2. create a new firebase project
3. visite doc (go to docs) : Build > Authentication > web > Getting started
4. Register web app > firebase projects home > click web > give name and Register
5. Install firebase for your projects : npm i firebase
6. DANGEROUS: get firebase config and put it in firebase.init.js 
7. export app from firebase.init.js
====================================
    SETUP AUTH PROVIDER
====================================
8. create auth useing getAuth from firebase by useing app from firebase.init.js 
9. create a google auth provider. do not forget to use 'new' keyword before googleAuthProvider();
10. go to firebase > build > authentication > sign in method
11. select google > enable google sign in methond
12. create a button for google sign in method with click handler
13. inside the event handler, call signInWithPopup with auth and provider paramiter
14. after signInWithPopup .then => result, error
=====================================
    DISPLAY DATA 
=====================================

=====================================
    ADD A NEW SIGN IN METHOD
=====================================
1. enable the sign in method
2. create github, twitter, fb, etc. app create
3. get clinetId and secret
4.

*/
