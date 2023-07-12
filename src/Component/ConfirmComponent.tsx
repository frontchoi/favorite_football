import React, { useState, FC } from 'react'
interface IConfirmDataProps {
    name: string;
    popupReturn: (sel: boolean) => void
}

export const ConfirmComponent: FC<IConfirmDataProps> = ({ name, popupReturn }) => {
    return (
        <div className='popup_confirm'>
            <div className='center'>
                <p>{name}을 선택하시겠습니까?</p>
                <ul>
                    <li><button onClick={() => { popupReturn(true) }}>네</button></li>
                    <li><button onClick={() => { popupReturn(false) }}>아니오</button></li>
                </ul>
            </div>
        </div>
    )
}
