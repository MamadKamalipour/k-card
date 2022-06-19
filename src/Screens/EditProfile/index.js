import { Field, Form, Formik } from "formik";
import React from "react";
import "./index.scss";

const EditProfile = () => {
	return (
		<>
			<section className=''>
				<Formik
					// validationSchema={AddPropertyValidate}
					initialValues={{
						avatar: "",
						firstName: "",
						lastName: "",
						email: "",
						phoneNumber: "",
						telegram: "",
					}}
					// onSubmit={(e) => formSubmitHandler(e)}
				>
					{({ values, errors }) => (
						<Form>
							{/* avatar and name*/}
							<div className='basic-information-wrapper first-field-secion section container'>
								<h2>
									ویرایش <span className='color-orange'>اطلاعات</span>
								</h2>
								<div className='basic-information'>
									<div className='basic-information-first'>
										<div className='avatar-upload'>
											<div className='avatar-edit'>
												<input
													type='file'
													id='imageUpload'
													accept='.png, .jpg, .jpeg'
												/>
												<label
													htmlFor='imageUpload'
													className='fas fa-pen'
												></label>
											</div>
											<div className='avatar-preview'>
												<div
													id='imagePreview'
													style={{
														backgroundImage:
															"url(http://i.pravatar.cc/500?img=7)",
													}}
												></div>
											</div>
										</div>
									</div>
									<div className='basic-information-seconde'>
										<div className='form-floating mb-3'>
											<Field
												type='text'
												className='form-control'
												id='firstName'
												placeholder='نام'
												name='firstName'
											/>
											<label htmlFor='firstName'>نام </label>
										</div>
										<div className='form-floating mb-3'>
											<Field
												type='text'
												className='form-control'
												id='lastName'
												placeholder='نام خانوادگی'
												name='lastName'
											/>
											<label htmlFor='lastName'>نام خانوادگی</label>
										</div>
									</div>
								</div>
							</div>
							{/* email and phone number */}
							<div className='seconde-field-secion section container'>
								<h2>
									ویرایش <span className='color-orange'>شماره تماس</span> و ایمیل
								</h2>
								<div className='form-floating mb-3 input-wrapper'>
									<Field
										type='email'
										className='form-control'
										id='email'
										placeholder='ایمیل'
										name='email'
									/>
									<label htmlFor='email'>ایمیل </label>
								</div>
								<div className='form-floating mb-3 input-wrapper'>
									<Field
										type='text'
										className='form-control'
										id='phoneNumber'
										placeholder='شماره تماس'
										name='phoneNumber'
									/>
									<label htmlFor='phoneNumber'>شماره تماس</label>
								</div>
							</div>
							{/* social medias */}
							<div className='third-field-secion section container'>
								<h2>
									ویرایش <span className='color-orange'>شبکه های مجازی</span>
								</h2>
								{/* telegram */}
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
								<div className='form-floating mb-3 input-wrapper'>
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
						</Form>
					)}
				</Formik>
			</section>
		</>
	);
};

export default EditProfile;
