import React from "react";
const workItems = ({item}) =>{
    return(
        <div className="work__card" key={item.id}>
            <img src={item.image} alt='' className="work__img" />
            <h3 className='work__title'>{item.title}</h3>
            {item.desc && <p className="work__description">{item.desc}</p>}
            {item.live && (
            <a href={item.live} className="work__button demo__button">
            Live Demo <i className="uil uil-external-link-alt work__button-icon"></i>
            </a>
 )}
 {item.git && (
            <a href={item.git} className="work__button git__button">
            Code <i className="uil uil-github work__button-icon "></i>
            </a>

)}
        </div>
    )
}

export default workItems