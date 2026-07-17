export class Form{
    constructor(page){

        this.page=page
        this.cat = page.locator('//a[text()="Category 1"]')
        this.name = page.locator('//input [@name="name" and @minlength="2"]')
        this.mail = page.locator('//input[@name="email"]')
        this.password = page.getByPlaceholder('Password')
        this.icecream = page.locator('[id="exampleCheck1"]')
        this.gender = page.locator('#exampleFormControlSelect1')
        this.status = page.locator('[id="inlineRadio1"]')
        this.date = page.locator('[name="bday"]')
        this.subbtn = page.locator('[value="Submit"]')
        
    }

    async catagory(){
        await this.cat.click()
    }

    async nameEnter(nam){
        await this.name.fill(nam)
    }

    async mailEnter(eml){
        await this.mail.fill(eml)
    }

    async passEnter(pd){
        await this.password.fill(pd)
    }

    async icecheck(){
        await this.icecream.check()
    }

    async genderDD(){
        await this.gender.selectOption({label:"Male"})
    }

    async statusRadio(){
        await this.status.check()
    }

    async dob(date){
        await this.date.fill(date)
    }

    async submit(){
        await this.subbtn.click()
    }

}