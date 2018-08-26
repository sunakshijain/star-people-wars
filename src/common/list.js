import React from 'react';


const ListComponent = (props) => (
    <ul className="list-group">
    {props.renderData.map( (item, index) => (
        <li className="list-group-item" key={index}>
        {item.name}
        </li>
    ))}
}
</ul>
) ;

export default ListComponent;  