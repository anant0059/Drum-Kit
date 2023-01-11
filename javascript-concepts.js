function HouseKepper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        alert("Cleaning in progress...")
    }
}

var housekepper1 = new HouseKepper(12, "James", ["bedroom"]);
housekepper1.clean();