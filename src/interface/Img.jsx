'use client'
import Image from 'next/image'

export default ({src='', ...props}) => {
	
	return (<>
		<Image src={'/images/' + src} {...props} width={200} height={100}/>
	</>);
}
