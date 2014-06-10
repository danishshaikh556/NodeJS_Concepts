function Person(name, secret)
{
    // public
    this.name = name;

    // private
    var secret = [1,2,3,4];
  

    // public methods have access to private members
    this.setSecret = function(s) {
        secret = s;
    }

    this.getSecret = function() {
        return secret;
    }
}

// Must use getters/setters 
Person.prototype.spillSecret = function() { var y = this.getSecret;
y.push(45) ;
console.log(this.getSecret());};

module.exports =Person;

