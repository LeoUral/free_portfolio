import React from 'react';
import '../style/modalWindow.css';
import icon_1 from '../image/instagram_socialnetwork_17393.png';
import icon_2 from '../image/telegram_tile_logo_icon_169640.png';
import icon_3 from '../image/vk_logo_icon_147212.png';
import icon_4 from '../image/Git_icon-icons-blue.com_66557.png';

export default function ModalWindow(props) {

    const handleClose = () => {
        props.offShow();
    }

    return (
        <>
            <div className="modal_shadow" onClick={handleClose} style={{ display: props.show ? 'block' : 'none' }}></div>
            <div className="modal_window" style={{ display: props.show ? 'block' : 'none' }}>
                <h3>Modal Window</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore odio facilis minus nisi obcaecati ipsum numquam sunt, magni sint omnis nobis accusamus harum, velit ratione.</p>
                <div className="contact_jumbo_block_links">
                    <a href="https://www.instagram.com/leo.photo_ural/" target="_blank" rel="noreferrer" className="contact_link" title="Напишите мне в Инстаграмм">
                        <img src={icon_1} alt='icon' />
                    </a>
                    <a href="https://t.me/LeoUral" target="_blank" rel="noreferrer" className="contact_link" title="Напишите мне в Телеграмм">
                        <img src={icon_2} alt='icon' />
                    </a>
                    <a href="https://vk.com/leo_ural" target="_blank" rel="noreferrer" className="contact_link" title="Напишите мне в ВК">
                        <img src={icon_3} alt='icon' />
                    </a>
                    <a href="https://github.com/LeoUral" target="_blank" rel="noreferrer" className="contact_link" title="На GIT можно посмотреть мои работы">
                        <img src={icon_4} alt='icon' />
                    </a>
                </div>
                <button className="btn_close" onClick={handleClose}>close</button>
            </div>

        </>
    );
}