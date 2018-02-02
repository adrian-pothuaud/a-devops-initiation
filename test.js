const assert = require('assert');

describe("My feature", function() {
    describe("subfeature 1", function() {
        it("does one thing", function() {
        });

        it("does another thing", function() {
        });
    });

    describe("subfeature 2", function() {
        it("does one thing", function() {
        });

        it("does another thing", function() {
        });
    });
    
    // changement à valider (test 1)
    describe("subfeature 3", function() {
       it("will fail", function() {
           assert(false);
       });
    });
    // commenter pour passer (test 2)
});