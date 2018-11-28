import {buttonClick, getUsers,writeHTML} from '../scripts/main'
//setup definitions
const toggleArea = document.querySelector('div')
const toggleButton = document.querySelector('button')
toggleButton.onclick = buttonClick
//test component behavior
//button has onClick func
if (toggleButton.onclick !== buttonClick) { throw ('test fail') }
//buttonClick() toggles text and hidden attributes, default state: show, hidden
buttonClick()
//hide, hidden=false
if (toggleButton.textContent !== 'hide' || toggleArea.hidden !== false) { throw ('test fail') }
buttonClick()
//show, hidden
if (toggleButton.textContent !== 'show' || toggleArea.hidden !== true) { throw ('test fail') }
//test writeHTML
async function test_writeHTML(){
    const testData = [
        {
            avatar:'https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg',
            first_name:'test',
            last_name:'test',
        },
        {
            avatar:'https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg',
            first_name:'test',
            last_name:'test',  
        },
    ]
    await writeHTML(testData)
    const list = document.getElementById('list')
    if(list.childElementCount < 1){throw('writeHTML failed to create child elements')}
}
test_writeHTML()
//test external service
//api is live and returns data, mimics getUsers()
getUsers()
//returns data with length >= 1
if (response.data.length < 1) { throw ('test fail, no response data from external service') }
//check data for avatar, first_name, last_name
for (let i = 0; i < response.data.length; i++) {
    if (response.data[i].avatar == null || response.data[i].first_name == null || response.data[i].last_name == null) { throw ('test fail') }
}