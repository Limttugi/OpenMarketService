interface FooterSNSLink_I {
  href: string;
  imgSrc: string;
  snsName: string;
}

const FooterSNSLink = ({ href, imgSrc, snsName }: FooterSNSLink_I) => {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      <img src={imgSrc} alt={snsName + 'LinkImage'} />
    </a>
  );
};

export default FooterSNSLink;
