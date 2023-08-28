import React from 'react';

function CardList() {
  const handleClick = (event, label, clickUrl) => {
    event.stopPropagation();
    window.dataLayer.push({
      event: "ct_line-overview",
      eventAction: "line-overview",
      eventLabel: label,
      eventParam1: label,
      click_url: clickUrl
    });
  };

  return (
    <div>
      <section className="section section--feature light">
        <div className="section__body scrollbar scrollbar-md-down">
          <ul className="card-list card-list--scroll-4w">
            <li className="card-list__item">
              <a
                className="card card-feature"
                target=""
                onClick={(e) => handleClick(e, "Gaming Laptops", "https://www.acer.com/us-en/laptops/gaming")}
                href="/us-en/laptops/gaming"
              >
                <div className="card-feature__inner">
                  <picture className="card__picture card__picture--padded image" style={{ objectPosition: '50% 50%' }}>
                    <source media="(max-width: 375px)" srcSet="https://images.acer.com/is/image/acer/predator-triton-17x-ptx17-71-with-fingerprint-perkey-backlit-on-wallpaper-black-01-2?$Line-Overview-M1-M2-S$" />
                    <img className="" src="https://images.acer.com/is/image/acer/predator-triton-17x-ptx17-71-with-fingerprint-perkey-backlit-on-wallpaper-black-01-2?$Line-Overview-M1-M2-S$" alt="predator-triton-17x-ptx17-71-with-fingerprint-perkey-backlit-on-wallpaper-black-01" title="predator-triton-17x-ptx17-71-with-fingerprint-perkey-backlit-on-wallpaper-black-01" style={{ objectPosition: '50% 50%' }} />
                  </picture>
                  <div className="card__body card-feature__body">
                    <h4 className="card__title--feature">Gaming Laptops</h4>
                    <p className="card-feature__text">Laptops built to level up, grind, and conquer all.</p>
                  </div>
                </div>
                <div className="card__footer card-feature__footer">
                  <span className="btn btn--primary card-feature__btn">Learn More</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CardList;

// @media (min-width: 900px)
// .card-feature:hover .card-feature__inner {
//     -webkit-transform: translateY(-54px);
//     transform: translateY(-54px);
//     height: calc(100% - 54px);
// }

// .card-feature__inner {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     -webkit-transform-origin: bottom;
//     transform-origin: bottom;
//     transition-property: -webkit-transform;
//     transition-property: transform;
//     transition-property: transform, -webkit-transform;
//     transition-duration: 150ms;
//     transition-timing-function: ease-in-out;
// }

// @media (min-width: 900px)
// .card-feature:hover {
//     background-color: #fff;
//     border-top: 4px solid #80c343;
//     box-shadow: 0 5px 0.8rem rgba(34,34,34,.3);
//     text-decoration: none;
// }

// .card-feature {
//   width: 100%;
//   display: block;
//   border-top: 4px solid rgba(0,0,0,0);
//   padding: 0;
//   transition: border-color 150ms ease-in-out,box-shadow 150ms ease-in-out;
// }

// .card {
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: nowrap;
//   align-items: flex-start;
//   justify-content: flex-start;
//   height: 100%;
//   width: 100%;
//   text-decoration: none;
// }
