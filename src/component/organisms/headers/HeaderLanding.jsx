import {NavLanding} from '../../molecules/Nav/NavLanding'
export const HeaderLanding = () =>{
    return(
        <div className='header__landing'>
            <h3 className='h3--landing'>Hello! my name is <span><strong style={{color:"white"}}>Lisa</strong></span> and I'm a</h3>
            <h1 className='h1--landing'>Frontend <br/> Developer</h1>
            <h2 className='h2--landing'>{'&'} UX/UI Designer</h2>
            <NavLanding/>
        </div>
    )
}