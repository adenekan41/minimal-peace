import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Article, ActionPanel } from './';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/layout/index';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ContactPage = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "contact-us.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	return (
		<Layout
			title="Contact Me"
			pageMask="Contact"
			description="Get in touch or mail me directly on Ifepeace@rocketmail.com
    "
		>
			<ContactWrapper>
				<div className="row align-items-center">
					<div className="col-md-6">
						<Article>
							<h1>Contact Me</h1>
							<p className="my-3">
								Get in touch or mail me directly on Ifepeace@rocketmail.com
							</p>
							<ContactForm
								action="https://formspree.io/ifepeace@rocketmail.com"
								method="POST"
							>
								<input
									type="text"
									className="form-control"
									name="name"
									autocomplete="name"
									placeholder="Full Name"
									aria-required="true"
									aria-invalid="true"
									required
								/>
								<input
									type="email"
									className="form-control"
									name="email"
									autocomplete="email"
									placeholder="Email Address"
									aria-required="true"
									aria-invalid="true"
									required
								/>
								<textarea
									placeholder="Message"
									className="form-control"
									name="message"
									aria-required="true"
									aria-invalid="true"
									required
								></textarea>
								<ActionPanel className="d-md-flex d-block">
									<button type="submit" className="btn btn-outline-black">
										Send Message
									</button>
									<AniLink
										className="btn btn-black"
										swipe
										duration={0.5}
										direction="right"
										top="entry"
										entryOffset={80}
										to="/about"
									>
										About me
									</AniLink>
								</ActionPanel>
							</ContactForm>
						</Article>
					</div>
					<div className="col-md-6">
						<Img
							fluid={data.placeholderImage.childImageSharp.fluid}
							className="d-none d-md-block"
						/>
					</div>
				</div>
			</ContactWrapper>
		</Layout>
	);
};

const ContactForm = styled.form`
	input,
	textarea {
		box-shadow: none;
		border: 1px solid #ddd;
		padding: 20px 25px;
		font-size: 14px;
		background: transparent;
		resize: none;
		margin-bottom: 1rem;
		&:focus {
			box-shadow: none;
			border: 1px solid var(--cw);
		}
	}
`;

const ContactWrapper = styled.div`
	.gatsby-image-wrapper {
		position: relative;
		overflow: hidden;
		width: 50%;
		margin: auto;
	}
`;
export default ContactPage;
