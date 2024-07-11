'use client'
import React from 'react'
import cls from './style.module.scss'
import {Img, Icon} from '@/interface'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {nav, media} from '@/scripts';
import parsePhoneNumber from 'libphonenumber-js'




export default (props) => {
  const pathname = usePathname()
	const phoneNumber = parsePhoneNumber(media.phone)


	return (<>
		<header id='footer' className={cls.header}>
			<div data-cont className={cls.grid} >
				<a href="" className={cls.logo}><Img priority={true} src="full-logo.svg" alt='logo' /></a>
				<nav className={cls.nav}>
					{nav.map((el, i) => <Link data-active={pathname == el.link} key={i} href={el.link}>{el.text}</Link>)}
				</nav>
				<div className={cls.media}>
					<Link target='_blank' name='phone' href={phoneNumber.getURI()}>{phoneNumber.formatNational()}</Link>
					<Link target='_blank' name='social' href={media.telegram}><Icon i='telegram'/></Link>
					<Link target='_blank' name='social' href={media.whatsapp}><Icon i='whatsapp'/></Link>
					<Link target='_blank' name='social' href={'mailto:'+media.mail}><Icon i='mail'/></Link>
					<Link name='basket' href={'/basket'}><Icon i='cart'/></Link>
				</div>
			</div>
		</header>
	</>); 
}
