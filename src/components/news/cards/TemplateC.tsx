interface CardProps {
	loading?: never
	title: string
	category: string
	datePublished: string
	cover: string
	categorySlug: string
}

interface LoadingProps {
	loading: true
}

const TemplateC = (props: LoadingProps | CardProps) => {
	let cover
	if(!props.loading) {
		cover = props.cover.replace(/ /g, '%20')
	}
	return (
		<div className={`bg-cover-holder${props.loading ? ' box-loading' : ''}`}>
			{!props.loading && <>
				<div className="bg-cover" style={{ backgroundImage: `url('${cover}')` }}></div>
				<span className={`tag tag-type-c ${props.categorySlug}`}>{props.category}</span>
				<div className="info dark-theme">
					<div className="row row-1 m-b-8 mq-1023-m-b-4">
						<div className="catdate">
							<strong className="category"><a href="#">{props.category}</a></strong> | {props.datePublished}
						</div>
					</div>
					<div className="row row-2">
						<h3 className="title">{props.title}</h3>
					</div>
				</div>
			</>}
		</div>
	)
}

export default TemplateC