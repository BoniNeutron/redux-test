import React from "react";
import { connect } from "react-redux";
import cancha from "../cancha.svg";

const Holders = ({ holders, removeHolder }) => (
  <section>
    <h2>Holders</h2>
    <div className="cancha">
      {holders.map((i) => (
        <article className="titular" key={i.id}>
          <div>
            <img src={i.foto} alt={i.nombre} />
            <button onClick={() => removeHolder(i)}>X</button>
          </div>
          <p>{i.nombre}</p>
        </article>
      ))}
      <img src={cancha} alt="Cancha de futbol" />
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  holders: state.holders,
});

const mapDispatchToProps = (dispatch) => ({
  removeHolder(player) {
    dispatch({
      type: "REMOVE_HOLDER",
      player,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Holders);
