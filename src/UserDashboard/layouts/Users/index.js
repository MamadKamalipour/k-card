import { Table } from "components";
import { Button } from "components";
import React from "react";
import image3 from "assets/images/img1.jpg";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import "./index.scss";
const Users = () => {
	const users = [{ id: 1, name: "ali", avatar: image3, email: "ali@example.com" }];
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div id='users'>
				<div className='users'>
					<div className='users__header page-header'>
						<h2>List Of Users</h2>
						<Button>add user</Button>
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
