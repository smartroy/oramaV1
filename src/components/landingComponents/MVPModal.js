import React, { useState } from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useNavigate } from 'react-router-dom'
function MVPModal() {
    // const [open, setOpen] = useState(false);
    // const closeModal = () => setOpen(false);
    // return (
    //     <div className="mvp-modal-box">
    //         <div className="container">
    //             <button type="button" className="button" onClick={() => setOpen(o => !o)}>
    //                 Controlled Popup
    //   </button>
    //             <Popup open={open} closeOnDocumentClick onClose={closeModal}>
    //                 <div className="modal">
    //                     <a className="close" onClick={closeModal}>
    //                         &times;
    //       </a>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
    //       omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
    //       ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
    //       doloribus. Odit, aut.
    //     </div>
    //             </Popup>
    //         </div>
    //     </div>
    // );
    const [inputCode, setCode] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(inputCode);
        if (inputCode.slice(0, 5) == "ORAMA" && inputCode.slice(inputCode.length - 4) == "2022") {

            navigate("/oramaMVP")
        }
        else {
            alert("wrong");
        }
        setCode("");

    }
    return (
        <div className="mvp-modal-box">
            <div className="container">
                <Popup trigger={<button className="button"> Click to Create Your Own NFT!</button>}
                    modal
                    nested
                >
                    {close => (
                        <div className="orama-modal">
                            <button className="close" onClick={close}>&times;</button>
                            <div className="content">
                                <h3 style={{ fontFamily: "Roboto" }}>Please Input your Access Code</h3>
                            </div>
                            <form onSubmit={e => { handleSubmit(e); close() }}>
                                <input
                                    type='text'
                                    value={inputCode}
                                    onChange={e => { setCode(e.target.value); }}
                                />
                                <input type="submit" value="Submit" />
                            </form>

                        </div>
                    )
                    }
                </Popup>
            </div>
        </div>
    )
}

export default MVPModal
