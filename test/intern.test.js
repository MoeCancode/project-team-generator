const itn = require("../js/intern");


describe('Manager subclass', () => {
    var name = "John Doe";
    var id = 1;
    var email = "John@Doe.com";
    var school = "UCB";

    johnDoe = new itn.Intern(name, id, email, school);
    it("Makes a new Employee object", () => {
        expect(typeof johnDoe).toEqual("object");
    })

    describe('JonDoe Intern exists', () => {
        it("Confirms that JohnDoe is an instance of the Engineer class", () => {
            expect(johnDoe).toBeDefined();
        })
    })

    describe('getName function', () => {
        it("Returns the name of the intern object", () => {
            expect(johnDoe.getName()).toEqual("This is John Doe")
        })
    })

    describe('geId function', () => {
        it("Returns the ID of the intern", () => {
            expect(johnDoe.getId()).toEqual("My ID is 1")
        })
    })

    describe('getEmail function', () => {
        it("Returns the email of the intern", () => {
            expect(johnDoe.getEmail()).toEqual("My email address is John@Doe.com")
        })
    })

    describe('getRole function', () => {
        it("Returns the role of the intern", () => {
            expect(johnDoe.getRole()).toEqual("My role is Intern")
        })
    })

    describe('getofficeNum function', () => {
        it("Returns the role of the intern", () => {
            expect(johnDoe.getSchool()).toEqual("My school is UCB")
        })
    })
})