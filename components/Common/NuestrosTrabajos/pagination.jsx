import React, { useState } from "react";
import Link from 'next/link';

import "./styles.scss";

const PaginatedPortafolio = props => {
  const { posts } = props;
  const [position, setposition] = useState(0);
  let data = chunkArrayInGroups(posts, 12);

  function chunkArrayInGroups(array, unit) {
    let results = [],
      length = Math.ceil(array.length / unit);

    for (let i = 0; i < length; i++) {
      results.push(array.slice(i * unit, (i + 1) * unit));
    }
    return results;
  }

  function nextSlide(value) {
    position === Math.round(posts.length / 12 - 1)
      ? position
      : setposition(position + value);
    console.log(position);
    console.log("len", Math.round(posts.length / 12 - 1));
  }

  function prevSlide(value) {
    position === 0 ? position : setposition(position - value);
    console.log(position);
  }

  return (
    <div className="pagination__div">
      <button
        className={
          position === 0 ? "disabled-btn" : "pagination__button"
        }
        onClick={() => prevSlide(1)}
      >
        {"<"}
      </button>
      {data.map((item, index) => {
        return (
          <div key={`nuestros-trabajos__images${index}`} className={`nuestros-trabajos__images ${index === position ? "visible" : "no-visible"}`}>
            {item.map((item2, index2 )=> (
              <Link key={`nuestros-trabajos${index2}`} href={{ pathname: "/trabajos/[id]", query: { id: item2.id } }} as={`/trabajos/[${item2.id}]`} >
              <div className="nuestros-trabajos__img">
                <img src={item2.img} />
                <p className="nuestros-trabajos__text">Ver más</p>
              </div>
              </Link>
            ))}
          </div>
        );
      })}
      <button
        className={
          position === Math.round(posts.length / 12 - 1)
            ? "disabled-btn"
            : "pagination__button"
        }
        onClick={() => nextSlide(1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default PaginatedPortafolio;
