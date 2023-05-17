import React from 'react';
import "./parallax.css"
const Parallax = () => {
    return (
        <div>
            <div className="backfig1">
                <div className="text">
                    <span className="border">wooneung city</span>
                </div>
            </div>
            <section className="section section-light">
                <h2>
                    패럴랙스 연습하기
                </h2>
                <p>
                    쉽진 않다
                </p>
            </section>
            <div className="backfig2">
                <div className="text">
                    <span className="border trans">연습연습</span>
                </div>
            </div>
            <section className="section section-dark">
                <h2>
                    패럴랙스 연습하기
                </h2>
                <p>
                    짱이야
                </p>
            </section>
            <div className="backfig3">
                <div className="text">
                    <span className="border trans">짜자잔</span>
                </div>
            </div>
            <section className="section section-light">
                <h2>
                    패럴랙스!
                </h2>
                <p>
                    글
                </p>
            </section>
            <div className="backfig1">
                <div className="text">
                    <span className="border">PARALLAX END</span>
                </div>
            </div>
        </div>
    );
};

export default Parallax;