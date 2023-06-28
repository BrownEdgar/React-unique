import ContentLoader from 'react-content-loader'

const MyLoader = (props) => (
	<ContentLoader viewBox="-10 0 440 86" {...props} width={700}>
		{/* Only SVG shapes */}
		<rect x="0" y="0" rx="5" ry="5" width="165" height="80" />
		<rect x="170" y="17" rx="4" ry="4" width="200" height="10" />
		<rect x="170" y="40" rx="3" ry="3" width="150" height="10" />
		<rect x="170" y="60" rx="3" ry="3" width="100" height="10" />
	</ContentLoader>
)
export default MyLoader;