export default function PageHero({ title, subtitle, bgImage, children }) {
  return (
    <div className="page-hero" style={{ backgroundImage: bgImage }}>
      <h1 className="page-hero__title">{title}</h1>
      {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      {children}
    </div>
  );
}