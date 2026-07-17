import {test} from "@playwright/test"

import {LoginPage} from "./pages/login.js"

import {Form} from "./pages/Catagory.js"

import {Deatils} from "./pages/TestData/data.json"

test("POM", async({page})=>{

    const l=new LoginPage(page)
    const f=new Form(page)


    await l.navigate()
    await l.user('rahulshettyacademy')
    await l.pwd('Learning@830$3mK2')
    await l.dd()
    await l.terms()
    await l.signinbtn()

    await f.catagory()
    await f.nameEnter(Deatils.name)
    await f.mailEnter(Deatils.mail)
    await f.passEnter(Deatils.pwd)
    await f.icecheck()
    await f.genderDD()
    await f.statusRadio()
    await f.dob(Deatils.DOB)
    await f.submit()
    
    await page.waitForTimeout(2000)

})

