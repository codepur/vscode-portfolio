import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitter, IconMail, IconWorld } from '@tabler/icons-react';
import styles from '../styles/ContactCode.module.css';

const contactItems = [
  { 
    icon :  IconWorld,
    social: 'website',
    link: 'nitinranganath.me',
    href: 'https://nitinranganath.me',
  },
  { 
    icon :  IconMail,
    social: 'email',
    link: 'nitinranganath@gmail.com',
    href: 'mailto:nitinranganath@gmail.com',
  },
  { 
    icon :  IconBrandGithub,
    social: 'github',
    link: 'codepur',
    href: 'https://github.com/codepur',
  },
  { 
    icon :  IconBrandLinkedin,
    social: 'linkedin',
    link: 'codepur',
    href: 'https://www.linkedin.com/in/codepur/',
  },
  { 
    icon :  IconBrandTwitter,
    social: 'twitter',
    link: 'iamnitinr',
    href: 'https://www.twitter.com/iamnitinr',
  },
  { 
    icon :  IconBrandInstagram,
    social: 'instagram',
    link: 'iamnitinr',
    href: 'https://www.instagram.com/_let_variable',
  },

  { 
    icon :  IconBrandTelegram,
    social: 'telegram',
    link: 'sweetcodepur',
    href: 'https://t.me/sweetcodepur',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map(({ link,href,social,icon: Icon}, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;<Icon className=''/>{social}:{' '}
          <a href={href} target="_blank" rel="noopener">
            {link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
