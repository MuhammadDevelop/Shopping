import f from './Footer.module.scss'
import headerImgTwo from '../../images/headerImg2.png'
import headerImgIconOne from '../../images/facebook.png'
import headerImgIconTwo from '../../images/twitter.png'
import footerLastImg from '../../images/footer.png'


const Footer = () => {
  return (
<div className={f.footer}>
    <div className={f.container}>
        <ul className={f.footer___list}>
            <li className={f.footer__listItem}>
              <img src={headerImgTwo} alt="" className={f.footer__listItemImg} />
              <p className={f.footer__text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when <br /> an unknown printer.
              </p>

            </li>
            <li className={f.footer__listItem}>
              <h1 className={f.footer__tit}>
              Follow Us
              </h1>
              <p className={f.footer__text}>
              Since the 1500s, when an unknown <br /> printer took a galley of type and <br /> scrambled.
              </p>
              <div className={f.footer__imgGroup}>
                <img src={headerImgIconOne} alt="" className={f.fopoter__imgIcon} />
                <img src={headerImgIconTwo} alt="" className={f.fopoter__imgIcon} />
              </div>
            </li>
            <li className={f.footer__listItem}>
            <h1 className={f.footer__tit}>
              Contact Us
              </h1>
              <p className={f.footer__text}>
              E-Comm , 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
              </p>
            
            </li>
        </ul>
        <div className={f.footer__last}>
          <p className={f.footer__lastText}>
          © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <img src={footerLastImg} alt="" className={f.footer__lastImg} />
        </div>
    </div>
</div>
  )
}

export default Footer