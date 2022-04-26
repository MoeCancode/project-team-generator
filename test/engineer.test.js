const eng = require("../js/engineer");


describe('Engineer subclass', () => {
    var name = "John Doe";
    var id = 1;
    var email = "John@Doe.com";
    var ghUsername = "JohnDoesCode";

    johnDoe = new eng.Engineer(name, id, email, ghUsername);
    it("Makes a new Employee object", () => {
        expect(typeof johnDoe).toEqual(`object`);
    })

    describe('JonDoe Engineer exists', () => {
        it("Confirms that JohnDoe is an instance of the Engineer class", () => {
            expect(johnDoe).toBeDefined();
        })
    })

    describe('getName function', () => {
        it("Returns the name of the engineer object", () => {
            expect(johnDoe.getName()).toEqual("This is John Doe")
        })
    })

    describe('geId function', () => {
        it("Returns the ID of the engineer", () => {
            expect(johnDoe.getId()).toEqual("My ID is 1")
        })
    })

    describe('getEmail function', () => {
        it("Returns the email of the engineer", () => {
            expect(johnDoe.getEmail()).toEqual("My email address is John@Doe.com")
        })
    })

    describe('getRole function', () => {
        it("Returns the role of the engineer", () => {
            expect(johnDoe.getRole()).toEqual("My role is Engineer")
        })
    })

    describe('getGithub function', () => {
        it("Returns the role of the engineer", () => {
            expect(johnDoe.getGithub()).toEqual("My github username is JohnDoesCode")
        })
    })
})