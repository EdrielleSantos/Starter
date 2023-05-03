const reviews = [
    {
        id: 1,
        name: "Helena Castro",
        job: "Ux Design",
        image: "https://images.unsplash.com/photo-1613290837872-82683722a623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-u"
    },
    {
        id: 2,
        name: "Ana Johnson",
        job: "Web Design",
        image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
        text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen."
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
        text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa."
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
        text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan."
    }
];

const author = document.getElementById('author');
const job = document.getElementById('job')
const image = document.getElementById('image-profile')
const information = document.getElementById('description')

const prevButton = document.querySelectorAll('.prev-button');
const nextButton = document.querySelector('.next-button')
const randomButton = document.querySelector('.random-button')

let currentItem = 0;

function showPerson(person){
    const item = reviews[person]
    image.src = item.image
    author.textContent = item.name
    job.textContent = item.job
    information.textContent = item.text
}

nextButton.addEventListener('click', () => {
    currentItem++

    if(currentItem > reviews.length -1){
        currentItem = 0
    }

    showPerson(currentItem)
})

randomButton.addEventListener('click', () => {
    const randomPerson = Math.floor(Math.random() * reviews.length)
    showPerson(randomPerson)
})