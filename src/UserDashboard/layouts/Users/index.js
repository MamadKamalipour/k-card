import { Table } from "components";
import { Button } from "components";
import React, { useState } from "react";
import image3 from "assets/images/img1.jpg";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import "./index.scss";
import { Link } from "react-router-dom";
const Users = () => {
	const users = [
		{ id: 1, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 2, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 3, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 4, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 5, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 6, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 7, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 8, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 9, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 10, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 11, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 12, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 13, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 14, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 15, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 16, name: "ali", avatar: image3, email: "ali@example.com" },
		{ id: 17, name: "ali", avatar: image3, email: "ali@example.com" },
	];
	const [page, setPage] = useState(1);
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div id='users'>
				<div className='users'>
					<div className='users__header page-header'>
						<h2>List Of Users</h2>
						<Link to='/dashboard/add-user' className='btn-main'>
							Add
						</Link>
					</div>
					<div className='user__tables'>
						<Table
							tableHead={["id", "Avatar", "Name", "Email", "Action"]}
							// onDelete={(id) => deletePropertyHandler(id)}
							data={users}
						/>
					</div>
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Users;
