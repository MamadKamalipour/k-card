import { Button } from "components";
import { Field, Form, Formik } from "formik";
import React from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import "./index.scss";

function AddUser() {
	const submitHandler = (values) => {
		console.log(values);
	};

	return (
		<DashboardLayout>
			<DashboardNavbar />
			<Formik
				// validationSchema={LoginValidate}
				initialValues={{
					name_fas: "",
					name_en: "",
					lastName_fas: "",
					lastName_en: "",
					description_fas: "",
					description_en: "",
					telegram: "",
					whatsapp: "",
					instagram: "",
					dribble: "",
					pinterest: "",
					twitter: "",
					youtube: "",
					aparat: "",
					tiktok: "",
					spotify: "",
					soundcloud: "",
					twitch: "",
				}}
				onSubmit={(values) => {
					// same shape as initial values
					submitHandler(values);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						{/* name */}
						<div className='row mt-3'>
							<div className='col-12 col-md-6'>
								<div className='form-floating w-100 w-100'>
									<Field
										className='form-control'
										name='name_en'
										placeholder='نام انگلیسی'
										autoComplete='on'
										id='name_en'
										type='name_en'
									/>
									<label htmlFor='name_en'>نام انگلیسی</label>

									{errors.name_en && touched.name_en && (
										<span className='input-error'>{errors.name_en}</span>
									)}
								</div>
							</div>
							<div className='col-12 col-md-6'>
								<div className='form-floating w-100 w-100'>
									<Field
										className='form-control text-start'
										name='name_fas'
										placeholder='نام فارسی'
										id='name_fas'
										autoComplete='on'
										type='text'
									/>
									<label htmlFor='name_fas'>نام فارسی</label>

									{errors.name_fas && touched.name_fas && (
										<span className='input-error'>{errors.name_fas}</span>
									)}
								</div>
							</div>
						</div>
						{/* familyName */}
						<div className='row mt-3'>
							<div className='col-12 col-md-6'>
								<div className='form-floating w-100 w-100'>
									<Field
										className='form-control'
										name='lastName_en'
										placeholder='نام خانوادگی انگلیسی'
										autoComplete='on'
										id='lastName_en'
										type='lastName_en'
									/>
									<label htmlFor='lastName_en'>نام خانوادگی انگلیسی</label>

									{errors.lastName_en && touched.lastName_en && (
										<span className='input-error'>{errors.lastName_en}</span>
									)}
								</div>
							</div>
							<div className='col-12 col-md-6'>
								<div className='form-floating w-100 w-100'>
									<Field
										className='form-control text-start'
										name='lastName_fas'
										placeholder='نام خانوادگی فارسی'
										id='lastName_fas'
										autoComplete='on'
										type='text'
									/>
									<label htmlFor='lastName_fas'>نام خانوادگی فارسی</label>

									{errors.lastName_fas && touched.lastName_fas && (
										<span className='input-error'>{errors.lastName_fas}</span>
									)}
								</div>
							</div>
						</div>
						{/* description */}
						<div className='row mt-3'>
							<div className='col-12 col-md-6'>
								<div className='form-floating w-100 w-100'>
									<Field
										className='form-control'
										name='description_en'
										placeholder='توضیحات انگلیسی'
										autoComplete='on'
										id='description_en'
										type='description_en'
									/>
									<label htmlFor='description_en'>توضیحات انگلیسی</label>

									{errors.description_en && touched.description_en && (
										<span className='input-error'>{errors.description_en}</span>
									)}
								</div>
							</div>
							<div className='col-12 col-md-6'>
								<div className='form-floating '>
									<Field
										className='form-control text-start'
										name='description_fas'
										placeholder='توضیحات فارسی'
										id='description_fas'
										autoComplete='on'
										type='text'
									/>
									<label htmlFor='description_fas'>توضیحات فارسی</label>

									{errors.description_fas && touched.description_fas && (
										<span className='input-error'>
											{errors.description_fas}
										</span>
									)}
								</div>
							</div>
						</div>
						<div className='social-medias mt-3'>
							{/* telegram */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='telegram'
									placeholder='Telegram'
									name='telegram'
								/>
								<label htmlFor='telegram'>Telegram </label>
							</div>
							{/* instagram */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='instagram'
									placeholder='Instagram'
									name='instagram'
								/>
								<label htmlFor='instagram'>Instagram</label>
							</div>
							{/* whatsapp */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='whatsapp'
									placeholder='Whatsapp'
									name='whatsapp'
								/>
								<label htmlFor='whatsapp'>Whatsapp </label>
							</div>
							{/* dribble */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='dribble'
									placeholder='Dribble'
									name='dribble'
								/>
								<label htmlFor='dribble'>Dribble</label>
							</div>
							{/* pinterest */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='pinterest'
									placeholder='Pinterest'
									name='pinterest'
								/>
								<label htmlFor='pinterest'>Pinterest</label>
							</div>
							{/* twitter */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='twitter'
									placeholder='Twitter'
									name='twitter'
								/>
								<label htmlFor='twitter'>Twitter</label>
							</div>
							{/* youtube */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='youtube'
									placeholder='Youtube'
									name='youtube'
								/>
								<label htmlFor='youtube'>Youtube </label>
							</div>
							{/* aparat */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='aparat'
									placeholder='Aparat'
									name='aparat'
								/>
								<label htmlFor='aparat'>Aparat</label>
							</div>
							{/* tiktok */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='tiktok'
									placeholder='Tiktok'
									name='tiktok'
								/>
								<label htmlFor='tiktok'>Tiktok </label>
							</div>
							{/* spotify */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='spotify'
									placeholder='Spotify'
									name='spotify'
								/>
								<label htmlFor='spotify'>Spotify</label>
							</div>
							{/* soundcloud */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='soundcloud'
									placeholder='Soundcloud'
									name='soundcloud'
								/>
								<label htmlFor='soundcloud'>Soundcloud </label>
							</div>
							{/* twitch */}
							<div className='form-floating mb-3 w-100'>
								<Field
									type='text'
									className='form-control'
									id='twitch'
									placeholder='Twitch'
									name='twitch'
								/>
								<label htmlFor='twitch'>Twitch</label>
							</div>
						</div>
						<Button isBold hasBorder type='submit' id='loginBtn'>
							Submit
						</Button>
					</Form>
				)}
			</Formik>
		</DashboardLayout>
	);
}

export default AddUser;
