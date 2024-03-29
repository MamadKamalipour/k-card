import React from "react";
import styled from "styled-components";
import "./index.scss";

const Blob = styled.span`
	background-color: ${(props) => props.backgroundColor} !important;
`;
const BlobButton = ({ backgroundColor, children, isLink, link, style }) => {
	return (
		<>
			{isLink ? (
				<a href={link} target='blank' className='blob-btn' style={style}>
					{children}
					<span className='blob-btn__inner'>
						<span className='blob-btn__blobs'>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
						</span>
					</span>
				</a>
			) : (
				<button className='blob-btn' style={style}>
					{children}
					<span className='blob-btn__inner'>
						<span className='blob-btn__blobs'>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
						</span>
					</span>
				</button>
			)}
		</>
	);
};

export default BlobButton;
