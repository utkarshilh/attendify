import React from 'react'
import { useState } from 'react';
import A from '../../A';
import B from '../../B';
import Main from '../Attendence/Main';
import SelectClass from '../Attendence/SelectClass'

export default function IsClassSelected() {
    const [isClassSelected, setIsClassSelected] = useState(false);
    const [section, setSection] = useState('');
    const [classs, setClasss] = useState('');
    const [subject, setSubject] = useState('');



    const updateClass = (props) => {

        console.log("Yjij jkjk jkjkl kjkom mv " + JSON.stringify(props))

        // console.log("this is props " + JSON.stringify(props.classs))

        setClasss(props.classs);
        setSubject(props.subject);
        setSection(props.section);

        // console.log("thsiis is si sis s" + section + classs + subject)


    }




    const changeStatus = (currStatus) => {

        setIsClassSelected(currStatus)
    }

    return (
        <div>
            {(isClassSelected === true) ? <Main classs={classs} section={section} subject={subject} changeStatus={changeStatus} /> : <SelectClass changeStatus={changeStatus} isClassSelected={isClassSelected} updateClass={updateClass} />}

        </div>
    )
}
