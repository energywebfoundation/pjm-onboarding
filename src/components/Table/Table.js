import React, {Component} from 'react'


const getObjectToRow = (object, keys, id, handleEvent)=>{
    return (<tr key={object[id]} onClick={()=>handleEvent(object[id])}>
                {keys.map(k =><td>{object[k]}</td>)}
            </tr>);
}

const SimpleTable = (props) =>{
    return (
        <table className='simple-table'>
            <thead className='simple-table--header'>
               {props.headers.map(h=><th className='simple-table--th'>{h}</th>)}
            </thead>
            <tbody class='simple-table--body'>
               {props.rows.map(r=>{
                     return getObjectToRow(r, props.keys, props.rowIdentifier, props.onClickRow);
               })}
            </tbody>
        </table>
    )


}

export {SimpleTable}