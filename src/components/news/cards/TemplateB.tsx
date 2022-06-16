import useMediaQuery from "../../library/useMediaQuery"
interface CardProps {
	loading?: never
	title: string
	content: string
	category: string
	datePublished: string
	cover: string
	categorySlug: string
}

interface LoadingProps {
	loading: true
}

const TemplateB = (props: LoadingProps | CardProps) => {
	let cover, content
	if (!props.loading) {
		cover = props.cover.replace(/ /g, '%20')
		content = props.content.replace(/<[^>]*>?/gm, '')
	}

	return (
		<div className="flex flex-jc-s g-col-16 flex-h-100p">
			{useMediaQuery('(min-width: 768px)') &&
				<>
					<div className="col col-1 h-100 flex-mw-unset">
						<div className={`bg-cover-holder${props.loading ? ' box-loading' : ''}`}>
							{!props.loading && <>
								<div className="bg-cover" style={{ backgroundImage: `url(${cover})` }}></div>
								<div className={`tag tag-type-a ${props.categorySlug}`}>{props.category}</div>
							</>}
						</div>
					</div>
					<div className="col col-2 flex-grow">
						<div className="row row-1 m-b-16">
							<div className={`catdate${props.loading ? ' box-loading' : ''}`}>
								{!props.loading && <>
									<strong className="category"><a href="#">{props.category}</a></strong> | {props.datePublished}
								</>}
							</div>
						</div>
						<div className="row row-2 m-b-16">
							<h3 className={`title${props.loading ? ' box-loading' : ''}`}>
								{!props.loading && props.title}
							</h3>
						</div>
						<div className="row row-3">
							<div className={`content${props.loading ? ' box-loading' : ''}`}>
								{!props.loading && <>
									<span className="content-inline">{content}</span>
									<a href="#"><strong>Read more</strong></a>
								</>}
							</div>
						</div>
					</div>
				</>
			}
			{useMediaQuery('(max-width: 767px)') &&
				<>
					<div className="flex flex-jc-s g-col-8">
						<div className="col col-1 flex-mw-unset">
							<div className={`bg-cover-holder${props.loading ? ' box-loading' : ''}`}>
								{!props.loading && <>
									<div className="bg-cover" style={{ backgroundImage: `url('${cover}')` }}></div>
								</>}
							</div>
						</div>
						<div className="col col-2 flex-grow">
							<div className="row row-1 m-b-8">
								<div className={`catdate${props.loading ? ' box-loading' : ''}`}>
									{!props.loading && <>
										<strong className="category">
											<a href="#"><span className={`tag tag-type-a free ${props.categorySlug}`}>{props.category}</span></a>
										</strong> | {props.datePublished}
									</>}
								</div>
							</div>
							<div className="row row-2 m-b-8">
								<h3 className={`title${props.loading ? ' box-loading' : ''}`}>
									{!props.loading && props.title}
								</h3>
							</div>
						</div>
					</div>
				</>
			}
		</div>
	)
}

export default TemplateB