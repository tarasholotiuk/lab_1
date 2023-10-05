import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
	const arr = [
		{
			id: 1,
			title: "Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago",
			content: "Содержание статьи 1",
		},
		{ id: 2, title: "Jobs for Economic Majors: Specialized/unique jobs", content: "Содержание статьи 2" },
		{
			id: 3,
			title: "GM extends vehicle production cuts due to global chip shortage",
			content: "Содержание статьи 2",
		},
		{
			id: 4,
			title: "Analysis: Can you buy a Tesla with bitcoin? How the payments might work",
			content: "Содержание статьи 2",
		},
		{ id: 5, title: "TOP stocks for February 2021", content: "Содержание статьи 2" },
		{
			id: 6,
			title: "Honda raises full-year profit forecast helped by car sales rebound, cost cuts",
			content: "Содержание статьи 2",
		},
	];

	return (
		<>
			<h2>Список статей</h2>
			<ul className="list-group">
				{arr.map((article) => (
					<li key={article.id} className="list-group-item">
						<Link to={`/article/${article.id}`}>{article.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Articles;
