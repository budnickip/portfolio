const showMore = () =>{
    const buttonMore = document.querySelector('.portfolio-more__button')

    buttonMore.addEventListener('click',()=>{
        buttonMore.style.display = "none"
        const moreItems = document.querySelector('.portfolio-items-more')
        moreItems.classList.add('show-more-items')
    })
}

export default showMore