const man = require("../js/manager");


describe('Manager subclass', () => {
    var name = "John Doe";
    var id = 1;
    var email = "John@Doe.com";
    var officeNum = 22;

    johnDoe = new man.Manager(name, id, email, officeNum);
    it("Makes a new Manager object", () => {
        expect(typeof johnDoe).toEqual("object");
    })

    describe('JonDoe Manager exists', () => {
        it("Confirms that JohnDoe is an instance of the Engineer class", () => {
            expect(johnDoe).toBeDefined();
        })
    })

    describe('getName function', () => {
        it("Returns the name of the manager object", () => {
            expect(johnDoe.getName()).toEqual("This is John Doe")
        })
    })

    describe('geId function', () => {
        it("Returns the ID of the manager", () => {
            expect(johnDoe.getId()).toEqual("My ID is 1")
        })
    })

    describe('getEmail function', () => {
        it("Returns the email of the manager", () => {
            expect(johnDoe.getEmail()).toEqual("My email address is John@Doe.com")
        })
    })

    describe('getRole function', () => {
        it("Returns the role of the manager", () => {
            expect(johnDoe.getRole()).toEqual("My role is Manager")
        })
    })

    describe('getofficeNum function', () => {
        it("Returns the role of the manager", () => {
            expect(johnDoe.getofficeNum()).toEqual("My office number is 22")
        })
    })
})