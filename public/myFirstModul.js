const user = {
    name: (theName)=>{return theName},
    id: function(theName){
        return this.name(theName) + `_${Math.floor(Math.random()*100)}`;
    }
}

console.log(user.name('test'), user.id('dave'))

function userInfo(name){
    console.log(`test of the module: ${user.name(name)} and the id is: ${user.id(name)}`)
}

function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  

export {userInfo, sayHi};