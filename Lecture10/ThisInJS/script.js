const user = {
    name: "Jonas Gahr Støre",

    normalFunction: function () {
        console.log(this.name)
        console.log(this);
    },

    arrowFunction: () => {
        console.log(this.name);
        console.log(this);
    }
};
user.normalFunction(); // "Jonas Gahr Støre
user.arrowFunction(); // ""
