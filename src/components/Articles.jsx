import React from "react";
import { Link } from "react-router-dom";

const Articles = () => {
	const arr = [
		{
			id: 1,
			title: "Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago",
			img: "https://s3-alpha-sig.figma.com/img/97d9/fd11/bcecb7ec3d53bda3f1a5e738952d3e7d?Expires=1697414400&Signature=lSVmDrMUTFH8wGkSMmZaPzVGGK9cBzxd76m2WsB6SnRgeWV~bGySfPFVGV2Wom8p31KuRGY4bv2ITkaKCWHSRfteH5UE2nFQhNlPnFJvCQWDH42OLlPr76J~B0zOxNvHXiLNts27~axe70r-Yxv2L55H5WEpKtzE5VC69qsB93Praz~LAQNE0~HqzckWq24oEeZgnOkA~pn1FfeRaZb44AYrNURudqtKyMikWaMI2jrP4~Kp8aqr~gsSkBcE4A0hncodIuvhwc4ECPF4Ddf4-Jzhfhapu8FaQkXd48TXSGk4Ak9CnVjxml9HdOTwhp2yCz7ORt4JnjqzXG5uA7Esog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima corporis deleniti nisi accusantium aspernatur enim quidem non obcaecati molestiae provident aperiam, porro neque distinctio, sint, fugit itaque! Voluptatem, aliquam?",
			src: "https://www.reuters.com/article",
		},
		{
			id: 2,
			title: "Jobs for Economic Majors: Specialized/unique jobs",
			img: "https://s3-alpha-sig.figma.com/img/17e0/83ec/e619949a139155ee53d336729eabe413?Expires=1697414400&Signature=Hr9~QjepugBHiTGz53gJe8iMuyJO9tUNKOf0sl35ursUxODmiLbpyFHq1z89RCTh~sC8dqxEwlOIrR3N0SwluCK4ABWk44v3NwMLRRyYjsoKnNY8ZhhkwOKIkHF60tcDyuq-pSRNH0yEZNB1WJCuzHOSHfp9dNH9gKX31pzOyiNYQBuRa8lixjHuZ1SwUEALxSZ64sXi4i3O9TpsSi5~cyBIkU9lxPm8Wh1E7B~EYVj1aNwhS~Or~E~WSrjv~tjrHqS7RvZDGqALcFP6f3DJ6cm6rdBnNJtyzm6iYZgzn5Zmunp0Vht1e1GISNpw301bwdgBpgzlCSd4LggavGHG~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio accusantium autem omnis voluptatem iusto reprehenderit voluptate sit nulla laboriosam eum earum beatae praesentium ipsum architecto illum exercitationem, qui, dolore inventore!",
			src: "Jobs for Economic Majors: Specialized/unique jobs https://www.thebalancecareers.com",
		},
		{
			id: 3,
			title: "GM extends vehicle production cuts due to global chip shortage",
			img: "https://s3-alpha-sig.figma.com/img/46cd/ef66/c78475711741df531825ffe146661825?Expires=1697414400&Signature=TOaCTBBWdGEksVxlEJsTO60EKOFuWZl2C4SCdw-vghzV4eWpIBJCi6Xtte~E3TN-zW36fAxIVjctHzW3uO7uKOKtpq9eaF2vmShmwfDNOhLS0j7A8PiGmq~qXd~jdBVbSVMyhDoPkgYcXADdaVok4TLZyj6q7pI6PJ6uHX~k1oirJ~PEuSlS5UNKB4RWg5EESt86H-ztfBWl8IKxLiyUyqnmOaq1-AsORe-7liQ4kzkjLsBpgX-Um1HJCsWcQxuuZ~JcQ7rA1RY9qvUydKYiUHEEglEsBnYX8qcJqucqU9nsd3CWhieX6M0AxgP~JIy79F4lvo4YM85WkGR58nAvFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			content:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex nam debitis esse exercitationem delectus provident odit doloribus fuga ea molestias, quia, blanditiis, assumenda rerum quibusdam in possimus obcaecati perspiciatis officia!",
			src: "https://www.reuters.com/article",
		},
		{
			id: 4,
			title: "Analysis: Can you buy a Tesla with bitcoin? How the payments might work",
			img: "https://s3-alpha-sig.figma.com/img/e24d/2e05/617c258736c0a8a197307f8f58a57913?Expires=1697414400&Signature=eQcPq2A0xbOOfZ6~b2~cql~s62XNskbaWtHimeVb8RuLVTVnPE0PG6b34WVODMV4HjwbuCVyIqsa3pM3ytWUyG9vlCR8WETJxZWuwEX--DbReywp4qzrZzjbJr53pe7g1~eqeP4twMCnwIyS1tcHVFnG-y0x3~o43AyAMhVOwSfZJmyuMFfQMQfblY1wiNL9XXLo~rCIqnL-Zu0xtKIT2V9Umb-UfMdKA7iVDVTajCr-8LXmgZRubgeGl4JDdhdeocotEmFfzQZ6IN3mID0IeYVvyBiUxxOV35bBKzntj~qKY3X8fm8MQTVKApkAVjmElWaUFVmsaDr6n95wbHD5cQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			content:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestiae nulla excepturi architecto nostrum nesciunt sit ipsa maxime, eius quibusdam quos iusto explicabo placeat laudantium culpa numquam temporibus eveniet vel!",
		},
		{
			id: 5,
			title: "TOP stocks for February 2021",
			img: "https://s3-alpha-sig.figma.com/img/4145/2d31/ae8f4fb8f5dd260636f408bc5e765d48?Expires=1697414400&Signature=SHVGWMAa1SXVxCLifb5~Ghz8UsqnEzl2aXrMooyhi19s4aJAtkzR5UOdj14oChfKZ7YCsS2szllnNLShkiqFr-0BW6n3gPGt7~k9KQ3QIDoMcsxHmGwkYLFcyMK7gpZluL7PiS5snavBqczvBMSxj0kbqt7zafDA~sfbJ~OuxYh9b4RiThgGWCnSZty-SVa~DiJ5NOVd3qNapKvRwhOh3VXAMhLgscyZc4vYUS~q85~omkBsbXO5mpOGNJq8xQz7Gm1wtU69xNtsAjTt6Uo8NRnNQmgvgVXUEObuNvi8CGzUwxDPdA-Ys1NTn4L1cc-Q9TvDZrzHCzfV9u6~OFYPeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			content:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae quia eligendi accusamus commodi dolore amet facere quibusdam dolorem facilis, vero soluta non ab cum quod quas quam dolor! Dignissimos.",
		},
		{
			id: 6,
			title: "Honda raises full-year profit forecast helped by car sales rebound, cost cuts",
			img: "https://s3-alpha-sig.figma.com/img/c44c/fbef/8cec960c47f2a77e00118ca42af9b48c?Expires=1697414400&Signature=P5oYJYnYH0U4m6nu~KuQK7cSLYiZlMmz6DYBKjzwcAEW3Ffn~wp8Pd-LNqz25m1yIlyvyZ1~DbHx7y44R9anZ~QJNFFyBmP1udwwVoZ5F4BgmWK~4Qw9JSqdR1RWB0BzKfnk7BqISLgfp~~iVd062yNAtjkcSlylcHBNEc~wn44LxWg9NsQjV~UMnRhpAvEjsjsjW3IkCEnEZ6r76feUnebXmm-j~mYB67pZn1wuOo95NuwO~-Bl~5BjefADBxChuvXwHLZrLgSkbZKrT17j7F3wrVZgS-KBazhEWxnjbUweFtNVh9cRbwgJNdoZ047BkP71zSX1ov7qArgzQFhajA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia animi nihil, enim et est suscipit aliquam, quae unde pariatur dolores laudantium, debitis asperiores laboriosam id saepe velit inventore corrupti odit!",
		},
	];

	return (
		<>
			<ul className="list-group">
				{arr.map((article) => (
					<li key={article.id} className="list-group-item">
						<Link to={`/article/${article.id}`}>
							<img src={article.img} alt="err" />
							<h2>{article.title}</h2>
							<span>{article.src}</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default Articles;
