//DEFINING THINGS
const toggleArea = document.querySelector('div')
const toggleButton = document.querySelector('button')
async function buttonClick() {
    if (toggleButton.textContent === 'show') {
        toggleButton.textContent = 'hide'
        toggleArea.hidden = false
        //add animation class
        toggleButton.style.backgroundColor = 'red'
    } else {
        toggleButton.textContent = 'show'
        toggleArea.hidden = true
        toggleButton.style.backgroundColor = 'green'
    }
}

async function getUsers() {
    const request = new XMLHttpRequest()
    request.onload = async function () {
        // Process our return data
        if (request.status >= 200 && request.status < 300) {
            //good request
            const response = JSON.parse(request.response)
            await writeHTML(response.data)
        } else {
            //bad request
            console.log('The request failed!');
        }
    }
    request.open('GET', 'https://reqres.in/api/users')
    await request.send()
}

async function writeHTML(data) {
    for (let i = 0; i < data.length; i++) {
        //build image
        const image = new Image(100, 100)
        image.src = data[i].avatar
        //build text component
        const p = document.createElement('div')
        const name = data[i].first_name + ' ' + data[i].last_name
        const text = document.createTextNode(name)
        p.appendChild(text)
        //build list item compoent
        const item = document.createElement('div')
        item.classList = 'list_item'
        //append image and text to list item
        item.appendChild(image)
        item.appendChild(text)
        //append list item to list
        const list = document.getElementById('list')
        list.appendChild(item)
    }
}

//DOING THINGS

//get data and write user list component
getUsers()

//assign button functionality
toggleButton.onclick = buttonClick

//TESTING THINGS

//due to a CORS error I did not want to deal with due to time constraints, I moved a few of the tests into
//this file. Checking out the src/testing dir for more.

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

//test external service
//api is live and returns data
async function testRequest() {
    const request = new XMLHttpRequest()
    request.onload = async function () {
        // Process our return data
        if (request.status >= 200 && request.status < 300) {
            //good request
            const response = JSON.parse(request.response)
            //returns data with length >= 1
            if (response.data.length < 1) { throw ('test fail, no response data from external service') }
            //check data for avatar, first_name, last_name
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].avatar == null || response.data[i].first_name == null || response.data[i].last_name == null) { throw ('test fail') }
            }
        } else {
            //bad request
            throw('test request to external service failed')
        }
    }
    request.open('GET', 'https://reqres.in/api/users')
    await request.send()
}
testRequest()