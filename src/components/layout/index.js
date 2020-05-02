import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BodyStyling } from './style/style';
import Img from 'gatsby-image';

import './style/normalize.css';
import './style/base.css';

import NavLayout from '../navbar';
import SEO from '../seo';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const Layout = ({
	children,
	description,
	lang,
	meta,
	title,
	pageMask = 'Design',
}) => {
	const [wake, setWake] = useState(true);
	return (
		<>
			<SEO description={description} lang={lang} meta={meta} title={title} />
			<NavLayout />
			<BodyStyling />
			<PageMask>
				<h3 aria-Hidden="true">{pageMask}</h3>
			</PageMask>
			<Wrapper>
				<WrapperTablet
					onClick={() => setWake(false)}
					className={`${wake && 'wake'}`}
				>
					{wake && <p className="tap__wake">Tap To Wake</p>}
					<div className={`${!wake && 'animated fadeInUp'} container`}>
						{children}
					</div>
				</WrapperTablet>
			</Wrapper>
		</>
	);
};

const Wrapper = styled.main`
	background: var(--bg);
	height: calc(100vh - 97px);
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PageMask = styled.figure`
	position: fixed;
	bottom: 0;
	margin: 0;
	right: 0;
	h3 {
		user-select: none;
		opacity: 0.9;
		color: var(--mark);
		font-size: 400px;
		margin: 0;
		font-weight: 900;
		text-shadow: 0px 0px 7px #f6f6f6;

		letter-spacing: -2.7rem;
	}
`;
const WrapperTablet = styled.div`
	.tap__wake {
		position: absolute;
		color: #fff;
		font-size: 20px;
		font-weight: 900;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 999;
	}
	/* border: 23px solid var(--cw);
	border-radius: 24px;
	min-width: 80vw;
	height: 85vh;
	box-shadow: 0 0 0 0.25em silver;
	display: flex;
	align-items: center;

  z-index: 99; */
	border: 5px solid silver;
	border-radius: 2.39em;
	min-width: 83vw;
	padding: 0 4rem;
	overflow: hidden;
	height: 85vh;
	position: relative;
	box-shadow: 22px 19px 20px -6px #0e0e0e70;
	/* box-shadow: 0 0 0 0.25em silver; */
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	-webkit-align-items: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	z-index: 99;

	&:before {
		content: '';
		height: 100%;
		width: 100%;

		top: 0;
		right: 0;
		border: 23px solid black;
		position: absolute;
		border-radius: 2rem;
		/* box-shadow: 0 2px 15px red; */
	}
	&.wake {
		&:before {
			background: url(https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
			z-index: 999;
			background-size: cover;
			background-position: center;
			background-blend-mode: overlay;
			background-color: #00000094;
		}
	}

	@media (max-width: 768px) {
		display: block;
		width: 100%;
		padding: 0rem;
		margin-top: 5rem;
		height: 100%;
		border: none;
		border-radius: none;
	}
`;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default Layout;
