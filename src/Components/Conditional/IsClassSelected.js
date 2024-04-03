import React from 'react'
import { useState } from 'react';
import A from '../../A';
import B from '../../B';
import Main from '../Attendence/Main';
import SelectClass from '../Attendence/SelectClass'

export default function IsClassSelected() {
    const [isClassSelected, setIsClassSelected] = useState(false);

    const changeStatus = (currStatus) => {

        setIsClassSelected(currStatus)
    }

    return (
        <div>
            {(isClassSelected === true) ? <Main /> : <SelectClass changeStatus={changeStatus} isClassSelected={isClassSelected} />}

        </div>
    )
}
