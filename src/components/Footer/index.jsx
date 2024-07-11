'use client'
import React from 'react';
import cls from './style.module.scss'
import {nav, media} from '@/scripts';
import {Img, Icon} from '@/interface'
import Link from 'next/link'
import parsePhoneNumber from 'libphonenumber-js'



export default (props) => {
	const phoneNumber = parsePhoneNumber(media.phone)

	
	return (<>
		<footer id='footer' className={cls.footer}>
			<div data-cont className={cls.grid}>
				<div data-box='nav'>
					<h6>Навигация</h6>
					<nav>
						{nav.map((el, i) => <Link key={i} href={el.link}>{el.text}</Link>)}
					</nav>
				</div>
				<div data-box='socials'>
					<h6>Социальные сети</h6>
					<Link href={media.vk}>Vkontakte</Link>
					<Link href={media.youtube}>YouTube</Link>
					<Link href={media.telegram}>Telegram</Link>
				</div>
				<div data-box='privacy-policy'>					
					<a href=''>Политика конфиденциальности</a>
					<a href=''>Персональные данные</a>
				</div>
				<div data-box='connection'>
					<Link target='_blank' href={'mailto:'+media.mail}>{media.mail}</Link>			
					<Link target='_blank' href={phoneNumber.getURI()}>{phoneNumber.formatNational()}</Link>
				</div>
				<Link href={""} data-box='address'>
					<p>Россия <br /> г. Санкт-Петербург ул. Благодатная, 40</p>
				</Link>
				<div data-box='icons'>
					<Link target='_blank' href={media.telegram}><Icon i='telegram'/></Link>
					<Link target='_blank' href={media.whatsapp}><Icon i='whatsapp'/></Link>
					<Link target='_blank' href={'mailto:'+media.mail}><Icon i='mail'/></Link>
				</div>

				<Link target='_blank' href={''} className={cls.btn}>Получить предложение</Link>
				<a href={'#top'} className={cls.top}><Icon i='arrow-t'/></a>
				<a href="" className={cls.logo}><Img priority={true} src="full-logo.svg" alt='logo' /></a>
			</div>
		</footer>
	</>);
}
