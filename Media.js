
// Media class as common starting point for 
// things like DVDs, books, vinyl 

class Media {
    constructor(){
        this.name = "Default generic media"

        Media.counts ++;


    }

    // Count of all media that exists
    static count = 0;

    getMediaName(){
        return this.name;
    }

    static version(){
        return "0.0.1";
    }

    version(){
        return "protoype version 0.0.1";
    }
}

// Instance of the blueprint
let someMedia = new Media();
someMedia.name = "Cool generic media";
console.log(someMedia.name);
console.log(someMedia.getMediaName());

console.log(Media.version());
console.log(Media.prototype.version());

// let arrayLength = Array.length();
// arraylength = someArrayVariable.length;

let someOtherMedia = new Media();
console.log(someOtherMedia.name);

// Media.getMediaName();

console.log(`Media library has ${Media.count} items`)