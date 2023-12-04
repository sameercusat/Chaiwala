import React from 'react'
import '../styles/footer.scss';
const Footer = () => {
    const footerLinks =(element)=>
    {
      const allFooterLinks=document.querySelectorAll(".footerLinks");
      switch (element) {
        case 0:
            allFooterLinks.forEach((item,index)=>index===0 ? (item.style.opacity=1) : (item.style.opacity=0.2))
            break;
        case 1:
            allFooterLinks.forEach((item,index)=>index===1 ? (item.style.opacity=1) : (item.style.opacity=0.2))
            break;
        case 2:
            allFooterLinks.forEach((item,index)=>index===2 ? (item.style.opacity=1) : (item.style.opacity=0.2))
            break;
        case 3:
            allFooterLinks.forEach((item,index)=>index===3 ? (item.style.opacity=1) : (item.style.opacity=0.2))
            break;   
        case 4:
            allFooterLinks.forEach((item,index)=>index===4 ? (item.style.opacity=1) : (item.style.opacity=0.2))
            break;   
        case 5:
            allFooterLinks.forEach((item,index)=>index===5 ? (item.style.opacity=1) : (item.style.opacity=0.2))
            break;  
        default:
            allFooterLinks.forEach((item)=>(item.style.opacity=1));
            break;
      }
    }
    const LinksBackToNormal=()=>
    {
       const all_links=document.querySelectorAll(".footerLinks");
       all_links.forEach((item)=>(item.style.opacity=1))
    };

  return (
    <><footer>
        <h1>Let's <br/>
        #ConnectOnCutting?</h1>
        <aside onMouseLeave={LinksBackToNormal}>
            <a href="/" className="footerLinks" data-cursorpointerm={true} onMouseOver={()=>footerLinks(0)}>Home</a>
            <a href="/story" className="footerLinks" data-cursorpointerm={true} onMouseOver={()=>footerLinks(1)} >Story</a>
            <a href="/media" className="footerLinks" data-cursorpointerm={true} onMouseOver={()=>footerLinks(2)}>Media</a>
            <a href="/franchise" className="footerLinks" data-cursorpointerm={true} onMouseOver={()=>footerLinks(3)}>Franchise</a>
            <a href="/events" className="footerLinks" data-cursorpointerm={true} onMouseOver={()=>footerLinks(4)}>Events</a>
            <a href="/chaiwalacares" className="footerLinks" data-cursorpointerm={true} onMouseOver={()=>footerLinks(5)}>Chai Wala Cares</a>
        </aside>
        <div>
            <h5>Email</h5>
            <a href="mailto: info@mbachaiwala.com">info@mbachaiwala.com</a>
            <a href="mailto: franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
        </div>
        <div>
            <h5>Phone</h5>
            <a href="tel: +911234567890">+911234567890</a>
        </div>
        <p>© COPYRIGHT 2023 MBA CHAIWALA. MADE BY ME </p>
        </footer>
        <div className='footer'></div>
        </>
  )
}

export default Footer