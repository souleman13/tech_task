const avatarJSON = `[
    {
        "avatar":"https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg",
        "name":"Lorem Ipsum"
    },
    {
        "avatar":"https://s3.amazonaws.com/developwithsoule-files/images/mountains.jpg",
        "name":"Lorem Ipsum"
    }
]`

//DEFINING THINGS

const toggleArea = document.querySelector('div')
const toggleButton = document.querySelector('button')
buttonClick = async () => {
    if (toggleButton.textContent === 'show') {
        toggleButton.textContent = 'hide'
        toggleArea.hidden = false
    } else {
        toggleButton.textContent = 'show'
        toggleArea.hidden = true
    }
}

getUsers = async () => {
    const request = new XMLHttpRequest()
    request.onload = async function(){
        // Process our return data
	if (request.status >= 200 && request.status < 300) {
        //good request
        const response = JSON.parse(request.response)
        await writeHTML(response.data)
	} else {
        //bad request
		console.log('The request failed!');
	}}
    request.open('GET', 'https://reqres.in/api/users')
    await request.send()    
}

writeHTML = async (data) => {
    for (let i = 0; i < data.length; i++) {
        //build image
        const image = new Image(100, 100)
        image.src = data[i].avatar
        //build text component
        const p = document.createElement('div')
        const name = data[i].first_name+' '+data[i].last_name
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

//EXPORT FOR TESTING

module.exports = [buttonClick,getUsers,writeHTML]