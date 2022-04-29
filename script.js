const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) //to trim white spaces 
    
    tagsEl.innerHTML = '' // to empty the last array 

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag') 
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)  //to put all the tags in array before 
    })
}

function randomSelect() {
    const times = 30  

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100)
}

function pickRandomTag() {    //to pick a random tag out of all the tags entered 
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]     //pick a random from the array tags
}

function highlightTag(tag) {
    tag.classList.add('highlight')  //function to highlight the tags that are entered 
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight') //function to unhighlight tags 
}