import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const TableItem = ({ id, name, avatar, email, onEdit, onDelete }) => {
	return (
		<tr className='table_body_row'>
			<td className=' table_body_d'>
				<span>{id}</span>
			</td>
			<td className=' table_body_d'>
				<img src={avatar} className='avatar' alt={name} />
			</td>
			<td className='table_body_d'>
				<span>{name}</span>
			</td>
			<td className='table_body_d'>
				<span>{email}</span>
			</td>
			<td className=' table_body_d  '>
				<TableButtons onEdit={onEdit} onDelete={onDelete} id={id} />
			</td>
		</tr>
	);
};
const TableButtons = ({ onEdit, onDelete, id }) => {
	return (
		<div className='TbuttonsWrapper'>
			<Link to={`edit/${id}`} className='action-button'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
					<path d='M497.9 74.16L437.8 14.06c-18.75-18.75-49.19-18.75-67.93 0l-56.53 56.55l127.1 128l56.56-56.55C516.7 123.3 516.7 92.91 497.9 74.16zM290.8 93.23l-259.7 259.7c-2.234 2.234-3.755 5.078-4.376 8.176l-26.34 131.7C-1.921 504 7.95 513.9 19.15 511.7l131.7-26.34c3.098-.6191 5.941-2.141 8.175-4.373l259.7-259.7L290.8 93.23z' />
				</svg>
			</Link>
			<button type='button' onClick={onDelete} className='action-button'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
					<path d='M53.21 467c1.562 24.84 23.02 45 47.9 45h245.8c24.88 0 46.33-20.16 47.9-45L416 128H32L53.21 467zM432 32H320l-11.58-23.16c-2.709-5.42-8.25-8.844-14.31-8.844H153.9c-6.061 0-11.6 3.424-14.31 8.844L128 32H16c-8.836 0-16 7.162-16 16V80c0 8.836 7.164 16 16 16h416c8.838 0 16-7.164 16-16V48C448 39.16 440.8 32 432 32z' />
				</svg>
			</button>
		</div>
	);
};
const Table = ({ onEdit, onDelete, data, tableHead, title }) => {
	return (
		<div className='table-responsive'>
			<div className='Table_wrapper'>
				<h3>{title}</h3>
				<table className='cs-table'>
					<thead className='thead'>
						<tr className='thead_row'>
							{tableHead.map((item, i) => (
								<th className='thead_cels' key={i}>
									{item}
								</th>
							))}
						</tr>
					</thead>
					<tbody className='tbody'>
						{data
							? data.map((item, i) => (
									<TableItem
										key={i}
										id={item.id}
										name={item.name}
										email={item.email}
										avatar={item.avatar}
										onEdit={() => onEdit(item.id)}
										onDelete={() => onDelete(item.id)}
									/>
							  ))
							: null}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table;
