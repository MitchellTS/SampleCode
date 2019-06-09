// Methods Fundamentals
// The object is a restaurant that has various tracked attritubes.
// checkAvailability was predefined as a sample method that 
// drew upon specific values within the object to give remaining 
// seats against guestCapacity.
// The challenge in this lesson was to add two more functions that
// 1) added guests to guestCount and 2) the ability to remove them.
// We then tested the code with numerous values to ensure we did it correctly.
// The results being displayed in the CommandLine




let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatLeft = this.guestCapacity - this.guestCount

        return partySize <= seatLeft
    },
    seatParty: function (seats) {
        let seatLeft = this.guestCapacity - this.guestCount
       if (seats <= seatLeft) {
         this.guestCount = this.guestCount + seats
         return `${seats} guests have been added to the guest count. New count is ${this.guestCount}/${this.guestCapacity}.`
       } else {
           return `We don't not have the capacity to accept this many new guests.(Current count is ${this.guestCount}/${this.guestCapacity}.)`
       }
    },
    removeParty: function (seats) {
        this.guestCount = this.guestCount - seats
        return `We have removed ${seats} patrons from the guest count. New count is ${this.guestCount}/${this.guestCapacity}.`
    }
}

restaurant.seatParty(55)
console.log(restaurant.seatParty(19))
console.log(restaurant.checkAvailability(4))
console.log(restaurant.removeParty(15))
console.log(restaurant.checkAvailability(4))
