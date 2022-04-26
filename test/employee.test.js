const emp = require("../js/employee");


describe('Employee', () => {
    var name = `John Doe`;
    var id = 1;
    var email = `John@Doe.com`;

    johnDoe = new emp(name, id, email);
    it("Makes a new Employee object", () => {
        expect(typeof johnDoe).toEqual(`object`);
    })

    describe('JonDoe Employee exists', () => {
        it("Confirms that JohnDoe is an instance of the Employee class", () => {
            expect(johnDoe).toBeDefined();
        })
    })

    describe('getName function', () => {
        it("Returns the name of the employee object", () => {
            expect(johnDoe.getName()).toEqual("This is John Doe")
        })
    })

    describe('geId function', () => {
        it("Returns the ID of the employee", () => {
            expect(johnDoe.getId()).toEqual("My ID is 1")
        })
    })

    describe('getEmail function', () => {
        it("Returns the email of the employee", () => {
            expect(johnDoe.getEmail()).toEqual("My email address is John@Doe.com")
        })
    })

    describe('getRole function', () => {
        it("Returns the role of the employee", () => {
            expect(johnDoe.getRole()).toEqual("My role is Employee")
        })
    })
})