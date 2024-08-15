import React from "react";
import "./ragService.css";
import Navbar from "../Navbar/Navbar";

const RagService = () => {
  return (
    <>
      <Navbar />
      <header className="header">
        <div className="container">
          <h1 className="headerTitle">RECYCLE RECOVER</h1>
          <nav className="nav">
            <ul className="navList">
              <li className="navItem">
                <a className="navLink" href="#reduce">
                  Reduce
                </a>
              </li>
              <li className="navItem">
                <a className="navLink" href="#reuse">
                  Reuse
                </a>
              </li>
              <li className="navItem">
                <a className="navLink" href="#recycle">
                  Recycle
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main">
        <section id="reduce" className="section">
          <div className="container">
            <h2 className="sectionTitle">Reduce</h2>
            <p className="sectionText">
              Reducing waste means choosing to consume and throw away less. For
              example, buying in bulk can reduce packaging, and choosing
              products with less packaging can help reduce waste.
            </p>
            <img
              className="sectionImage"
              src="https://www.shutterstock.com/shutterstock/photos/1880590993/display_1500/stock-vector-ways-to-reduce-plastic-change-single-use-disposable-things-on-reusable-zero-waste-and-sustainable-1880590993.jpg"
              alt="Reduce"
            />
          </div>
        </section>
        <section id="reuse" className="section">
          <div className="container">
            <h2 className="sectionTitle">Reuse</h2>
            <p className="sectionText">
              Reusing involves finding ways to use items again instead of
              throwing them away. This can include repairing items, donating
              them, or finding creative new uses.
            </p>
            <img
              className="sectionImage"
              src="https://media.istockphoto.com/id/1365592285/photo/circular-economy-concept-energy-consumption-and-co2-emissions-are-increasing-sharing-reusing.jpg?s=612x612&w=0&k=20&c=8djwh0oFdu-Mqloo-P2q7UqkXzwgSMuBYrmBgtlyaPE="
              alt="Reuse"
            />
          </div>
        </section>
        <section id="recycle" className="section">
          <div className="container">
            <h2 className="sectionTitle">Recycle</h2>
            <p className="sectionText">
              Recycling means turning waste into new products. This process
              reduces the need for raw materials and can help conserve natural
              resources.
            </p>
            <img
              className="sectionImage"
              src="https://d14ty28lkqz1hw.cloudfront.net/data/org/16839/media/img/source/edit/1985201_edit.jpg"
              alt="Recycle"
            />
          </div>
        </section>
      </main>

      {/* <Footer/> */}
    </>
  );
};

export default RagService;
