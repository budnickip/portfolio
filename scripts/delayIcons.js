const delayIcons = () =>{
    window.addEventListener('scroll',()=>{
        const aboutPhoto = document.querySelector('.about-photo')
        const aboutPhotoPosition = aboutPhoto.getBoundingClientRect().top
        let screenPosition = window.innerHeight
        if(aboutPhotoPosition < screenPosition){
            aboutPhoto.classList.add('activePhoto')
        }
    })  
    window.addEventListener('scroll', ()=>{
        const skillsItem = document.querySelectorAll('.skills-item__icon')
    
        skillsItem.forEach(skill => {
            if(skill.getBoundingClientRect().top < window.innerHeight){
                skill.classList.add('activeSkill')
            }
        })
    })
}
export default delayIcons;