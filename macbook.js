import {computer} from './computer.js'
class macbook extends computer {
    constructor(name, company) {
        super(name)
        this.company = company
    }
    logIn() {
        console.log("you are logged into a macbook" + this.name)
    }
}
export default macbook