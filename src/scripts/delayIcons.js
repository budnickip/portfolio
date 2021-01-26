const delayIcons = () =>{
    window.addEventListener('scroll',()=>{
        const aboutPhoto = document.querySelector('.about-photo')
        const aboutPhotoPosition = aboutPhoto.getBoundingClientRect().top
        let screenPosition = window.innerHeight
        if(aboutPhotoPosition < screenPosition){
            aboutPhoto.classList.add('activePhoto')
        }

        const skillsItem = document.querySelectorAll('.skills-item__icon')
    
        skillsItem.forEach(skill => {
            if(skill.getBoundingClientRect().top < window.innerHeight){
                skill.classList.add('activeSkill')
            }
        })

        const portfolioItems = document.querySelectorAll('.portfolio-item')

        if(portfolioItems[0].getBoundingClientRect().top < window.innerHeight){
            portfolioItems[0].classList.add('activeFirst')
            portfolioItems[1].classList.add('activeSecond')
            portfolioItems[3].classList.add('activeThird')
        }

        if(portfolioItems[2].getBoundingClientRect().top < window.innerHeight){
            portfolioItems[2].classList.add('activeFourth')
            portfolioItems[4].classList.add('activeFifth')
        }

        const paperPlane = document.querySelector('.fa-paper-plane')

        if(paperPlane.getBoundingClientRect().top < window.innerHeight){
            paperPlane.classList.add('activePlane')
        }
    })  
}
export default delayIcons;